"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { swiperData } from "../utils";
import { twMerge } from "tailwind-merge";
export const SwiperView = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      className="h-[700px]"
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {swiperData.map((i) => {
        return (
          <SwiperSlide key={i.id} className="relative w-full">
            <Image src={i.src} alt={i.alt} fill className="object-cover" />
            <div className="absolute top-20 text-center lg:top-48 lg:right-48 max-w-[500px]">
              <h1
                className={twMerge(
                  "font-bold text-3xl lg:text-6xl",
                  i.textColor
                )}
              >
                {i.title}
              </h1>
              <p className={twMerge("text-md", i.textColor)}>{i.description}</p>
              <div className="relative inline-block">
                <div
                  className="relative translate-x-2 translate-y-12 bg-black px-6 py-6 text-sm font-bold text-black"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
                  }}
                />

                <button
                  className="relative bg-[#F0E74D] px-6 py-3 text-sm font-bold text-black"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
                  }}
                >
                  Devamını Oku
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 z-10 h-40 min-w-full">
              <Image
                className=" object-cover"
                src={"/swipper/Vector.png"}
                alt="1"
                fill
              />
            </div>
          </SwiperSlide>
        );
      })}
      <div className="swiper-button-prev hidden md:flex custom-swiper-button" />
      <div className="swiper-button-next hidden md:flex custom-swiper-button" />
    </Swiper>
  );
};
