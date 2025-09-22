import { useQuery } from '@tanstack/react-query';
import { fetchMarketData, fetchTrendingCoins, fetchCoinChartData } from '@/lib/coingecko';

export const useMarketData = (page: number, currency: string) => {
  return useQuery({
    queryKey: ['marketData', page, currency],
    queryFn: () => fetchMarketData(page, currency),
    staleTime: 30 * 1000, // 30 seconds - reduced for better currency responsiveness
    refetchInterval: 60000,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
};

export const useTrendingCoins = () => {
  return useQuery({
    queryKey: ['trendingCoins'],
    queryFn: fetchTrendingCoins,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: false,
  });
};

export const useCoinChartData = (coinId: string, days: number, currency: string) => {
  return useQuery({
    queryKey: ['coinChartData', coinId, days, currency],
    queryFn: () => fetchCoinChartData(coinId, days, currency),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};