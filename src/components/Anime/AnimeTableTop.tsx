import { Anime } from '../../models/Anime';
import { TitlePage } from "../common/TitlePage";
import { AnimeInfoModal } from './AnimeInfoModal';

const TABLE_HEAD = ["Rank", "Portada", "Titulo", "Puntuación", ""];


export default function AnimeTableTop({ animeList }: { animeList: Anime[] }) {
  return (
    <>
  <div className="flex justify-center items-center min-h-screen p-4">
    <div className="w-full max-w-5xl">
      <TitlePage title="Top Anime" />
      <div className="w-full overflow-hidden rounded-lg border border-surface">
        <table className="w-full">
          <thead className="border-b border-surface bg-surface-light text-sm font-medium text-foreground dark:bg-surface-dark">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-2.5 py-2 text-start font-medium text-white bg-emerald-500">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="group text-sm text-black dark:text-white">
            {animeList && animeList.map((anime: Anime) => (
              <tr key={anime.mal_id} className="border-b border-surface border-0">
                <td className="p-1 text-center justify-center font-black font-japanes text-3xl">{anime.rank}</td>
                <td className="p-2">
                  <img src={anime.images.jpg.small_image_url} alt={anime.title} />
                </td>
                <td className="p-3">
                  <h1 className="text-blue-500 font-bold">{anime.title}</h1>
                  <p>{anime.type} ({anime.episodes} eps)</p>
                  <p>{anime.aired.string}</p>
                  <p>{anime.duration}</p>
                </td>
                <td className="p-3">{anime.score}</td>
                <td className="p-3">
                  <AnimeInfoModal anime={anime}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</>

  );
}
