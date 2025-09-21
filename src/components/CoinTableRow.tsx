import React from 'react';
import type { Coin } from '@/types';
import { formatCurrency, formatLargeNumber } from '@/lib/utils';

interface CoinTableRowProps {
  coin: Coin;
  currency: string;
}

export const CoinTableRow: React.FC<CoinTableRowProps> = ({ coin, currency }) => {
  const isPositive = coin.priceChangePercentage24h >= 0;

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
      <td className="p-4 text-center">{coin.rank}</td>
      <td className="p-4 flex items-center gap-3">
        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        <div>
          <p className="font-bold">{coin.name}</p>
          <p className="text-gray-400 text-sm">{coin.symbol}</p>
        </div>
      </td>
      <td className="p-4 text-right">{formatCurrency(coin.price, currency)}</td>
      <td className={`p-4 text-right ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {(coin.priceChangePercentage24h || 0).toFixed(2)}%
      </td>
      <td className="p-4 text-right hidden md:table-cell">{formatLargeNumber(coin.marketCap)}</td>
      <td className="p-4 text-right hidden lg:table-cell">{formatLargeNumber(coin.volume24h)}</td>
    </tr>
  );
};