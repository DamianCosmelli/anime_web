import { useState, useEffect } from 'react';
import { animeTv } from '../services/EmisionService';

interface AnimeAttributes {
    titles: {
        en: string;
        ja_jp: string;
    };
    episodeLength: string;
    youtubeVideoId: string;
    posterImage: {
        small: string;
    };
}

export interface Anime {
    id: string;
    attributes: AnimeAttributes;
}

export const useAnimeTv = () => {
    const [animeList, setAnimeList] = useState<Anime[] | null>(null);
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