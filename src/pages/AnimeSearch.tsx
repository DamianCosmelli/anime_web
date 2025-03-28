//import { ErrorMessage } from '../components/common/ErrorMessage';
//import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { AnimeGrid } from "../components/Anime/AnimeGrid";
//import { AnimeList } from "../components/Anime/AnimeList";
import resultados from '../mocks/Jinka_all_animes.json'
import {Anime} from '../models/Anime'
import {Pagination} from '../models/Paginations';

export function AnimeSearch() {
  /*const { videoCheck, loading, error } = useVideoCheck(video);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;*/

  const animes:Anime[] = resultados.data;
  const pages:Pagination = resultados.pagination;

  return (
    <>
      <AnimeGrid animeList={animes ?? []} titlePage='Buscador de Animes'/>
    </>
  );
}

