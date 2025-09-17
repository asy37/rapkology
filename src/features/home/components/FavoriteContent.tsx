import Image from "next/image";
import { favoriteData } from "../utils";
import { PlayCircleIcon } from "lucide-react";

export const FavoriteContent = () => {
  return (
    <div className="max-w-8xl h-72 overflow-x-auto grid grid-cols-3 items-start gap-20 relative">
      {favoriteData.map((i) => {
        return (
          <div key={i.id} className="w-68 h-60 bg-[#2A2A2A] relative group">
            <div className="relative w-68 h-60 z-20 overflow-hidden">
              <div className="object-cover absolute top-3 -translate-x-28 group-hover:translate-x-6 group-hover:rotate-[9deg] transition-all duration-600 w-full h-full">
                <Image
                  src={i.img}
                  alt={i.album}
                  width={220}
                  height={200}
                  className="object-cover"
                />
                <button className="absolute top-20 left-20 text-white group-hover:-rotate-[9deg] cursor-pointer">
                  <PlayCircleIcon size={52} />
                </button>
              </div>
            </div>
            <div className="w-30 text-white bg-[#323232] text-center rounded-full absolute right-10 top-16">
              <span className="text-base">{i.top}</span>
              <span className="text-base font-bold">{i.line}</span>
            </div>
            <span className="w-30 text-base  text-white text-center rounded-full absolute right-10 top-28">
              {i.name}
            </span>
            <span className="w-30 text-base font-bold text-white text-center rounded-full absolute right-10 top-32">
              {i.album}
            </span>
            <Image
              src="/favorite/Vectorfavorite.png"
              alt="vector"
              className="absolute -bottom-5"
              width={500}
              height={40}
            />
          </div>
        );
      })}
      <div className="h-1 w-5/6 absolute bottom-0">
        <div className="relative h-1 w-5/6 rounded-full">
          <div className="bg-yellow-500 absolute top-0 w-1/2 h-1 z-20 rounded-full" />
          <div className="bg-gray-500 absolute top-0 w-full h-1 z-10 rounded-full" />
        </div>
      </div>
    </div>
  );
};
