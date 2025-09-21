import React, { useMemo } from 'react';
import type { Coin } from '@/types';
import { HighlightCard } from './HighlightCard';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface GainersLosersCardProps {
  coins: Coin[] | undefined;
  type: 'gainers' | 'losers';
}

export const GainersLosersCard: React.FC<GainersLosersCardProps> = ({ coins, type }) => {
  const title = type === 'gainers' ? '🚀 Top Gainers' : '📉 Top Losers';
  const icon = type === 'gainers' ? 
    <ArrowUpRight className="w-4 h-4 text-green-500" /> : 
    <ArrowDownRight className="w-4 h-4 text-red-500" />;

  const sortedCoins = useMemo(() => {
    if (!coins) return [];
    // Create a new array to avoid mutating the original
    const sorted = [...coins].sort((a, b) => {
      return type === 'gainers'
        ? b.priceChangePercentage24h - a.priceChangePercentage24h
        : a.priceChangePercentage24h - b.priceChangePercentage24h;
    });
    return sorted.slice(0, 5); // Get top 5
  }, [coins, type]);

  return (
    <HighlightCard title={title}>
      {sortedCoins.map((coin) => (
        <div key={coin.id} className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
            <span>{coin.symbol}</span>
          </div>
          <div className="flex items-center gap-1">
            {icon}
            <span className={type === 'gainers' ? 'text-green-500' : 'text-red-500'}>
              {coin.priceChangePercentage24h.toFixed(2)}%
            </span>
          </div>
        </div>
      ))}
    </HighlightCard>
  );
};