import React from 'react';
import { useTrendingCoins } from '@/hooks/useCoinData';
import { HighlightCard } from './HighlightCard';

export const TrendingSection = () => {
  const { data: trendingCoins, isLoading, isError } = useTrendingCoins();

  return (
    <HighlightCard title="🔥 Trending">
      {isLoading && <p className="text-gray-400">Loading...</p>}
      {isError && <p className="text-red-400">Could not load trending coins.</p>}
      {trendingCoins?.map((coin: any, index: number) => (
        <div key={coin.item.id} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img src={coin.item.thumb} alt={coin.item.name} className="w-5 h-5 rounded-full" />
            <span>{coin.item.name} ({coin.item.symbol})</span>
          </div>
          <span className="font-semibold">#{coin.item.market_cap_rank}</span>
        </div>
      ))}
    </HighlightCard>
  );
};