import axios from 'axios';

function getBaseUrl(): string {
  if (typeof window !== 'undefined') {
    return '';
  }

  const envBase = process.env.NEXT_PUBLIC_BASE_URL;
  if (envBase && envBase.trim().length > 0) {
    return envBase;
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl && vercelUrl.trim().length > 0) {
    return `https://${vercelUrl}`;
  }

  return 'http://localhost:3000';
}

const base = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const Instance = {
  base,
};
