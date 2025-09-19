import axios from 'axios';

function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL ?? '';
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
