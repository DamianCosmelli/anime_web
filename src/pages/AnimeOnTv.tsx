// Code to display the current anime on TV
import { useAnimeTv, Anime } from '../hooks/useAimeTv';
import { ShowCard } from '../components/AnimeCard';
import { HeaderPage } from '../components/common/HeaderPage';

export function AnimeOnTv() {
    const { animeList, loading, error } = useAnimeTv();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
        <HeaderPage title="Animes on Tv"/>
         <div className="mt-16 p-4">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {animeList && animeList.map((anime: Anime) => (
                    <li key={anime.id}>
                        <ShowCard 
                            title={anime.attributes.titles.en || anime.attributes.titles.ja_jp}
                            episodies={anime.attributes.episodeLength}
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