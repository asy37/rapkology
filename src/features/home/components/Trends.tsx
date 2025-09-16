import { ArrowRightIcon, TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import { trendsData } from "../utils";

export const Trends = () => {
  return (
    <div className="p-10 flex flex-col">
      <div className="flex items-center gap-2 text-white">
        <h1 className="text-4xl font-bold">TRENDLER</h1>
        <TrendingUpIcon size={42} />
      </div>
      <div className="grid grid-cols-3">
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
      <div className="w-full flex justify-center">
        <button
          className=" w-fit bg-white px-6 py-3 text-sm font-bold text-black cursor-pointer"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
          }}
        >
          Devamını Oku
        </button>
      </div>
    </div>
  );
};
