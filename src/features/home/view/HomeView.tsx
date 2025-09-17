"use client";

import { SwiperView } from "../sections/SwiperView";
import { Trends } from "../sections/Trends";
import { MounthFavorite } from "../sections/MounthFavorite";
import { Expolore } from "../sections/Explore";
import { Banner } from "../sections/Banner";
export const HomeView = () => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <SwiperView />
      </div>
      <Banner />
      <div>
        <Trends />
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
