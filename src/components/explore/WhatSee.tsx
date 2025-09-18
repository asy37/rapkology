import { whatSeeData } from "@/lib/mockData/whatSeeData";
import React from "react";
import { twMerge } from "tailwind-merge";

type ExploreProps = {
  blog?: boolean;
};
export const WhatSee: React.FC<ExploreProps> = ({ blog }) => {
  return (
    <div>
      <div className="flex flex-col gap-10  w-full">
        {!blog && (
          <h1 className="text-white text-3xl md:text-[40px] font-bold w-3xs">
            NE GÖRMEK İSTERSİN?
          </h1>
        )}
        <div className={twMerge("flex overflow-x-auto gap-4",
          !blog && 'md:grid md:grid-cols-3'
        )}>
          {whatSeeData.map((i) => {
            return (
              <span
                key={i.id}
                className="px-1 py-3 text-center border shrink-0 border-white text-white text-base cursor-pointer hover:bg-brandyellow hover:text-black"
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
