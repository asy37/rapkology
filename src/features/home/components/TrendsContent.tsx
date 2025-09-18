import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { BlogPost } from "@/lib/types/data/blogDataType";
import { useTrends } from "../hooks/useTrends";
import React from "react";
type TrendsContentProps = {
  data: BlogPost[];
};
export const TrendsContent: React.FC<TrendsContentProps> = ({ data }) => {
  const trendData = useTrends(data);

  return (
    <div className="grid auto-rows-auto md:grid-cols-3 gap-4">
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
              <p>{i.attributes.desc}</p>
              <div className="w-full h-[1px] bg-[#3B3B3B]" />
              <button className="group flex gap-2 items-center text-start cursor-pointer">
                Daha Fazla Oku
                <ArrowRightIcon className="opacity-0 group-hover:opacity-100 duration-300 text-[#F0E74D]" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
