// Code to display the current anime on TV
import { useAnimeSeason } from '../hooks/useAnimeSeason';
import { ErrorMessage } from '../components/common/ErrorMessage';
import { AnimeGrid } from '../components/Anime/AnimeGrid'
import { Seasons } from '../models/Season'; 
import { AnimeSelectSeason } from "../components/Anime/Titulos/AnimeSelectSeason";
import { useState } from 'react';
import { LoadingPuff } from '../components/common/LoadingPuff';

function getSeasonName(season: string) {
  return Seasons[season as keyof typeof Seasons] || '';
}

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
    season:string,
    seasonYear:string,
  }

  function actualYear(): string {
    const fechaActual = new Date();
    return fechaActual.getFullYear().toString();
  }

export function AnimeSeason() {

   
    const [seleccion , setSelection] = useState<dataSelect>({season:"winter" , seasonYear:actualYear()});

    const handleFormSubmit = (data: dataSelect) => {
        setSelection(data);
    }

    const { animeSeasonList, loading, error } = useAnimeSeason(seleccion.season, seleccion.seasonYear);
       
    if (loading) return <LoadingPuff />;
    if (error) return <ErrorMessage message= {error}/>;

    return (
        <>
          <div className='p-4'>
             <AnimeSelectSeason  seasons={Seasons} years={getSeasonYear()} onSubmit={handleFormSubmit}/> 
            <AnimeGrid animeList={animeSeasonList ?? []} titlePage={`Anime de la Temporada ${getSeasonName(seleccion.season)} del ${seleccion.seasonYear}`}/>
          </div>
        </>
    );
};