import React, { useState } from "react";
import { Monitor, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  activeView: "allCoins" | "highlights";
  setActiveView: (view: "allCoins" | "highlights") => void;
  currency: string;
  setCurrency: (currency: string) => void;
}

const currencies = ["usd", "eur", "jpy", "gbp", "inr"];

export const Header: React.FC<HeaderProps> = ({ currency, setCurrency }) => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-md font-semibold transition-colors ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "hover:bg-card dark:hover:bg-dark-card"
    }`;

  return (
    <header className="bg-card dark:text-dark-primary dark:bg-dark-card p-4 border-b border-muted/50 dark:border-dark-muted/50 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Monitor className="text-blue-400 w-7 h-7" />
          <h1 className="text-xl sm:text-2xl font-bold text-foreground dark:text-dark-primary">
            CryptoDash
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/coins" className={navLinkClass}>
            All Coins
          </NavLink>
          <NavLink to="/highlights" className={navLinkClass}>
            Highlights
          </NavLink>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-card dark:bg-dark-card border-muted dark:border-dark-muted rounded-md p-2 text-foreground dark:text-dark-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted/50 dark:hover:bg-dark-muted/50"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted/50 dark:hover:bg-dark-muted/50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 bg-card dark:bg-dark-card rounded-lg p-4 border border-muted dark:border-dark-muted animate-slideDown">
          <NavLink
            to="/coins"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            All Coins
          </NavLink>
          <NavLink
            to="/highlights"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Highlights
          </NavLink>

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-card dark:bg-dark-card border-muted dark:border-dark-muted rounded-md p-2 text-foreground dark:text-dark-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {currencies.map((c) => (
              <option key={c} value={c}>
                {c.toUpperCase()}
              </option>
            ))}
          </select>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted/50 dark:hover:bg-dark-muted/50"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </div>
      )}
    </header>
  );
};
