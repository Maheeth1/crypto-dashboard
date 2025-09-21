import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_COINGECKO_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY,
  },
});

export default apiClient;