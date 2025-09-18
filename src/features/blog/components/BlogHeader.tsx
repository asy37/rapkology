"use client";

import { Breadcrumb } from "@/components";
import { useBlog } from "@/lib/hooks/useBlog";
import { BlogPost } from "@/lib/types/data/blogDataType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export const BlogHeader = () => {
  const router = useRouter();
  const [selected, setSelected] = React.useState<BlogPost>();
  const [restOfData, setRestOfData] = React.useState<BlogPost[]>([]);

  const { data: blogData } = useBlog();
  React.useEffect(() => {
    if (blogData && blogData.length > 0) {
      setSelected(blogData[0]);
      setRestOfData(blogData.slice(1));
    }
  }, [blogData]);

  React.useEffect(() => {
    if (blogData && selected) {
      setRestOfData(blogData.filter((item) => item._id !== selected._id));
    }
  }, [selected, blogData]);

  const handleNavigate = (url: string) => {
    router.push(`blog/${url}`);
  };
  return (
    <div className="w-full bg-brandyellow relative mt-20 px-4 pb-32 md:p-16">
      <Image src="/background.png" alt="background" fill className="absolute" />
      <div className="relative z-10 space-y-3 w-full">
        <Breadcrumb />
        <h1 className="text-6xl font-bold">BLOG</h1>
        <div className="md:grid md:grid-cols-2 w-full gap-8">
          <div
            key={selected?._id}
            onClick={() => handleNavigate(selected?.attributes?.slug ?? "")}
            className="cursor-pointer"
          >
            <div className="w-full h-[430px] relative">
              <Image
                src={selected?.attributes?.img ?? "/Logo.png"}
                alt={selected?.attributes?.seo.metaTitle ?? ""}
                fill
              />
            </div>
            <p className="text-xl md:text-2xl font-bold">
              {selected?.attributes?.desc ?? ""}
            </p>
          </div>
          <div className="w-full h-[1px] my-3 md:hidden bg-brandtext" />
          <div className="flex flex-col gap-3 overflow-auto h-[500px]">
            {restOfData.map((i) => (
              <div
                role="button"
                tabIndex={0}
                key={i._id}
                className="w-full grid grid-cols-3 gap-2 cursor-pointer"
                onClick={() => setSelected(i)}
              >
                <div className="w-full h-[104px] relative">
                  <Image
                    src={i.attributes.img}
                    alt={i.attributes.seo.metaTitle}
                    fill
                  />
                </div>
                <p className="text-xl/tight md:text-2xl/relaxed font-bold line-clamp-4 md:line-clamp-3 col-span-2">
                  {i.attributes.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
