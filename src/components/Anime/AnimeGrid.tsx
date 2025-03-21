import { Anime } from '../../hooks/useAimeTv';
//import { AnimeCard } from './AnimeCard';
import { TitlePage } from '../common/TitlePage';
import { AnimeInfoModal } from './AnimeInfoModal';


interface AnimeGridProps {
    animeList: Anime[];
    titlePage: string;
    margin:boolean;
}

export function AnimeGrid({ animeList, titlePage, margin }: AnimeGridProps) {
    return (
        <>
            <div className={margin ? 'mt-16 p-4' : 'p-4'} >
                <TitlePage title={titlePage} />
                <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                   {animeList && animeList.map((anime: Anime) => (
                        <li key={anime.id} className="flex justify-center">
                            <AnimeInfoModal
                                title={anime.attributes.titles.en || anime.attributes.titles.ja_jp}
                                episodie={anime.attributes.episodeCount || 'No Informado'}
                                youtubeVideoId={anime.attributes.youtubeVideoId}
                                imageUrl={anime.attributes.posterImage.small}
                                synopsis={anime.attributes.synopsis}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}