import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        // Light theme colors
        background: '#FFFFFF',
        foreground: '#0F172A', // slate-900
        card: '#F1F5F9',       // slate-100
        'card-foreground': '#0F172A',
        muted: '#94A3B8',      // slate-400
        primary: '#2563EB',   // blue-600
        'primary-foreground': '#FFFFFF',
        // Dark theme colors
        'dark-background': '#000000', // pure black
        'dark-foreground': '#F8FAFC', // slate-50
        'dark-card': '#0F172A',       // slate-900
        'dark-card-foreground': '#F8FAFC',
        'dark-muted': '#475569',      // slate-600
        'dark-primary': '#3B82F6',   // blue-500
        'dark-primary-foreground': '#FFFFFF',
      },
    },
  },
  plugins: [],
}