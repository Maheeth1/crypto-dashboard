import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMarketData } from '@/hooks/useCoinData';
import { CoinTable } from '../CoinTable';
import { TableSkeleton } from '../ui/SkeletonLoader';
import { ErrorMessage } from '../ui/ErrorMessage';

const highlightTitles: Record<string, string> = {
  gainers: 'Top Gainers (24h)',
  losers: 'Top Losers (24h)',
  volume: 'Highest Volume',
  // Add other types as needed
};

export const HighlightDetailView = () => {
  const { type = 'gainers' } = useParams<{ type: string }>();
  const [currency] = useState('usd'); // Simplified for this view
  const { data: coins, isLoading, isError, refetch } = useMarketData(1, currency); // Fetch all data

  const title = highlightTitles[type] || 'Highlights';

  const sortedCoins = useMemo(() => {
    if (!coins) return [];
    switch (type) {
      case 'gainers':
        return [...coins].sort((a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h);
      case 'losers':
        return [...coins].sort((a, b) => a.priceChangePercentage24h - b.priceChangePercentage24h);
      case 'volume':
        return [...coins].sort((a, b) => b.volume24h - a.volume24h);
      default:
        return coins;
    }
  }, [coins, type]);

  return (
    <section className="bg-card dark:bg-dark-card p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-dark-foreground">{title}</h2>
      {isLoading && <TableSkeleton />}
      {isError && <ErrorMessage onRetry={() => refetch()} />}
      {coins && <CoinTable coins={sortedCoins} currency={currency} />}
    </section>
  );
};