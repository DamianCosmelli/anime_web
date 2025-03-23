import { useState } from "react";
import {Modal} from "../common/Modal";
import { AnimeTituloCard } from "./Titulos/AnimeTituloCard";
import { AnimeInfo, AnimeInfoProps } from './AnimeInfo';

export function AnimeInfoModal({ title, episodie, imageUrl, youtubeVideoId, synopsis }: AnimeInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-50 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 relative group">
        <>
          <div
            className="hover:opacity-75 block cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimeTituloCard title={title} episodie={episodie} imageUrl={imageUrl} />
          </div>
          
          {/* Modal para mostrar el video */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
           <AnimeInfo title={title} episodie={episodie} imageUrl={imageUrl} youtubeVideoId={youtubeVideoId} synopsis={synopsis} />
          </Modal>
        </>
    </div>
  );
}
