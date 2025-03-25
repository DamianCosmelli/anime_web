
 {/* Componitizar  SPAN manejando las posibles respuestas 
                    current (amarillo) | finished (rojo)| upcoming (celeste) | desconocido (gris)
                    en current usar icono de tv y pulso. 
                    
                    <span className='items-center text-left bg-sky-500 px-3 py-1 rounded-full'>
                        {anime.attributes.status}
                    </span>


 */}                   

import { Anime } from '../../models/Anime'

export function AnimeStatus ({ anime }: { anime: Anime }) {

    const status = anime.status;
    let style;
    let message;

    switch (status) {
        case 'Currently Airing':
          style = "bg-yellow-400 animate-pulse";
          message= "Emisión"
          break;
        case 'Not yet aired': //revisar caso
          style = "bg-sky-500";
          message= "Proximamente"
          break;
        case 'Finished Airing':
          style = "bg-red-400";
          message= "Finalizado"
          break;
        default:
          style = "bg-gray-500";
          message= "No informado"
          break;
      }


    return(
        <>
            <span className={`items-center text-white text-center ${style} px-3 py-1 rounded-full`}>
                {message}
            </span>
        </>
    );
}
    
