import { useState, useEffect } from 'react';
import { animeTv } from '../services/AnimeServices';
import { Anime } from '../models/Anime'
import { AnimeResponse, Pagination } from '../models/AnimeResponse';

export const useAnimeTv = () => {
    const [animeList, setAnimeList] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [animePagination, setAnimePagination] = useState<Pagination| null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [hasNextPage, setHasNextPage] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const getAnime = async () => {
            setLoading(true);
            try {
                const data: AnimeResponse = await animeTv(currentPage);
                const uniqueAnime = Array.from(new Map(data.data.map((anime: Anime) => [anime.mal_id, anime])).values()); // filtra duplicados
                setAnimeList(uniqueAnime);
                setAnimePagination(data.pagination);
                setHasNextPage(data.pagination?.has_next_page);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnime();
    }, [currentPage]);

    return { animeList, animePagination, loading, error, currentPage, setCurrentPage, hasNextPage, setHasNextPage };
};