import React from 'react';
import { Monitor, Sun } from 'lucide-react'; // Example icons

interface HeaderProps {
  activeView: 'allCoins' | 'highlights';
  setActiveView: (view: 'allCoins' | 'highlights') => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

const currencies = ['usd', 'eur', 'jpy', 'gbp', 'inr'];

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView, currency, setCurrency }) => {
  const buttonClass = (view: string) =>
    `px-4 py-2 rounded-md font-semibold transition-colors ${
      activeView === view ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
    }`;

  return (
    <header className="bg-gray-800 p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Monitor className="text-blue-400 w-8 h-8" />
          <h1 className="text-2xl font-bold text-white">CryptoDash</h1>
        </div>

        <nav className="flex items-center gap-4">
          <button onClick={() => setActiveView('allCoins')} className={buttonClass('allCoins')}>
            All Coins
          </button>
          <button onClick={() => setActiveView('highlights')} className={buttonClass('highlights')}>
            Highlights
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
          <Sun className="text-yellow-400 w-6 h-6" /> {/* Placeholder for theme toggle */}
        </div>
      </div>
    </header>
  );
};