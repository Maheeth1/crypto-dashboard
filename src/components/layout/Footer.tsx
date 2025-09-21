import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 border-t border-gray-700 mt-auto">
      <div className="container mx-auto text-center text-gray-400">
        <p>Powered by the CoinGecko API</p>
        <p>&copy; {new Date().getFullYear()} CryptoDash. All rights reserved.</p>
      </div>
    </footer>
  );
};