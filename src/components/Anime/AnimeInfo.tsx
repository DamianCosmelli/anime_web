import { AnimeTituloInfo } from './Titulos/AnimeTituloInfo';
import {AnimeVideo} from './AnimeVideo'
import { Anime } from '../../models/Anime'

export function AnimeInfo({ anime }: { anime: Anime }) {

    return (
        <>
        
        <div className="container p-4">
            <AnimeTituloInfo anime={anime} />
                        
            <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-4">
                {/* Column 1: Anime Image */}
                <img src={anime.attributes.posterImage .small} alt={anime.attributes.titles.en_jp || anime.attributes.titles.en} className="w-full h-full rounded-lg shadow-md" />
                {/* Column 2: Synopsis */}
                <textarea className='text-white w-full h-full p-2 text-justify border rounded-lg overflow-auto scroll-smooth resize-none' disabled>
                  {anime.attributes.synopsis}
                </textarea>
                {/* Column 3: YouTube Video */}
                <AnimeVideo idVideo={anime.attributes.youtubeVideoId} />
            </div>
        </div>
        </>
        
    );
}
