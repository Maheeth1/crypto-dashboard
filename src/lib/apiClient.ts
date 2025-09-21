import axios from 'axios';

// Access environment variables using import.meta.env
const baseURL = import.meta.env.VITE_COINGECKO_API_URL;
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

if (!baseURL || !apiKey) {
  throw new Error("VITE_COINGECKO_API_URL or VITE_COINGECKO_API_KEY is not defined in .env.local");
}

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-cg-demo-api-key': apiKey,
  },
});

export default apiClient;