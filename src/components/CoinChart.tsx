import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useCoinChartData } from '@/hooks/useCoinData';

interface CoinChartProps {
  coinId: string;
  days: number;
  currency: string;
}

export const CoinChart = ({ coinId, days, currency }: CoinChartProps) => {
  const { data: chartData, isLoading } = useCoinChartData(coinId, days, currency);

  if (isLoading) return <div>Loading Chart...</div>;
  if (!chartData) return <div>No chart data available.</div>;

  // Format the data for Recharts (timestamp to readable date)
  const formattedData = chartData.map((priceEntry: [number, number]) => ({
    date: new Date(priceEntry[0]).toLocaleDateString(),
    price: priceEntry[1],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={formattedData}>
        <XAxis dataKey="date" hide />
        <YAxis domain={['dataMin', 'dataMax']} hide />
        <Tooltip
          formatter={(value: number) => [
            value.toLocaleString(undefined, { style: 'currency', currency }),
            'Price'
          ]}
        />
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};