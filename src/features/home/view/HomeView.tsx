"use client";

import { SwiperView } from "../sections/SwiperView";
import { Trends } from "../sections/Trends";
import { MounthFavorite } from "../sections/MounthFavorite";
import { Expolore } from "../sections/Explore";
import { Banner } from "../sections/Banner";
import { useHome } from "../hooks/useHome";
import React from "react";
export const HomeView = () => {
  const { data: blogRaw } = useHome();
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
        <Expolore />
      </div>
    </div>
  );
};
