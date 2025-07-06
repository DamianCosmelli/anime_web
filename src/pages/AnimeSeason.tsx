/* eslint-disable react-hooks/exhaustive-deps */
// Code to display the current anime on TV
import { useAnimeSeason } from '../hooks/useAnimeSeason';
import { PaginationComp } from '../components/common/Pagination';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'
import { Seasons } from '../models/Season';
import { AnimeSelectSeason } from "../components/Anime/Titulos/AnimeSelectSeason";
import { useState, useEffect } from 'react';
import { LoadingPuff } from '../components/common/LoadingPuff';
import { getSeasonName } from '../utils/seasonConverts';
import { TitlePage } from '../components/common/TitlePage';

function getSeasonYear() {
  const date = new Date();
  const year = date.getFullYear();
  const seasonYears = [year, year - 1, year - 2, year - 3];
  return seasonYears.reduce((acc, curr) => {
    acc[curr.toString()] = curr.toString();
    return acc;
  }, {} as Record<string, string>);
}

interface dataSelect {
  season: string,
  seasonYear: string,
}

function actualYear(): string {
  const fechaActual = new Date();
  return fechaActual.getFullYear().toString();
}

function SeasonXDate(): string {
  const fechaActual = new Date();
  const mes = fechaActual.getMonth();
  if (mes >= 0 && mes <= 2) return "winter";
  if (mes >= 3 && mes <= 5) return "spring";
  if (mes >= 6 && mes <= 8) return "summer";
  if (mes >= 9 && mes <= 11) return "fall";
  return "";
}

export function AnimeSeason() {
/* Meses de las temporadas: 
hacer que se seleccione una temporada y un año en relacion a la fecha actual
enero (invierno), abril (primavera), julio (verano) y octubre (otoño)
*/

  const [seleccion, setSelection] = useState<dataSelect>({ season: SeasonXDate(), seasonYear: actualYear() });
  const [titulo, setTitulo] = useState<string>("Anime de la Temporada " + getSeasonName(seleccion.season) + " del " + seleccion.seasonYear);

  const handleFormSubmit = (data: dataSelect) => {
    setSelection(data);
    //setTitulo("Verificando...");
  }

  const { animeSeasonList, animePagination, loading, error, currentPage, setCurrentPage, hasNextPage, setHasNextPage } = useAnimeSeason(seleccion.season, seleccion.seasonYear);
  // console.log(animePagination); // Usar en componente de paginación

  useEffect(() => {
    setTitulo("Anime de la Temporada " + getSeasonName(seleccion.season) + " del " + seleccion.seasonYear);
  }, [animeSeasonList]);

  if (loading) return <LoadingPuff />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <div className='p-4'>
        <AnimeSelectSeason seasons={Seasons} years={getSeasonYear()} onSubmit={handleFormSubmit} defaultSeason={seleccion.season} />
        <div className="flex items-center justify-between p-4">
          <TitlePage title={titulo} />
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
        <AnimeGrid animeList={animeSeasonList ?? []} />
      </div>
    </>
  );
};
