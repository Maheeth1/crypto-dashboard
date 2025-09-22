import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  currency: string;
  onCurrencyChange: (currency: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ currency, onCurrencyChange }) => {
    const [activeView, setActiveView] = useState<'allCoins' | 'highlights'>('allCoins');

  return (
    <div className="bg-background text-foreground min-h-screen font-sans flex flex-col">
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        currency={currency}
        setCurrency={onCurrencyChange}
      />
      <main className="container mx-auto px-4 py-8 flex-grow dark:bg-dark-background">
        <Outlet /> {/* This is where our routed pages will render */}
      </main>
      <Footer />
    </div>
  );
};
