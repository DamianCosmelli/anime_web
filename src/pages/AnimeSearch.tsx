import { AnimeGrid } from "../components/Anime/AnimeGrid";
import { ErrorMessage } from "../components/common/ErrorMessage";
import { LoadingPuff } from "../components/common/LoadingPuff";
import { TitlePage } from "../components/common/TitlePage";
import { useAnimeAll } from "../hooks/useAimeAll";
import { PaginationComp } from "../components/common/Pagination";
//import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from "react";
import { animeSearch } from "../services/AnimeServices";
import { AnimeResponse } from "../models/AnimeResponse";
import { Anime } from "../models/Anime";

export const AnimeSearch = () => {
  const { animeList, animePagination, loading, error, currentPage, setCurrentPage, hasNextPage, setHasNextPage } = useAnimeAll();
  const [animeListUpdated, setAnimeListUpdated] = useState(animeList);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setAnimeListUpdated(animeList);
  }, [animeList]);

  const handleSearch = async () => {
    const filteredAnime: AnimeResponse | null = await animeSearch(searchTerm);
    console.log("filteredAnime", filteredAnime);
    if (filteredAnime) {
      const uniqueAnime = Array.from(new Map(filteredAnime.data.map((anime: Anime) => [anime.mal_id, anime])).values());
      const filtered = uniqueAnime.filter(anime => anime.title.toLowerCase().includes(searchTerm.toLowerCase()));
      setAnimeListUpdated(filtered);
      setCurrentPage(1);
      setHasNextPage(false);
      setSearchTerm("");
      setSearching(true);
      setNotFound(filtered.length === 0);
      return;
    } else {
      setAnimeListUpdated([]);
      setNotFound(true);
      setSearching(true);
    }
  };

  if (loading) return <LoadingPuff />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <TitlePage title='Buscar Anime' />
        <div className="flex items-center justify-center space-x-4">
          <input
            type="text"
            placeholder="Buscar anime..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline text-gray-300
          focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              const value = (e.target as HTMLInputElement).value;
              setSearchTerm(value);
            }}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                await handleSearch();
              }
            }}
          />
        </div>

        {animePagination && !searching ? (
          <PaginationComp
            currentPage={currentPage}
            lastPage={animePagination.last_visible_page}
            setCurrentPage={setCurrentPage}
            hasNextPage={hasNextPage}
            setHasNextPage={setHasNextPage}
          />
        ): (
            <div className="text-sm text-gray-600 mr-6 flex items-center gap-1">
              <button
                type="button"
                className="text-emerald-600 cursor-pointer focus:outline-none"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Volver al Catálogo
              </button>
            </div>
        )}
      </div>
      {notFound && searching ? (
        <div className="flex items-center justify-center">
          <ErrorMessage message="Disculpa, el anime buscado no se encuentra." />
        </div>
      ) : (
        <AnimeGrid animeList={animeListUpdated ?? []} />
      )}
    </>
  );
}

