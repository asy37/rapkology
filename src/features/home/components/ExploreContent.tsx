import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useHome } from "../hooks/useHome";
export const ExploreContent = () => {
  const { data: blogData } = useHome();
  return (
    <div className="flex flex-col gap-8 mb-4">
      {blogData?.slice(-3).map((i) => {
        return (
          <div
            key={i._id}
            className="flex items-start flex-col md:flex-row gap-4 w-full py-8 text-white"
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
              <span className="text-[#3B3B3B] text-base">
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
              <p className="text-xl md:text-2xl font-bold">
                {i.attributes.desc.toLocaleUpperCase()}
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
