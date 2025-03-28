export interface Anime {
    mal_id: number;
    url:string;
    images: {
        jpg: {
            image_url:string;
            small_image_url:string;
            large_image_url:string;
        };
    };
    trailer: {
        youtube_id:string;
    };
    title: string;
    title_english: string;
    title_japanese: string;
    episodes: number;
    duration:string;
    type:string; 
    source:string;
    demographics:{
        name:string;
    };
    status:string;
    aired: {
        string:string;
    }
    rating:number;
    score:number;
    rank:number;
    synopsis:string;
    season:string;
    year:number;
}