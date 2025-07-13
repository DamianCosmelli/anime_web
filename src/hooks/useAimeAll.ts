import { useState, useEffect } from 'react';
import { animeAll } from '../services/AnimeServices';
import { Anime } from '../models/Anime'
import { AnimeResponse, Pagination } from '../models/AnimeResponse';

export const useAnimeAll = () => {
    const [animeList, setAnimeList] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [animePagination, setAnimePagination] = useState<Pagination | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const getAnimeAll = async () => {
            setLoading(true);
            try {
                const data: AnimeResponse = await animeAll(currentPage);
                const uniqueAnime = Array.from(new Map(data.data.map((anime: Anime) => [anime.mal_id, anime])).values());
                setAnimeList(uniqueAnime);
                setAnimePagination(data.pagination);
                setHasNextPage(data.pagination?.has_next_page);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnimeAll();
    }, [currentPage]);

    return { animeList, animePagination, loading, error, currentPage, setCurrentPage, hasNextPage, setHasNextPage };
};