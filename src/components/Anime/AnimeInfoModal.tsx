import { useState } from "react";
import {Modal} from "../common/Modal";
import { AnimeTituloCard } from "./Titulos/AnimeTituloCard";
import { AnimeInfo} from './AnimeInfo';
import { Anime } from '../../models/Anime'

export function AnimeInfoModal( { anime }: { anime: Anime }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-50 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 relative group">
        <>
          <div
            className="hover:opacity-60 block cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimeTituloCard anime={anime} />

            {/* informacion que aparece en el centro al hacer hover 
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-2xl font-bold">{episodie}</span>
            </div>*/}
          </div>
          
          {/* Modal para mostrar el video */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
           <AnimeInfo anime={anime} />
          </Modal>
        </>
    </div>
  );
}
