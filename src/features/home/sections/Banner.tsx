import { ChevronDownIcon, HeartIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative w-full h-[642px]">
      <Image
        className="object-cover"
        src="/banner/herobanner.png"
        alt="banner"
        fill
        priority
      />
      <div className="flex gap-2 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 border rounded-4xl border-gray-700 -rotate-4">
        <button className="text-white rounded-xl bg-[#864CF6] flex gap-2 p-3 items-center cursor-pointer">
          <HeartIcon size={16} />
          <span className="font-bold text-md">Takip Et</span>
        </button>
        <button className="text-white flex rounded-xl gap-2 bg-[#222123] p-3 items-center cursor-pointer">
          <StarIcon size={16} />
          <span className="font-bold text-md">Abone Ol</span>
          <ChevronDownIcon size={16} />
        </button>
      </div>
    </div>
  );
};
