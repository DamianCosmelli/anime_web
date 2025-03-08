// Code for the AnimeCard component
interface CardProps {
    title: string;
    episodies: string;
    imageUrl: string;
  youtubeVideoId: string;
  }
  
 export function ShowCard({ title, episodies, imageUrl, youtubeVideoId }: CardProps) {
    return (
      <div className="w-64 h-96 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900">
        <div className="p-4">
            <h5 className="text-xl font-bold text-gray-900 dark:text-white truncate">{title}</h5>
        </div>
        <div className="relative group">
            <a href={'https://www.youtube.com/watch?v=' + youtubeVideoId} 
                target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                <img className="w-full h-48 object-contain" src={imageUrl} alt={title} />
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver video
                </span>
            </a>
        </div>
        <div className="p-2">
          <p className="text-gray-700 dark:text-gray-300">Episodios: {episodies} </p>
        </div>
      </div>
    );
  }


