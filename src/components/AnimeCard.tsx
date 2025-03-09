// Code for the AnimeCard component
import { AnimeTituloCard } from "./AnimeTituloCard";

interface CardProps {
  title: string;
  episodie: string;
  imageUrl: string;
  youtubeVideoId: string;
}

export function ShowCard({ title, episodie, imageUrl, youtubeVideoId }: CardProps) {
  return (
    <div className="w-50 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 relative group">
      {youtubeVideoId ? (
        <a
          href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 block"
        >
         <AnimeTituloCard title={title} episodie={episodie} imageUrl={imageUrl} />

          {/* Botón "Ver Video" en el centro al hacer hover */}
          <span className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-amber-600 text-white font-bold rounded-lg px-4 py-2">
              Ver Video
            </span>
          </span>
        </a>
      ) : (
        <div>
          <AnimeTituloCard title={title} episodie={episodie} imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
}


