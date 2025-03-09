// Code to display the current anime on TV
import { useAnimeTv, Anime } from '../hooks/useAimeTv';
import { ShowCard } from '../components/AnimeCard';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';

export function AnimeOnTv() {
    const { animeList, loading, error } = useAnimeTv();

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message= {error}/>;

    return (
        <>
         <div className="mt-16 p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {animeList && animeList.map((anime: Anime) => (
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