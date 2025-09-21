import { useQuery } from '@tanstack/react-query';
import { fetchMarketData, fetchTrendingCoins } from '@/lib/coingecko';

export const useMarketData = (page: number, currency: string) => {
  return useQuery({
    queryKey: ['marketData', page, currency],
    queryFn: () => fetchMarketData(page, currency),   
    staleTime: 60 * 1000, // 1 minute
  });
};

export const useTrendingCoins = () => {
  return useQuery({
    queryKey: ['trendingCoins'],
    queryFn: fetchTrendingCoins,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};