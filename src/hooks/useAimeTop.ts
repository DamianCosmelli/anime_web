import { useState, useEffect } from 'react';
import { animeTop } from '../services/AnimeServices';
import { Anime } from '../models/Anime'
import { AnimeResponse } from '../models/AnimeResponse';

export const useAnimeTop = () => {
    const [animeListTop, setAnimeListTop] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnimeTop = async () => {
            try {
                const data: AnimeResponse = await animeTop();
                setAnimeListTop(data.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnimeTop();
    }, []);

    return { animeListTop, loading, error };
};