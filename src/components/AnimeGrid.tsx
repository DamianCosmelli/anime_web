import { Anime } from '../hooks/useAimeTv';
import { AnimeCard } from './AnimeCard';
import { TitlePage } from './TitlePage';

interface AnimeGridProps {
    animeList: Anime[];
    titlePage: string;
}

export function AnimeGrid({ animeList, titlePage }: AnimeGridProps) {
    return (
        <>
            <div className="mt-16 p-4">
                <TitlePage title={titlePage} />
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {animeList && animeList.map((anime: Anime) => (
                        <li key={anime.id}>
                            <AnimeCard
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
}