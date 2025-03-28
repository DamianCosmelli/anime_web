import { ErrorMessage } from '../common/ErrorMessage';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { useVideoCheck } from '../../hooks/useVideoCheck';
//import ImagenNoEncontrado from '../../assets/Chibi_llorosa.jpg';
import ImagenNoEncontrado from '../../assets/triste_2-sfdo.png';

interface youtubeVideoId {
    idVideo: string;
}

export function AnimeVideo({ idVideo }: youtubeVideoId) {

    const { videoCheck, loading, error } = useVideoCheck(idVideo);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <>
            {videoCheck ? (
                <iframe
                    src={`https://www.youtube.com/embed/${idVideo}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video player"
                    className="h-full w-full rounded-lg shadow-md">
                </iframe>
            ) : (
                <>
                <div>
                    <img src={ImagenNoEncontrado} alt="Video_no_encontrado"/>
                    <h1 className='text-emerald-600 p-4 text-center text-4xl font-japanes'>ごめんなさい</h1>
                    <h2 className='text-emerald-800 p-2 text-center italic' >Disculpa, este video no esta disponible</h2>
                </div>               
                </>
            )}
        </>
    );
}