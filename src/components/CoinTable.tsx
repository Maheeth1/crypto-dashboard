import React from "react";
import type { Coin } from "@/types";
import { CoinTableRow } from "./CoinTableRow";

interface CoinTableProps {
  coins: Coin[];
  currency: string;
}

export const CoinTable: React.FC<CoinTableProps> = ({ coins, currency }) => {
  if (coins.length === 0)
    return (
      <div className="text-center p-8 text-muted dark:text-dark-muted">
        No coins found.
      </div>
    );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead className="text-muted dark:text-dark-muted uppercase bg-card dark:bg-dark-card">
          <tr>
            <th className="p-4 text-center">#</th>
            <th className="p-4">Name</th>
            <th className="p-4 text-right">Price</th>
            <th className="p-4 text-right">24h %</th>
            <th className="p-4 text-right">24h High</th>
            <th className="p-4 text-right">24h Low</th>
            <th className="p-4 text-right">Market Cap</th>
            <th className="p-4 text-right">Volume 24h</th>
            <th className="p-4 text-center">7d Chart</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <CoinTableRow key={coin.id} coin={coin} currency={currency} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
