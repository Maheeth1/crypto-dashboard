import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AllCoinsView } from './components/views/AllCoinsView';
import { HighlightsView } from './components/views/HighlightsView';
import { HighlightDetailView } from './components/views/HighlightDetailView';
import { ThemeProvider } from './context/ThemeContext';
import { useState } from 'react';

function App() {
  const [currency, setCurrency] = useState('usd');

  const handleCurrencyChange = (newCurrency: string) => {
    console.log('Currency changing from', currency, 'to', newCurrency);
    setCurrency(newCurrency);
  };

  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout currency={currency} onCurrencyChange={handleCurrencyChange} />}>
          <Route path="/" element={<Navigate to="/coins" replace />} />
          <Route path="/coins" element={<AllCoinsView currency={currency} />} />
          <Route path="/highlights" element={<HighlightsView currency={currency} />} />
          <Route path="/highlights/:type" element={<HighlightDetailView />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;