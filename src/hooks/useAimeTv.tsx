import { useState, useEffect } from 'react';
import { animeTv } from '../services/EmisionService';

export const useAnimeTv = () => {
    const [animeList, setAnimeList] = useState();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnime = async () => {
            try {
                const data = await animeTv();
                setAnimeList(data);
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