import { useState } from "react";
import {Modal} from "../common/Modal";
import { AnimeTituloCard } from "./Titulos/AnimeTituloCard";
//import { AnimeInfo} from './AnimeInfo';
import { AnimeInfoExt} from './AnimeInfoExt';
import { Anime } from '../../models/Anime'

export function AnimeInfoModalAndCard( { anime }: { anime: Anime }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-50 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 relative group">
        <>
          <div
            className="hover:opacity-60 block cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimeTituloCard anime={anime} />
            
          </div>
          
          {/* Modal para mostrar el video */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
           <AnimeInfoExt anime={anime} />
          </Modal>
        </>
    </div>
  );
}
