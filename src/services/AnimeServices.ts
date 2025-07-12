// 1. Service: animeService.ts
import { ENDPOINTS } from "../api/endpoints";

const fetching = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching data');
    }  
    const data = await response.json();
    return data; //.data;
};   

export const animeTv = async (page?: number) => {
    const ENDPOINT_EMISION_ANIME = new URL(ENDPOINTS.ANIMES);
    ENDPOINT_EMISION_ANIME.searchParams.append("type", 'tv');
    ENDPOINT_EMISION_ANIME.searchParams.append("status", 'airing');
    ENDPOINT_EMISION_ANIME.searchParams.append("order_by", 'popularity');
    ENDPOINT_EMISION_ANIME.searchParams.append("page", page ? page.toString() : '1');
    
    return fetching(ENDPOINT_EMISION_ANIME.toString());
};

export const animeSearch = async (name:string) => {
    
    const ENDPOINT_EMISION_ANIME = new URL(ENDPOINTS.ANIMES);
    ENDPOINT_EMISION_ANIME.searchParams.append("q",name);
    //ENDPOINT_EMISION_ANIME.searchParams.append("sort",'startDate');
    
    return fetching(ENDPOINT_EMISION_ANIME.toString());
};

export const animeSeason = async (season: string, seasonYear: string = new Date().getFullYear().toString(), page?:number) => {

    const ENDPOINT_SEASON_ANIME = new URL(`${ENDPOINTS.SEASONS}/${seasonYear}/${season}`);
        ENDPOINT_SEASON_ANIME.searchParams.append("filter","tv");
        ENDPOINT_SEASON_ANIME.searchParams.append("page",page ? page.toString() : '1');
    
    return fetching(ENDPOINT_SEASON_ANIME.toString());
};

export const animeTop = async () => {

    const ENDPOINT_TOP_ANIME = new URL(ENDPOINTS.TOP);
            
    return fetching(ENDPOINT_TOP_ANIME.toString());
};

export const animeAll = async (page?: number) => {
    const ENDPOINT_TOP_ANIME = new URL(ENDPOINTS.ANIMES);
    ENDPOINT_TOP_ANIME.searchParams.append("page", page ? page.toString() : '1');
    return fetching(ENDPOINT_TOP_ANIME.toString());
};