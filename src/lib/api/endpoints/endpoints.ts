import { Endpoints } from "@/lib/types/endpoints/endpoints";

export const endpoint: Endpoints = {
  blog: "/api/blog",
  blogpost: (id: string) => `/api/blog-post/${id}`,
};
