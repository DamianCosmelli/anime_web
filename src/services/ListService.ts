// 1. Service: animeService.ts
export const animeList = async () => {
    
    const ENDPOINT_EMISION_ANIME = new URL('https://kitsu.io/api/edge/anime');
    
    const response = await fetch(ENDPOINT_EMISION_ANIME);
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};