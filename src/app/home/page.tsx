import { HomeView } from "@/features/home/view/HomeView";
import { endpoint } from "@/lib/api/endpoints/endpoints";
import { apiService } from "@/lib/api/services/apiServices";
import { IBlogPost } from "@/lib/types/blog-post";
import getQueryClient from "@/lib/utils/getQueryClient";
import Hydrate from "@/lib/utils/hydrateProvider";
import { dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: { slug: string };
};

const Home = async () => {
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
      <HomeView data={rawData} />
    </Hydrate>
  );
};

export default Home;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const rawData = await apiService.get<IBlogPost[]>(endpoint.blog);
  const data = rawData.find((item) => item.attributes.slug === slug);

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
