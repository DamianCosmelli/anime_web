import { Seasons } from '../models/Season'; 

export function getSeasonName(season: string) {
  return Seasons[season as keyof typeof Seasons] || '';
}