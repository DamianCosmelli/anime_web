import {Anime} from "./Anime";

export interface Pagination {
    last_visible_page: number | undefined;
    has_next_page: boolean | undefined;
    current_page: number | undefined;
    items: {
        count: number;
        total: number;
        per_page: number
    };
}

export interface AnimeResponse {
    pagination: Pagination;
    data: Anime[];
}