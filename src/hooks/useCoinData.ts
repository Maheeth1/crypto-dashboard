import { useQuery } from '@tanstack/react-query';
import { fetchMarketData, fetchTrendingCoins } from '@/lib/coingecko';

export const useCoinData = () => {
  // Query for the main market data (paginated, etc.)
  const marketQuery = useQuery({
    queryKey: ['marketData'], // This would typically include a page number, e.g., ['marketData', page]
    queryFn: () => fetchMarketData(1), // Fetch the first page for now
  });

  // Query for the trending coins data
  const trendingQuery = useQuery({
    queryKey: ['trendingCoins'],
    queryFn: fetchTrendingCoins,
  });

  return { marketQuery, trendingQuery };
};