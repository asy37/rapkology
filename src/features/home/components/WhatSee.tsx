import { whatSeeData } from "../utils";

export const WhatSee = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <h1 className="text-white text-[40px] font-bold">
          NE GÖRMEK İSTERSİN?
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {whatSeeData.map((i) => {
            return (
              <span
                key={i.id}
                className="p-5 border border-white text-white text-base cursor-pointer hover:bg-[#F0E74D] hover:text-black"
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
