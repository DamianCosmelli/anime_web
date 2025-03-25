interface AnimeAttributes {
    titles: {
        en: string;
        en_jp:string;
    };
    canonicalTitle: string;
    averageRating:string;
    startDate: string;
    endDate: string;
    ageRating:string;
    ageRatingGuide: string;
    subtyte:string;
    status:string;
    episodeCount: string;
    youtubeVideoId: string;
    synopsis: string;
    posterImage: {
        tiny: string;
        small: string;
        original: string;        
    };
    coverImage: {
        tiny: string;
        small: string;
        original: string;
    };
}

export interface Anime {
    id: string;
    attributes: AnimeAttributes;
}