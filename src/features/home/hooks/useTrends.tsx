import { IBlogPost } from "@/lib/types/blog-post";
import { useState, useEffect } from "react";

export const useTrends = (data: IBlogPost[]) => {
  const [trends, setTrends] = useState<IBlogPost[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filtered = data.filter((post) => post.attributes.trends);
      setTrends(filtered);
    } else {
      setTrends([]);
    }
  }, [data]);

  return trends;
};
