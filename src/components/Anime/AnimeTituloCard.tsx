
interface AnimeTituloCardProps {
    title: string;
    episodie: string; 
    imageUrl: string;
}

export function AnimeTituloCard({title, episodie, imageUrl}: AnimeTituloCardProps) {

    return (
        <>     
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        <div className="absolute bottom-0 left-0 w-full bg-gray-800 opacity-70 text-white p-2 rounded-tr-lg">
            <h5 className="font-bold text-white truncate flex-grow text-xl sm:text-lg md:text-xl leading-tight">
                {title}
            </h5>
            <hr className="border-gray-300 dark:border-gray-700 my-2" />
            <p className="text-white">Episodio: {episodie}</p>
        </div>
        </>
    );
}