import { useQuery } from '@tanstack/react-query';
import { fetchMarketData } from '@/lib/coingecko';

export const useMarketData = (page: number) => {
  return useQuery({
    // The query key is an array that uniquely identifies this query.
    // When `page` changes, React Query will automatically refetch the data.
    queryKey: ['marketData', page],
    
    // The query function is the async function that fetches the data.
    queryFn: () => fetchMarketData(page),
    
    // Optional: Keep data fresh but avoid excessive refetching.
    // Data is considered "stale" after 60 seconds.
    staleTime: 60 * 1000, // 1 minute
  });
};