import { BlogDetailsView } from "@/features/blog-details/view/BlogDetailsView";

type Props = {
  params: { slug: string };
};

export default function BlogDetailsPage({ params }: Props) {
  console.log(params.slug, 'page');
  const slug = params.slug
  
  return <BlogDetailsView slug={slug} />;
}
