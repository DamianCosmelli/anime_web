import { AnimeTituloInfo } from './AnimeTituloInfo';
import {AnimeVideo} from './AnimeVideo'

export interface AnimeInfoProps {
    title: string;
    episodie: string;
    imageUrl: string;
    youtubeVideoId: string;
    synopsis: string;
  }

export function AnimeInfo({ title, episodie, imageUrl, youtubeVideoId, synopsis }: AnimeInfoProps) {

    return (
        <>
        
        <div className="container p-4">
            <AnimeTituloInfo title={title} episodie={episodie} />
                        
            <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-4">
                {/* Column 1: Anime Image */}
                <img src={imageUrl} alt={title} className="w-full h-full rounded-lg shadow-md" />
                {/* Column 2: Synopsis */}
                <textarea className=' text-white w-full h-full p-2 text-justify border rounded-lg overflow-auto scroll-smooth resize-none'>
                  {synopsis}
                </textarea>
                {/* Column 3: YouTube Video */}
                {/** TODO: mnajar 1- Carga del video | 2- Poner imnagen si video no esta disponible */}
                <AnimeVideo idVideo={youtubeVideoId} />
            </div>
        </div>
        </>
        
    );
}
