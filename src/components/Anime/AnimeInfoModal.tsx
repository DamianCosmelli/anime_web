import { useState } from "react";
import {Modal} from "../common/Modal";
import { AnimeTituloCard } from "./AnimeTituloCard";

interface CardProps {
  title: string;
  episodie: string;
  imageUrl: string;
  youtubeVideoId?: string;
}

export function AnimeInfoModal({ title, episodie, imageUrl, youtubeVideoId }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-50 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 relative group">
        <>
          <div
            className="hover:opacity-75 block cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <AnimeTituloCard title={title} episodie={episodie} imageUrl={imageUrl} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              Hola soy un modal
              </Modal>

          </div>
          
          {/* Modal para mostrar el video */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="relative w-full h-64 sm:h-96">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Modal>
        </>
    </div>
  );
}
