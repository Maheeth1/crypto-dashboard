import { useQuery } from '@tanstack/react-query';
import { fetchMarketData, fetchTrendingCoins } from '@/lib/coingecko';

export const useMarketData = (page: number) => {
  return useQuery({
    queryKey: ['marketData', page],
    queryFn: () => fetchMarketData(page),   
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