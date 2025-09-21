import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AllCoinsView } from './components/views/AllCoinsView';
import { HighlightsView } from './components/views/HighlightsView';

function App() {
  const [activeView, setActiveView] = useState<'allCoins' | 'highlights'>('allCoins');
  const [currency, setCurrency] = useState('usd');

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex flex-col">
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        currency={currency}
        setCurrency={setCurrency}
      />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {activeView === 'allCoins' && <AllCoinsView currency={currency} />}
        {activeView === 'highlights' && <HighlightsView currency={currency} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;