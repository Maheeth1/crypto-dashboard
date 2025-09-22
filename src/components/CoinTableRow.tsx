import React from "react";
import type { Coin } from "@/types";
import { formatCurrency, formatLargeNumber } from "../lib/utils";
import { Sparklines, SparklinesLine } from "react-sparklines";

interface CoinTableRowProps {
  coin: Coin;
  currency: string;
}

export const CoinTableRow: React.FC<CoinTableRowProps> = ({ coin, currency }) => {
  const isPositive = (coin.priceChangePercentage24h ?? 0) >= 0;
  const displayCurrency = currency ?? "usd";

  return (
    <tr className="cursor-pointer border-b border-muted-50 dark:text-dark-foreground dark:border-dark-muted-50 hover:bg-card dark:hover:bg-dark-card transition-colors">
      <td className="p-4 text-center text-foreground dark:text-dark-foreground">
        {coin.rank}
      </td>
      <td className="p-4 flex items-center gap-3">
        <img src={coin.image} alt={coin.name} className="w-6 h-6" />
        <div>
          <p className="font-semibold">{coin.name}</p>
          <p className="text-xs text-muted dark:text-dark-muted">{coin.symbol}</p>
        </div>
      </td>
      <td className="p-4 text-right font-mono">
        {formatCurrency(coin.price, displayCurrency)}
      </td>
      <td
        className={`p-4 text-right font-mono ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {coin.priceChangePercentage24h == null
          ? "NA"
          : coin.priceChangePercentage24h.toFixed(2) + "%"}
      </td>
      <td className="p-4 text-right font-mono">
        {coin.high24h != null ? formatCurrency(coin.high24h, displayCurrency) : "NA"}
      </td>
      <td className="p-4 text-right font-mono">
        {coin.low24h != null ? formatCurrency(coin.low24h, displayCurrency) : "NA"}
      </td>
      <td className="p-4 text-right font-mono">
        {formatLargeNumber(coin.marketCap)}
      </td>
      <td className="p-4 text-right font-mono">
        {formatLargeNumber(coin.volume24h)}
      </td>
      <td className="p-4 text-center">
        {coin.sparkline && coin.sparkline.length > 0 ? (
          <Sparklines data={coin.sparkline} width={100} height={24}>
            <SparklinesLine
              color={isPositive ? "#16A34A" : "#DC2626"}
              style={{ fill: "none" }}
            />
          </Sparklines>
        ) : (
          <span className="text-muted dark:text-dark-muted">NA</span>
        )}
      </td>
    </tr>
  );
};