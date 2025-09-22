import React from 'react';
import { useMarketData } from '@/hooks/useCoinData';
import { TableSkeleton } from '../ui/SkeletonLoader';
import { ErrorMessage } from '../ui/ErrorMessage';
import { TrendingSection } from '../highlights/TrendingSection';
import { GainersLosersCard } from '../highlights/GainersLosersCard';
import { NewCoinsCard } from '../highlights/NewCoinsCard';
import { AthChangeCard } from '../highlights/AthChangeCard';
import { useMemo } from 'react';
import type { Coin } from '@/types';
import { HighlightCard } from '../highlights/HighlightCard';
import { formatCurrency } from '@/lib/utils';

interface HighlightsViewProps {
  currency: string;
}

// A new card specifically for Highest Volume
const HighestVolumeCard = ({ coins, currency }: { coins: Coin[] | undefined, currency: string }) => {
  const sortedByVolume = useMemo(() => {
    if (!coins) return [];
    return [...coins].sort((a, b) => b.volume24h - a.volume24h).slice(0, 8);
  }, [coins]);

  return (
    <HighlightCard title="🥤 Highest Volume" headers={['Coin', 'Volume']} moreLink="#">
      {sortedByVolume.map(coin => (
         <div key={coin.id} className="grid grid-cols-3 items-center text-sm gap-2">
            <div className="flex items-center gap-2 col-span-1 truncate">
              <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
              <span className="font-bold text-foreground dark:text-dark-foreground">{coin.symbol}</span>
            </div>
            <span className="text-right col-span-2 text-foreground dark:text-dark-foreground">{formatCurrency(coin.volume24h, currency)}</span>
        </div>
      ))}
    </HighlightCard>
  )
}

export const HighlightsView: React.FC<HighlightsViewProps> = ({ currency }) => {
  // We fetch page 1 with 100 results, which is enough for good highlights
  const { data: coins, isLoading, isError, refetch } = useMarketData(1, currency);

  if (isLoading) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><TableSkeleton rows={8} /><TableSkeleton rows={8} /><TableSkeleton rows={8} /></div>;
  if (isError) return <ErrorMessage onRetry={() => refetch()} message="Could not load market data for highlights." />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TrendingSection coins={coins} currency={currency} />
      <GainersLosersCard coins={coins} type="gainers" currency={currency} />
      <GainersLosersCard coins={coins} type="losers" currency={currency} />
      <HighestVolumeCard coins={coins} currency={currency} />
      <NewCoinsCard coins={coins} currency={currency} />
      <AthChangeCard coins={coins} />
    </div>
  );
};