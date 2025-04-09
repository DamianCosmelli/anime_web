// 1. Service: animeService.ts
import { ENDPOINTS } from "../api/endpoints";

export const animeSearch = async (name:string) => {
    
    const ENDPOINT_EMISION_ANIME = new URL(ENDPOINTS.ANIMES);
    ENDPOINT_EMISION_ANIME.searchParams.append("filter[text]",name);
    ENDPOINT_EMISION_ANIME.searchParams.append("sort",'startDate');
    
    const response = await fetch(ENDPOINT_EMISION_ANIME);
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};