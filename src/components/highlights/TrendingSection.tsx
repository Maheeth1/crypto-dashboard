import React from 'react';
import { useTrendingCoins } from '@/hooks/useCoinData';
import type { Coin, TrendingCoin } from '@/types';
import { HighlightCard } from './HighlightCard';
import { formatCurrency } from '@/lib/utils';

interface TrendingSectionProps {
  coins: Coin[] | undefined;
  currency: string; 
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ coins, currency}) => {
  const { data: trendingCoins, isLoading, isError } = useTrendingCoins();

  const trendingCoinsData = trendingCoins
    ?.map((trendingCoin: TrendingCoin) => 
      coins?.find((c: Coin) => c.id === trendingCoin.item.id)
    )
    .filter((coin): coin is Coin => coin !== undefined) 
    .slice(0, 8);

  return (
    <HighlightCard
      title="🔥 Trending"
      headers={['Coin', 'Price', 'Rank']}
      moreLink="#"
    >
      {isLoading && <p className="text-muted dark:text-dark-muted">Loading...</p>}
      {isError && <p className="text-red-400 dark:text-red-300">Could not load trending coins.</p>}

      {trendingCoinsData?.map((coin) => (
        <div key={coin.id} className="grid grid-cols-3 items-center text-sm">
          <div className="flex items-center gap-2 truncate col-span-1">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
            <span className="text-foreground dark:text-dark-foreground">{coin.name} ({coin.symbol})</span>
          </div>
          <span className="text-right col-span-1 text-foreground dark:text-dark-foreground">{formatCurrency(coin.price, currency)}</span>
          <span className="font-semibold text-right col-span-1 text-foreground dark:text-dark-foreground">#{coin.rank}</span>
        </div>
      ))}
    </HighlightCard>
  );
};