import AnimeTableTop from "../components/Anime/AnimeTableTop";
import animes from '../mocks/jinka_top.json'
const animestop = animes.data;

export function AnimeTop() {
  return (
    <>
      <AnimeTableTop animeList={animestop} />
    </>

  )
}