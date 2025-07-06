import { useState, useEffect } from 'react';
import { animeSeason } from '../services/AnimeServices';
import { Anime } from '../models/Anime';
import { AnimeResponse, Pagination } from '../models/AnimeResponse';

export const useAnimeSeason = (season: string, seasonYear: string) => {
    const [animeSeasonList, setAnimeSeasonList] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [animePagination, setAnimePagination] = useState<Pagination | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const getAnimeSeason = async () => {
            setLoading(true);
            try {
                const data: AnimeResponse = await animeSeason(season, seasonYear, currentPage);
                const uniqueAnime = Array.from(new Map(data.data.map((anime: Anime) => [anime.mal_id, anime])).values());
                setAnimeSeasonList(uniqueAnime);
                setAnimePagination(data.pagination);
                setHasNextPage(data.pagination?.has_next_page);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnimeSeason();
    }, [season, seasonYear, currentPage]);

    return { animeSeasonList, animePagination, loading, error, currentPage, setCurrentPage, hasNextPage, setHasNextPage };
};

