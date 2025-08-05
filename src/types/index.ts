export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
}

export interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  weight: {
    imperial: string;
    metric: string;
  };
}

export interface Vote {
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
  created_at: string;
  image?: {
    id: string;
    url: string;
  };
}

export interface VoteResponse {
  message: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
  country_code: string;
}

export interface CatStats {
  totalVotes: number;
  upvotes: number;
  downvotes: number;
}
