import React, { useState, useMemo } from 'react';
import { useMarketData } from './hooks/useCoinData';
import { useDebounce } from './hooks/useDebounce';
import { CoinTable } from './components/CoinTable';
import { TableSkeleton } from './components/ui/SkeletonLoader';
import { ErrorMessage } from './components/ui/ErrorMessage';
import { SearchInput } from './components/ui/SearchInput';
import { Pagination } from './components/ui/Pagination';
import { TrendingSection } from './components/highlights/TrendingSection';
import { GainersLosersCard } from './components/highlights/GainersLosersCard';

function App() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  const { data: coins, isLoading, isError, refetch } = useMarketData(page);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  // Client-side filtering
  const filteredCoins = useMemo(() => {
    if (!coins) return [];
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [coins, debouncedSearchTerm]);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Crypto Dashboard</h1>
          <p className="text-gray-400">Live market data powered by CoinGecko</p>
        </header>

        {/* Highlights Section */}
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TrendingSection />
          <GainersLosersCard coins={coins} type="gainers" />
          <GainersLosersCard coins={coins} type="losers" />
        </section>

        {/* All Coins Table Section */}
        <section className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Coins</h2>
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {isLoading && <TableSkeleton />}
          {isError && <ErrorMessage onRetry={() => refetch()} />}
          {coins && <CoinTable coins={filteredCoins} />}
          
          {coins && coins.length > 0 && (
             <Pagination
                currentPage={page}
                onNext={handleNextPage}
                onPrev={handlePrevPage}
                isPrevDisabled={page === 1}
                isNextDisabled={coins && coins.length < 50}
             />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;