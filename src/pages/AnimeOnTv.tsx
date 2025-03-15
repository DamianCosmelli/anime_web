// Code to display the current anime on TV
import { useAnimeTv } from '../hooks/useAimeTv';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'

export function AnimeOnTv() {
    const { animeList, loading, error } = useAnimeTv();

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message= {error}/>;

    return (
        <>
            <AnimeGrid animeList={animeList ?? []} titlePage='Anime en Emisión'/>
        </>
     
    );
};