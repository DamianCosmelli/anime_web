// Code to display the current anime on TV
import { useAnimeTv } from '../hooks/useAimeTv';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'
import { LoadingPuff  } from '../components/common/LoadingPuff';

export function AnimeOnTv() {
    const { animeList, loading, error } = useAnimeTv();

    if (loading) return <LoadingPuff />; //<LoadingSpinner />;
    if (error) return <ErrorMessage message= {error}/>;

    return (
        <>
            <AnimeGrid animeList={animeList ?? []} titlePage='Anime en Emisión'/>
        </>
     
    );
};