
import { Anime } from '../../../models/Anime'

export function AnimeTituloCard({ anime }: { anime: Anime }) {

    return (
        <>     
        <img className="w-full h-full object-cover" src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 opacity-70 text-white p-2 rounded-tr-lg">
            <h5 className="font-bold text-white truncate flex-grow text-xl sm:text-lg md:text-xl leading-tight">
                {anime.title}
            </h5>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
            <p className="text-white">Episodio:  {anime.episodes || 'No Informado'} </p>
        </div>
        </>
    );
}