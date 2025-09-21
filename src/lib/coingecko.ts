import apiClient from './apiClient';
import type { Coin } from '@/types'; // Vite is often pre-configured with '@/' as an alias for 'src/'

export const fetchMarketData = async (page = 1, perPage = 50): Promise<Coin[]> => {
  try {
    const response = await apiClient.get('/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: perPage,
        page: page,
        sparkline: false,
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
      priceChangePercentage24h: rawCoin.price_change_percentage_24h,
      marketCap: rawCoin.market_cap,
      volume24h: rawCoin.total_volume,
    }));

    return adaptedData;
  } catch (error) {
    console.error("Error fetching market data:", error);
    // Re-throw the error to be handled by React Query
    throw error;
  }
};

export const fetchTrendingCoins = async (): Promise<any[]> => {
  try {
    const response = await apiClient.get('/search/trending');
    // The trending endpoint has a different structure
    return response.data.coins; 
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    throw error;
  }
};