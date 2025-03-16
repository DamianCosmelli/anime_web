
interface AnimeTituloInfoProps {
    title: string;
    episodie: string;
}

export function AnimeTituloInfo({title, episodie}: AnimeTituloInfoProps)
 {
    return (
        <>
        <div className="p-4 bg-amber-600 rounded-lg shadow-lg gap-4">
            <h1 className="text-2xl">{title}</h1>
            <p className="text-lg text-gray-700">Episode: {episodie}</p>
        </div>            
        </>
       
    );
 }