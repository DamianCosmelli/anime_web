import { TitlePage } from '../common/TitlePage';
import { AnimeInfoModal } from './AnimeInfoModal';
import { Anime } from '../../models/Anime'

interface AnimeGridProps {
    animeList: Anime[];
    titlePage: string;
}

export function AnimeGrid({ animeList, titlePage}: AnimeGridProps) {
    return (
        <>
            <div className='p-4'>
                <TitlePage title={titlePage} />
                <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                   {animeList && animeList.map((anime: Anime) => (
                        <li key={anime.mal_id} className="flex justify-center">
                            <AnimeInfoModal anime={anime} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}