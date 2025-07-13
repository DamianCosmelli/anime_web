import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline'

interface PaginationProps {
  lastPage: number | undefined;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  hasNextPage: boolean | undefined;
  setHasNextPage: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const PaginationComp : React.FC<PaginationProps> = ({
lastPage,
currentPage,
setCurrentPage,
hasNextPage,
setHasNextPage,
}) => {
    
    return (
        <div className='text-sm text-gray-600 mr-6 flex items-center gap-1'>
            <ChevronLeftIcon
                className={`w-6 h-6 cursor-pointer ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:text-gray-800"}`}
                onClick={() => {
                    if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                        setHasNextPage(true);
                    }
                }}
            />
            <p className="inline m-0">Pag: {currentPage} de {lastPage}</p>
            <ChevronRightIcon 
                className={`w-6 h-6 cursor-pointer ${!hasNextPage ? "text-gray-400 cursor-not-allowed" : "text-gray-600 hover:text-gray-800"}`}
                onClick={() => {
                    if (hasNextPage) {
                        setCurrentPage(currentPage + 1);
                    }
                }} 
            />
        </div>
    );
  }