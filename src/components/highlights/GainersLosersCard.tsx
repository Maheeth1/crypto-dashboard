import React, { useMemo } from 'react';
import type { Coin } from '@/types';
import { HighlightCard } from './HighlightCard';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface GainersLosersCardProps {
  coins: Coin[] | undefined;
  type: 'gainers' | 'losers';
  currency: string;
  limit?: number; 
}

export const GainersLosersCard: React.FC<GainersLosersCardProps> = ({ coins, type, currency, limit = 8 }) => {
  const title = type === 'gainers' ? '🚀 Top Gainers' : '📉 Top Losers';
  const icon = type === 'gainers' ? <ArrowUpRight className="w-4 h-4 text-green-500 dark:text-green-400" /> : <ArrowDownRight className="w-4 h-4 text-red-500 dark:text-red-400" />;

  const sortedCoins = useMemo(() => {
    if (!coins) return [];
    const sorted = [...coins].sort((a, b) =>
      type === 'gainers'
        ? b.priceChangePercentage24h - a.priceChangePercentage24h
        : a.priceChangePercentage24h - b.priceChangePercentage24h
    );
    return sorted.slice(0, limit);
  }, [coins, type, limit]);

  return (
    <HighlightCard
      title={title}
      headers={['Coin', 'Price', '24h %']}
      moreLink="#"
    >
      {sortedCoins.map((coin) => (
        <div key={coin.id} className="grid grid-cols-3 items-center text-sm gap-2">
          <div className="flex items-center gap-2 col-span-1 truncate">
            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
            <span className="font-bold text-foreground dark:text-dark-foreground">{coin.symbol}</span>
          </div>
          <span className="text-right col-span-1 text-foreground dark:text-dark-foreground">{formatCurrency(coin.price, currency)}</span>
          <div className="flex items-center justify-end gap-1 col-span-1">
            {icon}
            <span className={type === 'gainers' ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}>
              {(coin.priceChangePercentage24h || 0).toFixed(2)}%
            </span>
          </div>
        </div>
      ))}
    </HighlightCard>
  );
};
