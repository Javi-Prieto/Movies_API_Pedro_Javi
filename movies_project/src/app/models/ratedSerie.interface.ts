// Generated by https://quicktype.io

export interface RatedSerieResponse {
    page: number;
    results: RatedSerie[];
    total_pages: number;
    total_results: number;
}

export interface RatedSerie {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: OriginCountry[];
    original_language: OriginalLanguage;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export enum OriginCountry {
    CA = "CA",
    Jp = "JP",
    Kr = "KR",
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Ko = "ko",
}
