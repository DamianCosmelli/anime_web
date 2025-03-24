import { Anime } from '../../../models/Anime'

export function AnimeTituloInfo({ anime }: { anime: Anime })
 {
    return (
        <>
        <div className="p-4 bg-emerald-700 rounded-lg shadow-lg gap-4">
            <h1 className="text-2xl text-white font-bold">
                {anime.attributes.titles.en_jp || anime.attributes.titles.en}
            </h1>
            <p className="text-lg text-gray-800 italic">Episodio:
                 {anime.attributes.episodeCount || 'No Informado'}
            </p>
        </div>            
        </>  
    );
 }