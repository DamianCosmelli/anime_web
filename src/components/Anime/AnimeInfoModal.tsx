import { useState } from "react";
import {Modal} from "../common/Modal";
import { AnimeInfoExt} from './AnimeInfoExt';
import { Anime } from '../../models/Anime'

export const AnimeInfoModal = ({ anime }: { anime: Anime }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-hidden bg-white dark:bg-gray-950 relative group">
        <>
          <div
            className=" font-medium hover:text-emerald-600 hover:opacity-60 block cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            +Info
          </div>
          
          {/* Modal para mostrar el video */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
           <AnimeInfoExt anime={anime} />
          </Modal>
        </>
    </div>
  );
}
