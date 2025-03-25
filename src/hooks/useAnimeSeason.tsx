import { useState, useEffect } from 'react';
import { animeSeason } from '../services/SeasonService';
import { Anime } from '../models/Anime';

export const useAnimeSeason = (season:string, seasonYear:string) => {
    const [animeSeasonList, setAnimeSeasonList] = useState<Anime[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAnimeSeason = async () => {
            try {
                const data : Anime[] = await animeSeason(season, seasonYear) ;
                const uniqueAnime = Array.from(new Map(data.map((anime: Anime) => [anime.mal_id, anime])).values()); // filtra duplicados
                setAnimeSeasonList(uniqueAnime);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getAnimeSeason();
    }, [season, seasonYear]);

    return { animeSeasonList, loading, error };
};

