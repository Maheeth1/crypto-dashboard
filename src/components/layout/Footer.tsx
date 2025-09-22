export const Footer = () => {
  return (
    <footer className="bg-card dark:bg-dark-card p-4 border-t border-muted/50 dark:border-dark-muted/50 mt-auto">
      <div className="container mx-auto text-center text-muted dark:text-dark-muted">
        <p>Powered by the CoinGecko API</p>
        <p>&copy; {new Date().getFullYear()} CryptoDash. All rights reserved.</p>
      </div>
    </footer>
  );
};
