import { CardProps } from './AnimeCard';
import { AnimeTituloInfo } from './AnimeTituloInfo';

export function AnimeInfo({ title, episodie, imageUrl, youtubeVideoId, synopsis }: CardProps) {

    return (
        <div className="container mx-auto p-4">
            <AnimeTituloInfo title={title} episodie={episodie} />
                        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Anime Image */}
                <div className="space-y-2 rounded-lg content-center">
                    <img src={imageUrl} alt={title} className="w-9/10 rounded-lg shadow-md p-1 " />
                </div>

                {/* Column 2: Synopsis */}
                <div className="text-justify text-gray-800">
                    <h2 className="text-xl font-bold">Synopsis</h2>
                    <textarea className='w-full h-9/10 p-2 text-justify border rounded-lg overflow-auto scroll-smooth resize-none'>{synopsis}</textarea>
                </div>

                {/* Column 3: YouTube Video */}
                <div className="space-y-2 flex flex-col">
                <h2 className="text-xl font-bold">Trailer</h2>
                {/** TODO: mnajar 1- Carga del video | 2- Poner imnagen si video no esta disponible */}
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video player"
                        className="w-full rounded-lg shadow-md"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
