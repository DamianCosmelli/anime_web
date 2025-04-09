// 1. Service: animeService.ts
import { ENDPOINTS } from "../api/endpoints";

export const animeTv = async () => {
  
    const ENDPOINT_EMISION_ANIME = new URL(ENDPOINTS.ANIMES);
    ENDPOINT_EMISION_ANIME.searchParams.append("type",'tv');
    ENDPOINT_EMISION_ANIME.searchParams.append("status",'airing');
    ENDPOINT_EMISION_ANIME.searchParams.append("order_by",'popularity');
    
    const response = await fetch(ENDPOINT_EMISION_ANIME);
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};