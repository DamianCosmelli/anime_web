import { CardProps } from './AnimeCard';
import { AnimeTituloInfo } from './AnimeTituloInfo';

export function AnimeInfo({ title, episodie, imageUrl, youtubeVideoId, synopsis }: CardProps) {

    return (
        <>
        
        <div className="container p-4">
            <AnimeTituloInfo title={title} episodie={episodie} />
                        
            <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-4">
                {/* Column 1: Anime Image */}
                <img src={imageUrl} alt={title} className="w-full h-full rounded-lg shadow-md" />
                {/* Column 2: Synopsis */}
                <textarea className='w-full h-full p-2 text-justify border rounded-lg overflow-auto scroll-smooth resize-none'>
                  {synopsis}
                </textarea>
                {/* Column 3: YouTube Video */}
                {/** TODO: mnajar 1- Carga del video | 2- Poner imnagen si video no esta disponible */}
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                    className="h-full w-full rounded-lg shadow-md">
                </iframe>
            </div>
        </div>
        </>
        
    );
}
