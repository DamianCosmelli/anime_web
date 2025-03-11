// Code to display the current anime on TV
import { useAnimeSeason } from '../hooks/useAnimeSeason';
import { Anime } from '../hooks/useAimeTv';
import { ShowCard } from '../components/AnimeCard';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';

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
         <div className="mt-16 p-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Anime de la Temporada {getSeasonName(season)} del {seasonYear}
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {animeSeasonList && animeSeasonList.map((anime: Anime) => (
                    <li key={anime.id}>
                        <ShowCard 
                            title={anime.attributes.titles.en || anime.attributes.titles.ja_jp}
                            episodie={anime.attributes.episodeCount || 'No Informado'}
                            youtubeVideoId={anime.attributes.youtubeVideoId}
                            imageUrl={anime.attributes.posterImage.small}
                        />
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};