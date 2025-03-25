import { useState, useEffect } from 'react';
import { animeTv } from '../services/EmisionService';
import { Anime } from '../models/Anime'

export const useAnimeTv = () => {
    const [animeList, setAnimeList] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const data: Anime[] = await animeTv();
                const uniqueAnime = Array.from(new Map(data.map((anime: Anime) => [anime.mal_id, anime])).values()); // filtra duplicados
                setAnimeList(uniqueAnime);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnime();
    }, []);

    return { animeList, loading, error };
};