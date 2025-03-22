
interface AnimeTituloInfoProps {
    title: string;
    episodie: string;
}

export function AnimeTituloInfo({title, episodie}: AnimeTituloInfoProps)
 {
    return (
        <>
        <div className="p-4 bg-emerald-700 rounded-lg shadow-lg gap-4">
            <h1 className="text-2xl text-white font-bold">{title}</h1>
            <p className="text-lg text-gray-800 italic">Episodio: {episodie}</p>
        </div>            
        </>  
    );
 }