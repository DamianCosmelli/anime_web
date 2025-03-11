// 1. Service: animeService.ts
export const animeTv = async () => {
    
    const ENDPOINT_EMISION_ANIME = new URL('https://kitsu.io/api/edge/anime');
    ENDPOINT_EMISION_ANIME.searchParams.append("filter[status]",'current');
    ENDPOINT_EMISION_ANIME.searchParams.append("filter[subtype]",'tv');
    ENDPOINT_EMISION_ANIME.searchParams.append("page[limit]",'20');
    ENDPOINT_EMISION_ANIME.searchParams.append("page[offset]",'2');
    
    const response = await fetch(ENDPOINT_EMISION_ANIME);
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};