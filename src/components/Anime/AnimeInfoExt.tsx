//import { AnimeTituloInfo } from './Titulos/AnimeTituloInfo';
import { Anime } from '../../models/Anime'
import { } from '@heroicons/react/24/outline'
import { getSeasonName } from '../../utils/seasonConverts';

export const AnimeInfoExt = ({ anime }: { anime: Anime }) => {
    return (
<div className="text-white flex items-center justify-center p-6 min-h-screen">
  <div className="bg-neutral-900 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl max-h-screen">

    {/* Imagen */}
    <div className="relative h-full ">
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="pl-10 pt-4"
      />
    </div>

    {/* Contenido */}
    <div className="p-6 flex flex-col h-full max-h-screen overflow-y-auto">
      <div className="flex flex-col space-y-4 flex-grow">

        {/* Título */}
        <h2 className="text-2xl font-bold text-emerald-600">
          {anime.title_english || anime.title_japanese || anime.title}
        </h2>

        {/* Caja de datos */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 text-sm text-gray-300 space-y-2">
          <p><strong className="text-white">Clasificación:</strong> {anime.type || "No informado"}</p>
          <p><strong className="text-white">Episodios:</strong> {anime.episodes || "No informado"}</p>
          <p><strong className="text-white">Año:</strong> {anime.year || "No informado"}</p>
          <p><strong className="text-white">Temporada:</strong> {getSeasonName(anime.season)} ({anime.aired.string || "No informado"})</p>
          <p><strong className="text-white">Puntuación:</strong> {anime.score || "No informado"}</p>
        </div>

        {/* Sinopsis con scroll */}
        <div className="text-sm text-gray-400">
          <p className="text-white font-semibold mb-1">Sinopsis:</p>
          <div className="max-h-40 overflow-y-auto pr-2 custom-scroll">
            <p>{anime.synopsis || "No disponible"}</p>
          </div>
        </div>
      </div>

      {/* Botón */}
      {anime.trailer?.url && (
        <div className="pt-6">
          <a
            href={anime.trailer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 transition-colors px-6 py-2 rounded-full font-semibold"
          >
            Ver Trailer
          </a>
        </div>
      )}
    </div>
  </div>
</div>
    );
}
