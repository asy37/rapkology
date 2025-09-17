export interface BlogPost {
  _id: string;
  user_id: string;
  type: "posts";
  attributes: {
    trends: boolean;
    category: string[];
    tags: string[];
    authors: string[];
    title: string;
    slug: string;
    content: string;
    seo: {
      metaTitle: string;
      canonicalURL: string;
      metaDescription: string;
    };
    desc: string;
    img: string;
  };
  lang: string;
  createdAt: string; // ISO tarih
  updatedAt: string; // ISO tarih
  __v: number;
}
