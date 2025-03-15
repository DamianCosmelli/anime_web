// Code to display the current anime on TV
import { useAnimeSeason } from '../hooks/useAnimeSeason';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'

//TODO: Cambiar la temporada y el año de la temporada por variables
const season = 'fall';
const seasonYear = '2024';

const Seasons = {
    winter: 'Invierno',
    spring: 'Primavera',
    summer: 'Verano',
    fall: 'Otoño'
};

function getSeasonName(season: keyof typeof Seasons) {
    return Seasons[season] || '';
}

export function AnimeSeason() {
    const { animeSeasonList, loading, error } = useAnimeSeason(season, seasonYear);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message= {error}/>;

    return (
        <>
          <AnimeGrid animeList={animeSeasonList ?? []} titlePage={`Anime de la Temporada ${getSeasonName(season)} del ${seasonYear}`}/>
        </>
    );
};