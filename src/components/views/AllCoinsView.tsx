import React, { useState, useMemo } from 'react';
import { useMarketData } from '@/hooks/useCoinData';
import { useDebounce } from '@/hooks/useDebounce';
import { CoinTable } from '../CoinTable';
import { TableSkeleton } from '../ui/SkeletonLoader';
import { ErrorMessage } from '../ui/ErrorMessage';
import { SearchInput } from '../ui/SearchInput';
import { Pagination } from '../ui/Pagination';
import { TrendingSection } from '../highlights/TrendingSection';
import { GainersLosersCard } from '../highlights/GainersLosersCard';

interface AllCoinsViewProps {
  currency: string;
}

export const AllCoinsView: React.FC<AllCoinsViewProps> = ({ currency }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data: coins, isLoading, isError, refetch } = useMarketData(page, currency);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  const filteredCoins = useMemo(() => {
    if (!coins) return [];
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [coins, debouncedSearchTerm]);

  return (
    <>
      {/* Highlights Section for All Coins view */}
      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TrendingSection coins={coins} currency={currency} />
        <GainersLosersCard coins={coins} type="gainers" currency={currency} limit={5} />
        <GainersLosersCard coins={coins} type="losers" currency={currency} limit={5} />
      </section>

      {/* Main Table Section */}
      <section className="bg-card dark:bg-dark-card p-6 rounded-lg">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-dark-foreground">All Coins</h2>
          <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        {isLoading && <TableSkeleton />}
        {isError && <ErrorMessage onRetry={() => refetch()} />}
        {coins && <CoinTable coins={filteredCoins} currency={currency} />}
        
        {coins && coins.length > 0 && (
          <Pagination currentPage={page} onNext={handleNextPage} onPrev={handlePrevPage} isPrevDisabled={page === 1} isNextDisabled={coins && coins.length < 50}/>
        )}
      </section>
    </>
  );
};