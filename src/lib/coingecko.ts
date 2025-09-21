import apiClient from './apiClient';
import type { Coin, TrendingApiResponse } from '@/types';

// This function adapts the API response to our internal Coin type
export const fetchMarketData = async (page = 1): Promise<Coin[]> => {
  const response = await apiClient.get('/coins/markets', {
    params: { vs_currency: 'usd', page, per_page: 50 },
  });
  // Map the raw data to our clean `Coin` interface
  return response.data.map((rawCoin: any) => ({
    id: rawCoin.id,
    rank: rawCoin.market_cap_rank,
    symbol: rawCoin.symbol.toUpperCase(),
    name: rawCoin.name,
    image: rawCoin.image,
    price: rawCoin.current_price,
    priceChange24h: rawCoin.price_change_24h,
    priceChangePercentage24h: rawCoin.price_change_percentage_24h,
    marketCap: rawCoin.market_cap,
    volume24h: rawCoin.total_volume,
  }));
};

export const fetchTrendingCoins = async (): Promise<TrendingApiResponse['coins']> => {
  const response = await apiClient.get<TrendingApiResponse>('/search/trending');
  
  // The API returns a { coins: [...] } object, we just return the array
  return response.data.coins;
};