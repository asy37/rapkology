import React from "react";
import { ExploreContent } from "./ExploreContent";
import { ExploreLeftHeaders } from "./ExploreLeftHeaders";
import { Footer } from "./Footer";
import { WhatSee } from "./WhatSee";
import { twMerge } from "tailwind-merge";

type ExploreProps = {
  blog?: boolean;
  limit?: number
};

export const Explore: React.FC<ExploreProps> = ({ blog,limit }) => {
  return (
    <div
      className={twMerge(
        "md:p-10 p-4 gap-8 w-full",
        blog ? "flex flex-col" : "md:grid md:grid-cols-3 "
      )}
    >
      <div className="flex flex-col col-span-2 gap-4">
        <ExploreLeftHeaders />
        <div className={twMerge(blog ? "block" : "md:hidden block")}>
          <WhatSee blog={blog} />
        </div>
        <ExploreContent blog={blog} limit={limit} />
      </div>
      <div className="flex flex-col gap-20">
        <div className={twMerge(blog ? "hidden" : "md:block hidden")}>
          <WhatSee />
        </div>
        <Footer blog={blog} />
      </div>
    </div>
  );
};
