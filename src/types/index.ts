export interface Coin {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  image: string;
  price: number;
  priceChange24h: number;
  priceChangePercentage24h: number;
  marketCap: number;
  volume24h: number;
  athChangePercentage: number;
  high24h: number;
  low24h: number; 
  sparkline: number[];
}

export interface TrendingCoin {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string; // URL for a small image
    small: string; // URL for a small image
    large: string; // URL for a large image
    slug: string;
    price_btc: number;
    score: number;
  };
}

export interface TrendingApiResponse {
  coins: TrendingCoin[];
  // The API also includes 'exchanges', but we can omit it if not used.
}