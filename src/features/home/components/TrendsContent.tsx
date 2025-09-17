import Image from "next/image";
import { trendsData } from "../utils";
import { ArrowRightIcon } from "lucide-react";

export const TrendsContent = () => {
  return (
    <div className="grid grid-rows-4 md:grid-rows-2 md:grid-cols-3">
      {trendsData.map((i) => {
        return (
          <div
            key={i.id}
            className="flex items-start gap-4 w-full p-8 text-white"
          >
            <span className="text-5xl font-bold text-[#2A2A2A]">
              {i.number}
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="h-8 w-8">
                  <Image src={i.img} alt="person" width={100} height={100} />
                </span>
                <span>{i.name}</span>
              </div>
              <p>{i.description}</p>
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
