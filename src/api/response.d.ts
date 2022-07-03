export interface Game {
  id: string;
  name: string;
  box_art_url: string;
  pagination: {
    cursor: string;
  };
}

export interface SearchResponse {
  data: Game[];
  pagination: {
    cursor: string;
  };
}
