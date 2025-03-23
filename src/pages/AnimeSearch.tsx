import { ErrorMessage } from '../components/common/ErrorMessage';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useVideoCheck } from '../hooks/useVideoCheck'


//const video = 'HBS3amqv1tA'; //No EXISTE
//const video = 'byJ7pxxhaDY'; //ES VALIDO
const video = 'D4INyfG-cz8'; //No EXISTE -- Video privado

export function AnimeSearch() {
  const { videoCheck, loading, error } = useVideoCheck(video);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>

      {videoCheck ? (
        <h1 className="text-white">Video Encontrado</h1>
      ) : (
        <h1 className="text-red-500">Video NO encontrado</h1>
      )}
    </>
  );
}

