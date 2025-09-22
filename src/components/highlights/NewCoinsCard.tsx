import React, { useMemo } from 'react';
import type { Coin } from '@/types';
import { HighlightCard } from './HighlightCard';
import { formatCurrency } from '@/lib/utils';

interface NewCoinsCardProps {
  coins: Coin[] | undefined;
  currency: string;
}

export const NewCoinsCard: React.FC<NewCoinsCardProps> = ({ coins, currency }) => {
  const newCoins = useMemo(() => {
    if (!coins) return [];
    // Sort by rank descending (higher rank number = newer/smaller coin)
    return [...coins].sort((a, b) => b.rank - a.rank).slice(0, 8);
  }, [coins]);

  return (
    <HighlightCard title="✨ New Coins" headers={['Coin', 'Price', 'Market Cap Rank']} moreLink="#">
      {newCoins.map((coin) => (
        <div key={coin.id} className="grid grid-cols-3 items-center text-sm gap-2">
          <div className="flex items-center gap-2 truncate">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
            <span className="font-bold text-foreground dark:text-dark-foreground">{coin.symbol}</span>
          </div>
          <span className="text-right text-foreground dark:text-dark-foreground">{formatCurrency(coin.price, currency)}</span>
          <span className="text-right font-semibold text-foreground dark:text-dark-foreground">#{coin.rank}</span>
        </div>
      ))}
    </HighlightCard>
  );
};