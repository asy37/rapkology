import { useState, useEffect } from "react";
import { BlogPost } from "@/lib/types/blog-post";

export const useTrends = (data: BlogPost[]) => {
  const [trends, setTrends] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const filtered = data.filter((post) => post.attributes.trends);
      setTrends(filtered);
    } else {
      setTrends([]);
    }
  }, [data]);

  return trends;
}