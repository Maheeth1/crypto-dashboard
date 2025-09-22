import apiClient from './apiClient';
import type { Coin, TrendingApiResponse } from '@/types';

export const fetchMarketData = async (page = 1, currency = 'usd'): Promise<Coin[]> => {
  try {
    const response = await apiClient.get('coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: 50,
        page: page,
        sparkline: true,
        price_change_percentage: '24h', 
      },
    });
    const adaptedData: Coin[] = response.data.map((rawCoin: any) => ({
      id: rawCoin.id,
      rank: rawCoin.market_cap_rank,
      symbol: rawCoin.symbol.toUpperCase(),
      name: rawCoin.name,
      image: rawCoin.image,
      price: rawCoin.current_price,
      priceChange24h: rawCoin.price_change_24h,
      priceChangePercentage24h: rawCoin.price_change_percentage_24h,
      high24h: rawCoin.high_24h,
      low24h: rawCoin.low_24h, 
      marketCap: rawCoin.market_cap,
      volume24h: rawCoin.total_volume,
      sparkline: rawCoin.sparkline_in_7d?.price ?? [],
      athChangePercentage: rawCoin.ath_change_percentage,
    }));
    return adaptedData;
  } catch (error) {
    console.error('Error fetching market data', error);
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

export const fetchCoinChartData = async (
  coinId: string,
  days: number = 7,
  currency: string = 'usd'
) => {
  try {
    const response = await apiClient.get(`/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: currency,
        days: days,
      },
    });
    // The API returns an object with a 'prices' array
    return response.data.prices;
  } catch (error) {
    console.error("Error fetching coin chart data:", error);
    throw error;
  }
};