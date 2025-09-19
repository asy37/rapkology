"use client";

import { SwiperView } from "../sections/SwiperView";
import { Trends } from "../sections/Trends";
import { MounthFavorite } from "../sections/MounthFavorite";
import { Banner } from "../sections/Banner";
import React from "react";
import { Explore } from "@/components";
import { IBlogPost } from "@/lib/types/blog-post";

type HomeViewProps = {
  data: IBlogPost[];
};
export const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <SwiperView />
      </div>
      <Banner />
      <div className="md:p-10">
        <Trends data={data} />
      </div>
      <div>
        <MounthFavorite />
      </div>
      <div>
        <Explore blog={false} data={data} />
      </div>
    </div>
  );
};
