import { ENDPOINTS } from "../api/endpoints";

export const animeTop = async () => {

    const ENDPOINT_TOP_ANIME = new URL(ENDPOINTS.TOP);
            
    const response = await fetch(ENDPOINT_TOP_ANIME);
    
    if (!response.ok) {
        throw new Error('Error fetching anime data');
    }
    const data = await response.json();
    return data.data;
};