import { endpoint } from "@/lib/api/endpoints/endpoints";
import { apiService } from "@/lib/api/services/apiServices";
import { BlogPost } from "@/lib/types/data/blogDataType";
import { useQuery } from "@tanstack/react-query";

export const useBlog = (limit?: number) => {
  return useQuery<BlogPost[]>({
    queryKey: ["blog", limit],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await apiService.get<BlogPost[]>(endpoint.blog);
      return response;
    },
    select: (data) => {
      if (limit) {
        return data.slice(-limit); // son N veriyi al
      }
      return data;
    },
  });
};