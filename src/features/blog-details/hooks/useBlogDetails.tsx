import { BlogPost } from "@/lib/types/data/blogDataType";

export const useBlogDetails = (data: BlogPost[], slug: string) => {

  const filtered = data.filter((post) => post.attributes.slug === slug);



  return filtered;
};
