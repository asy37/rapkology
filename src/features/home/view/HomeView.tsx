"use client";

import { SwiperView } from "../sections/SwiperView";
import { Trends } from "../sections/Trends";
import { MounthFavorite } from "../sections/MounthFavorite";
import { Banner } from "../sections/Banner";
import { useBlog } from "../../../lib/hooks/useBlog";
import React from "react";
import { Explore } from "@/components";
export const HomeView = () => {
  const { data: blogRaw } = useBlog();
  const blogData = React.useMemo(() => {
    return blogRaw ?? [];
  }, [blogRaw]);
  return (
    <div className="flex flex-col h-full">
      <div>
        <SwiperView />
      </div>
      <Banner />
      <div>
        <Trends data={blogData} />
      </div>
      <div>
        <MounthFavorite />
      </div>
      <div>
        <Explore />
      </div>
    </div>
  );
};
