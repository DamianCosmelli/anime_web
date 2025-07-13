// Code to display the current anime on TV
import { useAnimeTv } from '../hooks/useAimeTv';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'
import { LoadingPuff } from '../components/common/LoadingPuff';
import { TitlePage } from '../components/common/TitlePage';
import { PaginationComp } from '../components/common/Pagination';

export function AnimeOnTv() {
    const { animeList, animePagination, currentPage, setCurrentPage, hasNextPage, setHasNextPage, loading, error } = useAnimeTv();

    if (loading) return <LoadingPuff />;
    if (error) return <ErrorMessage error={error} />;

    return (
        <>
            <div className="flex items-center justify-between p-4">
                <TitlePage title='Anime en Emisión' />
                {animePagination && (
                    <PaginationComp
                        currentPage={currentPage}
                        lastPage={animePagination.last_visible_page}
                        setCurrentPage={setCurrentPage}
                        hasNextPage={hasNextPage}
                        setHasNextPage={setHasNextPage}
                    />
                )}
            </div>
            <AnimeGrid animeList={animeList ?? []} />
        </>
    );
}