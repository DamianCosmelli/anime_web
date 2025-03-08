// 1. Service: animeService.ts
export const ENDPOINT_EMISION_ANIME = 'https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=2&filter[status]=current&filter[subtype]=tv';

export const animeTv = async () => {
    const response = await fetch(ENDPOINT_EMISION_ANIME);
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};