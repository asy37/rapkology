import { endpoint } from "@/lib/api/endpoints/endpoints";
import { apiService } from "@/lib/api/services/apiServices";
import { BlogPost } from "@/lib/types/data/blogDataType";
import { useQuery } from "@tanstack/react-query";

export const useBlog = () => {
  return useQuery<BlogPost[]>({
    queryKey: ["blog"],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await apiService.get<BlogPost[]>(endpoint.blog);
      return response;
    },
  });
};
