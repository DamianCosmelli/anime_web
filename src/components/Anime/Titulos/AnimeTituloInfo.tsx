import { Anime } from '../../../models/Anime'
import { AnimeStatus } from '../AnimeStatus'
import { HandRaisedIcon, FilmIcon } from '@heroicons/react/24/outline'


export function AnimeTituloInfo({ anime }: { anime: Anime }) {
    return (
        <>
            <div className="p-4 bg-emerald-700 rounded-lg shadow-lg gap-4">
                <div className='flex items-center justify-between'>
                    <h1 className="text-base sm:text-lg md:text-xl line-clamp-1 text-gray-900 font-bold">
                        {anime.attributes.titles.en_jp || anime.attributes.titles.en}
                    </h1>
                    <AnimeStatus anime={anime} />
                </div>
                <div className='flex gap-2 mt-2'>
                    <p className=" flex text-base sm:text-lg md:text-xl line-clamp-1 text-gray-800 italic">
                        ({(new Date(anime.attributes.startDate)).getFullYear().toString()})
                    </p>
                    <p className="flex text-base sm:text-lg md:text-xl line-clamp-1 text-gray-800 italic">
                        <FilmIcon className='h-6 w-6' />
                        Episodios: {anime.attributes.episodeCount || 'No Informado'}
                    </p>
                    <div className="hidden sm:block">
                        <p className="flex text-base md:text-xl text-gray-800 italic ">
                            <HandRaisedIcon className='h-6 w-6' />
                            ({anime.attributes.ageRatingGuide || 'No Informado'})
                        </p>
                    </div>

                </div>


            </div>
        </>
    );
}