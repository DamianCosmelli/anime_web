import { AnimeSelectSeason } from "../components/Anime/AnimeSelectSeason";


export function AnimeSearch() {
  return (
    <>
      <div className='mt-16 p-4'>
        <h1 className="text-3xl text-blue-600">Buscar anime</h1>    
        <AnimeSelectSeason   />
      </div>
    </>
  );
}

