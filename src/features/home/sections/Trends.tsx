import { TrendingUpIcon } from "lucide-react";
import { TrendsContent } from "../components/TrendsContent";

export const Trends = () => {
  return (
    <div className="p-10 flex flex-col">
      <div className="flex items-center gap-2 text-white px-10">
        <h1 className="text-6xl font-bold">TRENDLER</h1>
        <TrendingUpIcon size={42} />
      </div>
      <TrendsContent />
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
