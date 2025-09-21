import React from 'react';
import type { Coin } from '@/types';
import { CoinTableRow } from './CoinTableRow';

interface CoinTableProps {
  coins: Coin[];
}

export const CoinTable: React.FC<CoinTableProps> = ({ coins }) => {
  if (coins.length === 0) {
    return <div className="text-center p-8 text-gray-400">No coins found.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="text-gray-400 uppercase bg-gray-900">
          <tr>
            <th className="p-4 text-center">#</th>
            <th className="p-4">Name</th>
            <th className="p-4 text-right">Price</th>
            <th className="p-4 text-right">24h %</th>
            <th className="p-4 text-right hidden md:table-cell">Market Cap</th>
            <th className="p-4 text-right hidden lg:table-cell">Volume (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinTableRow key={coin.id} coin={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
};