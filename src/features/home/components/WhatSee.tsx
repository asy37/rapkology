import { whatSeeData } from "../utils";

export const WhatSee = () => {
  return (
    <div>
      <div className="flex flex-col gap-10  w-full">
        <h1 className="text-white text-3xl md:text-[40px] font-bold w-3xs">
          NE GÖRMEK İSTERSİN?
        </h1>
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4">
          {whatSeeData.map((i) => {
            return (
              <span
                key={i.id}
                className="px-1 py-3 text-center border shrink-0 border-white text-white text-base cursor-pointer hover:bg-[#F0E74D] hover:text-black"
              >
                {i.title}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
