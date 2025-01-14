export interface NewsResponse {
  itemList: NewsSummary[];
}

export interface NewsSummary {
  title: string;
  content: string;
  url: string;
  category: string;
}

export interface WeatherResponse {
  weather: string;
  img: string;
}

export interface MusicResponse {
  songSummaries: MusicSummary[];
}

export interface MusicSummary {
  songId: number;
  title: string;
  artists: string;
  ranking: number;
  imgUrl: string;
}

export interface MovieResponse {
  itemList: MovieSummary[];
}

export interface MovieSummary {
  movieId: number;
  title: string;
  ranking: number;
  img: string;
}
