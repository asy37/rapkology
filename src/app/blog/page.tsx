import { BlogView } from "@/features/blog/view/BlogView";
import { endpoint } from "@/lib/api/endpoints/endpoints";
import { apiService } from "@/lib/api/services/apiServices";
import { IBlogPost } from "@/lib/types/blog-post";
import getQueryClient from "@/lib/utils/getQueryClient";
import Hydrate from "@/lib/utils/hydrateProvider";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

const Blog = async () => {
  const client = getQueryClient();
  await client.prefetchQuery({
    queryKey: [`blog`],
    queryFn: () => apiService.get<IBlogPost[]>(endpoint.blog),
  });
  const dehydratedState = dehydrate(client);

  const rawData = await apiService.get<IBlogPost[]>(endpoint.blog);

  if (!rawData) notFound();

  return (
    <Hydrate state={dehydratedState}>
      <BlogView blogData={rawData} />
    </Hydrate>
  );
};

export default Blog;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = params;
  const rawData = apiService.get<IBlogPost[]>(endpoint.blog)
  const  data = (await rawData).find(item => item.attributes.slug === slug);


  if (!data?.attributes.seo) {
    return {
      title: "Rapkology",
      description: "Rapkology Haber",
    };
  }

  const seo = data.attributes.seo;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: seo.canonicalURL,
    },
    
  };
}