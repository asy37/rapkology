import axios from "axios";

function getBaseUrl(): string {
  if (typeof window !== "undefined") return "";

  if (process.env.NEXT_PUBLIC_BASE_URL) return process.env.NEXT_PUBLIC_BASE_URL;

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  const port = process.env.PORT ?? "3000";
  return `http://localhost:${port}`;
}

const base = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
export const Instance = {
  base,
};
