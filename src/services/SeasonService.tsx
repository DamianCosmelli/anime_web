export const animeSeason = async (season: string, seasonYear: string = new Date().getFullYear().toString()) => {

    const ENDPOINT_SEASON_ANIME = new URL('https://kitsu.io/api/edge/anime');
        ENDPOINT_SEASON_ANIME.searchParams.append("filter[season]",season);
        ENDPOINT_SEASON_ANIME.searchParams.append("filter[seasonYear]",seasonYear);
    
    const response = await fetch(ENDPOINT_SEASON_ANIME);
    
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};