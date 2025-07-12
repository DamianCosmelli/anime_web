import { AnimeTituloInfo } from './Titulos/AnimeTituloInfo';
import { Anime } from '../../models/Anime'
import { } from '@heroicons/react/24/outline'
import { getSeasonName } from '../../utils/seasonConverts';

export const AnimeInfoExt = ({ anime }: { anime: Anime }) => {
    return (
        <>
            <div className="p-6 h-auto w-full">
                {/* Título fuera del grid, ocupa 100% */}
                <div className="mb-4 w-full">
                    <AnimeTituloInfo anime={anime} />
                </div>

                {/* Contenedor centrado y más reducido */}
                <div className="max-w-[90%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                        {/* Imagen del Anime */}
                        <img src={anime.images.jpg.large_image_url} alt={anime.title}
                            className="w-full max-h-[65vh] h-auto rounded-lg shadow-md" />

                        {/* Detalles del Anime */}
                        <div className="flex flex-col p-4 w-full max-h-[65vh] overflow-auto">
                            <p className="text-white p-2">{anime.type ? `Clasificación: ${anime.type}` : ""}</p>
                            <p className="text-white p-2">{anime.episodes ? `Episodios: ${anime.episodes}` : "Episodios: No informado"}</p>
                            <p className="text-white p-2">{anime.year ? `Año: ${anime.year}` : ""}</p>
                            <p className="text-white p-2">{anime.season ? `Temporada: ${getSeasonName(anime.season)}` : ""}</p>                        
                            <p className="text-white p-2">{anime.aired?.string ? `(${anime.aired.string})` : "No informado"}</p>
                            <p className="text-white p-2">{anime.score ? `Puntuación: ${anime.score}` : ""}</p>
                            <p className="text-white p-2">{anime.rank ? `Ranking: ${anime.rank}` : ""}</p>

                            {/* Muestra boton de trailer solo si esta presente la URL de youtube */}
                            {anime.trailer.url ? (
                            <div className="mt-auto w-full">
                                <a href={anime.trailer.url} target="_blank" rel="noopener noreferrer"
                                    className="block w-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-4 py-2 text-center transition duration-300 ease-in-out">
                                    Trailer
                                </a>
                            </div>): ("")}
                        </div> 

                        {/* Sinopsis */}
                        <textarea className="text-white w-full max-h-[65vh] p-4 text-justify border rounded-lg overflow-auto resize-none" disabled>
                            {anime.synopsis}
                        </textarea>
                    </div>
                </div>
            </div>
        </>

    );
}
