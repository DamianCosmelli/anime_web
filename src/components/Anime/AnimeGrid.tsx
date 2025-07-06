import { AnimeInfoModalAndCard } from './AnimeInfoModalAndCard';
import { Anime } from '../../models/Anime'


interface AnimeGridProps {
    animeList: Anime[];
}

export function AnimeGrid({ animeList}: AnimeGridProps) {
    console.log("AnimeGrid", animeList);// Debugging line to check props
    return (
        <>
            <div className='p-4'>
                <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                   {animeList && animeList.map((anime: Anime) => (
                        <li key={anime.mal_id} className="flex justify-center">
                            <AnimeInfoModalAndCard anime={anime} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}