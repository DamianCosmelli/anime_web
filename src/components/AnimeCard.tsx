// Code for the AnimeCard component
import YouTubeLogo from '../assets/youtube-logo.png';

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
        <img className="w-full h-48 object-contain" src={imageUrl} alt={title} />
        <div className="p-2">
          <p className="text-gray-700 dark:text-gray-300">Episodios: {episodies} </p>
        </div>
        <div className="p-1 text-center">
            <a href={'https://www.youtube.com/watch?v=' + youtubeVideoId} 
                target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-red-600 py-2 px-4 rounded mt-2">
                <img src={YouTubeLogo} alt="YouTube" className="inline w-4 h-4 mr-2" />
                Ver en YouTube
            </a>
        </div>
      </div>
    );
  }


