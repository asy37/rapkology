"use client";
import { Breadcrumb } from "@/components";
import React from "react";
import { Footer } from "@/components/explore/Footer";
import { Trends } from "@/features/home/sections/Trends";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {  IBlogPost } from "@/lib/types/blog-post";

type Props = {
  data: IBlogPost;
  blogRawData: IBlogPost[]
};

export const BlogDetailsView: React.FC<Props> = ({ data , blogRawData}) => {
  const router = useRouter();


  const handleNavigate = (url: string) => {
    router.push(`/blog/${url}`);
  };
  
  return (
    <div className="b w-full mt-20 p-4 md:p-20 space-y-4">
      <Breadcrumb className="text-white" />
      <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
        <div className="col-span-2 space-y-5">
            <div className="space-y-5">
              <span className="flex items-center gap-1 text-base text-white">
                <EyeIcon size={18} />
                <span>12.094</span>
              </span>
              <div className="text-white flex flex-col gap-5">
                <h1 className="md:text-6xl text-4xl font-bold">
                  {data.attributes.title}
                </h1>
                <p className="text-2xl md:text-xl font-bold">
                  {data.attributes.desc}
                </p>
                <div className="relative h-82 w-full">
                  <Image src={data.attributes.img} alt={data.attributes.img} fill />
                </div>
                <p className="text-base md:text-sm">{data.attributes.content}</p>
                <div className="flex items-center gap-2">
                  {data.attributes.tags.map((t) => (
                    <span
                      className="bg-brandtext text-white p-2.5 text-base"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          <div className="space-y-5">
            <h1 className="md:text-6xl text-4xl font-bold text-white">
              DAHA FAZLA İÇERİK
            </h1>
            <div className="h-96 overflow-auto space-y-5">
              {blogRawData.map((more) => (
                <div
                  key={more._id}
                  className="space-y-5"
                  onClick={() => handleNavigate(more.attributes.slug)}
                >
                  <div className="w-full flex flex-col md:flex-row items-center gap-2">
                    <div className="relative w-full md:w-40 h-40 shrink-0">
                    <Image
                      src={more.attributes.img}
                      alt={more.attributes.title}
                      fill
                      className="object-cover"
                    />
                    </div>
                    <p className="text-2xl font-bold text-white">
                      {more.attributes.desc}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-brandtext" />
                </div>
              ))}
            </div>
          </div>
          <Trends data={blogRawData} />
        </div>
        <Footer />
      </div>
    </div>
  );
};
