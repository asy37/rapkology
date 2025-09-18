import { TrendingUpIcon } from "lucide-react";
import { TrendsContent } from "../components/TrendsContent";
import { BlogPost } from "@/lib/types/data/blogDataType";

type TrendsProps = {
  data: BlogPost[];
};
export const Trends: React.FC<TrendsProps> = ({ data }) => {
  return (
    <div className="md:p-10 flex flex-col">
      <div className="flex items-center gap-2 justify-center md:justify-start text-white p-10">
        <h1 className="text-4xl md:text-6xl font-bold">TRENDLER</h1>
        <TrendingUpIcon size={42} />
      </div>
      <TrendsContent data={data} />
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
