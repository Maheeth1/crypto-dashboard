# CryptoDash: A Production-Like Cryptocurrency Dashboard

**CryptoDash** is a responsive, feature-rich web application that provides live cryptocurrency market data, built as a response to a take-home development assignment. It features a detailed "All Coins" overview with advanced data points and a comprehensive "Highlights" section. The project emphasizes clean code, modern design patterns, and a polished user experience with features like theme switching and client-side routing.

**Live Application Link:** [**Add your Vercel deployment link here**]

---

## Final Application Screenshots

#### All Coins View (with Dark Mode)
![Screenshot of the All Coins View](./public/screenshots/all-coins-view-dark.png)

#### Highlights View (with Light Mode)
![Screenshot of the Highlights View](./public/screenshots/highlights-view-light.png)

---

## 1. Assignment Overview & Goal

This project was built to fulfill the requirements of the development assignment provided. The primary goal was to build a small, production-like crypto dashboard that fetches live market data from the CoinGecko API.

> #### **Original Assignment Goal:**
>
> *Build a small, production-like crypto dashboard that fetches live market data from the CoinGecko API and displays:*
>
> -   *All coins overview*
> -   *A Highlights section*
>
> *The assignment tests your ability to design, implement, and ship a clean, maintainable, and well-documented codebase with appropriate use of design patterns.*

---

## 2. Features Implemented

This project successfully implements all core requirements and includes additional enhancements for a superior user experience.

-   **Two Main Views**: A tabbed interface to switch between the "All Coins" and "Highlights" views using **React Router**.
-   **Enhanced All Coins Table**:
    -   Displays Rank, Name, Price, Market Cap, and Volume.
    -   **Advanced Data**: Includes columns for **1h, 24h, 7d, and 30d** price changes.
    -   **7-Day Sparkline Graph**: A visual representation of the weekly price trend for each coin.
-   **Comprehensive Highlights Section**:
    -   Summary cards on the main page for a quick overview.
    -   A dedicated highlights page with detailed lists for:
        -   🔥 Trending Coins
        -   🚀 Top Gainers (24h)
        -   📉 Top Losers (24h)
        -   🥤 Highest Volume
        -   ✨ Newest Coins (by market cap rank)
        -   🎢 Biggest Drop from All-Time High
    -   **"More" Functionality**: Each highlight card links to a detailed, sorted view for that category.
-   **Light/Dark Mode Theming**: Full application theme switching with a toggle in the header, with user preference saved.
-   **Dynamic Currency Switching**: Instantly change the display currency for all monetary values.
-   **Robust UX States**: Clean loading skeletons, clear error messages with a retry option, and empty state handling.
-   **Responsive Design**: A seamless experience across desktop, tablet, and mobile devices.

---

## 3. Tech Stack & Architecture

-   **Framework**: **React 18** with **Vite** for a fast and modern development experience.
-   **Language**: **TypeScript** for robust type safety.
-   **Routing**: **React Router DOM** for client-side navigation.
-   **Styling**: **Tailwind CSS** with a class-based strategy for theming.
-   **Data Fetching & State Management**: **TanStack Query (React Query)** for declarative server-state management, caching, and refetching.
-   **API Client**: **Axios** for making HTTP requests to the CoinGecko API.
-   **UI/UX**: `lucide-react` for icons, `react-hot-toast` for notifications, and `react-sparklines` for graph rendering.

---

## 4. Design Patterns & Rationale

1.  **Custom Hook Pattern**:
    -   **Use Case**: All data fetching is encapsulated in hooks like `useMarketData`.
    -   **Rationale**: Decouples UI from data-fetching logic, making components cleaner and leveraging React Query's power seamlessly.

2.  **Adapter (Mapper) Pattern**:
    -   **Use Case**: API service functions map raw API responses to a clean, strongly-typed `Coin` interface.
    -   **Rationale**: Insulates the app from API changes. If the API response changes, only the adapter needs to be updated.

3.  **Provider Pattern**:
    -   **Use Case**: `QueryClientProvider` and our custom `ThemeProvider` wrap the entire application.
    -   **Rationale**: Provides global context for the server cache and theme state, making them accessible throughout the component tree without prop drilling.

---

## 5. Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Maheeth1/crypto-dashboard.git
    cd crypto-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    -   Get a free API key from [CoinGecko API](https://www.coingecko.com/en/api).
    -   Create a `.env.local` file in the project root.
    -   Copy the contents of `.env.example` and add your API key:
        ```
        VITE_COINGECKO_API_KEY=your_coingecko_api_key_here
        VITE_COINGECKO_API_URL=[https://api.coingecko.com/api/v3](https://api.coingecko.com/api/v3)
        ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).
