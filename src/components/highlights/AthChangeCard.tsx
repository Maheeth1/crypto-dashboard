import React, { useMemo } from 'react';
import type { Coin } from '@/types';
import { HighlightCard } from './HighlightCard';

interface AthChangeCardProps {
  coins: Coin[] | undefined;
}

export const AthChangeCard: React.FC<AthChangeCardProps> = ({ coins }) => {
  const sortedByAth = useMemo(() => {
    if (!coins) return [];
    return [...coins].sort((a, b) => a.athChangePercentage - b.athChangePercentage).slice(0, 8);
  }, [coins]);

  return (
    <HighlightCard title="🎢 Price Change since ATH" headers={['Coin', '% From ATH']} moreLink="#">
      {sortedByAth.map((coin) => (
        <div key={coin.id} className="grid grid-cols-2 items-center text-sm gap-2">
          <div className="flex items-center gap-2 truncate">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
            <span className="font-bold text-foreground dark:text-dark-foreground">{coin.symbol}</span>
          </div>
          <span className="text-right text-red-500 dark:text-red-400 font-semibold">
            {coin.athChangePercentage.toFixed(2)}%
          </span>
        </div>
      ))}
    </HighlightCard>
  );
};