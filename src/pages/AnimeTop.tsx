import AnimeTableTop from "../components/Anime/AnimeTableTop";
//import animes from '../mocks/jinka_top.json'
//const animestop = animes.data;

import { useAnimeTop } from '../hooks/useAimeTop';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { LoadingPuff  } from '../components/common/LoadingPuff';

export const AnimeTop = () => {

   const { animeListTop, loading, error } = useAnimeTop();
  
      if (loading) return <LoadingPuff />; //<LoadingSpinner />;
      if (error) return <ErrorMessage message= {error}/>;

      if (!animeListTop || animeListTop.length === 0) {
        return <ErrorMessage message="No se encontraron resultados en la consulta." />;
      }

  return (
    <>
      <AnimeTableTop animeList={animeListTop} />
    </>

  )
}