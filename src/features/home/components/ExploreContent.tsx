import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { trendsData } from "../utils";
export const ExploreContent = () => {
  return (
    <div className="flex flex-col gap-8 mb-4">
      {trendsData.map((i) => {
        return (
          <div
            key={i.id}
            className="flex items-start flex-col md:flex-row gap-4 w-full p-8 text-white"
          >
            <div className="h-full flex flex-col justify-between gap-2">
              <Image src={i.img} alt="person" width={300} height={196} />
              <span className="text-[#3B3B3B] text-base">
                {i.date ?? "02-02-2222"}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="h-8 w-8">
                  <Image src={i.img} alt="person" width={100} height={100} />
                </span>
                <span className="text-sm font-bold md:font-medium md:text-base">
                  {i.name}
                </span>
              </div>
              <p className="text-xl md:text-2xl font-bold">
                {i.description.toLocaleUpperCase()}
              </p>
              <div className="w-full h-[1px] bg-[#3B3B3B]" />
              <button className="group flex gap-2 items-center text-start cursor-pointer">
                Daha Fazla Oku
                <ArrowRightIcon className="opacity-0 group-hover:opacity-100 duration-300 text-[#F0E74D]" />
              </button>
            </div>
          </div>
        );
      })}
      <div className="w-full flex justify-center">
        <button
          className=" w-fit bg-white px-6 py-3 text-sm font-bold text-black cursor-pointer"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
          }}
        >
          Tümünü Gör
        </button>
      </div>
    </div>
  );
};
