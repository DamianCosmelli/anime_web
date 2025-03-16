import { CardProps } from './AnimeCard'

export function AnimeInfo({ title, episodie, imageUrl, youtubeVideoId, synopsis }: CardProps) {

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg text-gray-700 gap-4">Episode: {episodie}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Anime Image */}
                <div className="space-y-4">
                    
                    <img src={imageUrl} alt={title} className="w-full rounded-lg shadow-md" />
                </div>

                {/* Column 2: Synopsis */}
                <div className="text-justify text-gray-800">
                    <h2 className="text-xl font-bold">Synopsis</h2>
                    <textarea className='w-full h-9/10 p-2 text-justify'>{synopsis}</textarea>
                </div>

                {/* Column 3: YouTube Video */}
                <div>
                <h2 className="text-xl font-bold">Trailer</h2>
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video player"
                        className="w-full rounded-lg shadow-md"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
