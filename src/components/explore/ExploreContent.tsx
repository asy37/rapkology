"use client";

import { useBlog } from "@/lib/hooks/useBlog";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

type ExploreProps = {
  blog?: boolean;
  limit?: number;
};
export const ExploreContent: React.FC<ExploreProps> = ({ blog, limit }) => {
  const router = useRouter();

  const { data: blogData } = useBlog(limit);
  return (
    <div
      className={twMerge(
        "gap-8 mb-4",
        blog ? "flex flex-col md:grid md:grid-cols-4" : "flex flex-col"
      )}
    >
      {blogData?.map((i) => {
        return (
          <div
            key={i._id}
            className={twMerge(
              "flex items-start flex-col gap-4 w-full py-8 text-white",
              !blog && "md:flex-row"
            )}
          >
            <div className="h-full w-full flex flex-col justify-between gap-2">
              <div className="relative bg-amber-400 h-48 w-full md:w-72">
                <Image
                  className="object-cover"
                  src={i.attributes.img}
                  alt="person"
                  fill
                />
              </div>
              <span className="text-brandtext text-base">
                {new Date(i.createdAt).toLocaleDateString("tr-TR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="relative h-8 w-8">
                  <Image
                    className="rounded-lg"
                    src={i.attributes.img}
                    alt="person"
                    fill
                  />
                </span>
                <span className="text-sm font-bold md:font-medium md:text-base">
                  {i.attributes.authors}
                </span>
              </div>
              <p className="text-xl md:text-2xl font-bold line-clamp-4">
                {i.attributes.desc.toLocaleUpperCase()}
              </p>
              <div className="w-full h-[1px] bg-brandtext" />
              <button
                onClick={() => router.push(`blog/${i.attributes.slug}`)}
                className="group flex gap-2 items-center text-start cursor-pointer"
              >
                Daha Fazla Oku
                <ArrowRightIcon className="opacity-0 group-hover:opacity-100 duration-300 text-brandyellow" />
              </button>
            </div>
          </div>
        );
      })}
      {blog === false && (
        <div className="w-full flex justify-center">
          <button
            className=" w-fit bg-white px-6 py-3 text-sm font-bold text-black cursor-pointer"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
            }}
            onClick={() => router.push("blog")}
          >
            Tümünü Gör
          </button>
        </div>
      )}
    </div>
  );
};
