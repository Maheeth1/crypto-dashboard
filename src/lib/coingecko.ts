import apiClient from './apiClient';
import type { Coin, TrendingApiResponse } from '@/types';

export const fetchMarketData = async (
  page = 1,
  currency = 'usd'
): Promise<Coin[]> => {
  try {
    const response = await apiClient.get('/coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: 50,
        page: page,
        sparkline: false,
        price_change_percentage: '24h',
      },
    });

    // Map the raw API data to our clean `Coin` interface
    const adaptedData: Coin[] = response.data.map((rawCoin: any) => ({
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
      athChangePercentage: rawCoin.ath_change_percentage,
    }));

    return adaptedData;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
};

export const fetchTrendingCoins = async (): Promise<TrendingApiResponse['coins']> => {
  try {
    const response = await apiClient.get<TrendingApiResponse>('/search/trending');
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    throw error;
  }
};