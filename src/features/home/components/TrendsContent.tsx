import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { BlogPost } from "@/lib/types/blog-post";
import { useTrends } from "../hooks/useTrends";
import React from "react";
import { useRouter } from "next/navigation";
type TrendsContentProps = {
  data: BlogPost[];
};
export const TrendsContent: React.FC<TrendsContentProps> = ({ data }) => {
  const trendData = useTrends(data);
  const router = useRouter();

  let gridColsClass = "md:grid-cols-3";
  if (trendData.length === 1) {
    gridColsClass = "md:grid-cols-1";
  } else if (trendData.length === 2) {
    gridColsClass = "md:grid-cols-2";
  }

  return (
    <div className={twMerge("grid auto-rows-auto gap-4", gridColsClass)}>
      {trendData.map((i, index) => {
        return (
          <div
            key={i._id}
            className="flex items-start gap-4 w-full p-8 text-white"
          >
            <span className="text-5xl font-bold text-[#2A2A2A]">
              {index + 1}
            </span>
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
                <span>{i.attributes.authors}</span>
              </div>
              <p className="text-xl/tight md:text-2xl/relaxed font-bold line-clamp-3">
                {i.attributes.desc}
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
    </div>
  );
};
