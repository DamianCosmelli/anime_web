import { useState, useEffect } from 'react';
import { animeTop } from '../services/TopService';
import { Anime } from '../models/Anime'

export const useAnimeTop = () => {
    const [animeListTop, setAnimeListTop] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnimeTop = async () => {
            try {
                const data: Anime[] = await animeTop();
                setAnimeListTop(data);
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