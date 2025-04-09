import { AnimeTituloInfo } from './Titulos/AnimeTituloInfo';
import { AnimeVideo } from './AnimeVideo'
import { Anime } from '../../models/Anime'

export function AnimeInfo({ anime }: { anime: Anime }) {
    console.log("entro en animeInfo");
    console.log(anime);
    return (
        <>

            <div className="p-6 h-auto max-w-screen-lg mx-auto">
                <div className="mb-4">
                    <AnimeTituloInfo anime={anime} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    {/* Column 1: Anime Image */}
                    <img src={anime.images.jpg.large_image_url} alt={anime.title} className="w-full max-h-[65vh] h-auto rounded-lg shadow-md" />
                    {/* Column 2: Synopsis */}
                    <textarea className="text-white w-full max-h-[65vh] p-4 text-justify border rounded-lg overflow-auto scroll-smooth resize-none" disabled>
                        {anime.synopsis}
                    </textarea>
                    {/* Column 3: YouTube Video */}
                    <AnimeVideo idVideo={anime.trailer.youtube_id} />
                </div>
            </div>
        </>

    );
}
