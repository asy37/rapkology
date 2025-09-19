"use client";
import { NavData } from "@/lib/mockData/navData";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

type FooterProps = {
  blog?: boolean;
};
export const Footer: React.FC<FooterProps> = ({ blog }) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "flex gap-8",
        blog
          ? "flex-col md:flex-row md:justify-between md:items-center"
          : "flex-col"
      )}
    >
      <div className="flex flex-col w-full">
        <h1 className="text-2xl md:text-[40px] font-bold text-white">
          GELİŞMELERDEN İLK SEN HABERDAR OL!
        </h1>
        <div className="w-full flex items-center justify-between">
          <button className="text-sm font-bold text-white">EMAIL</button>
          <button className="text-sm font-bold text-brandyellow flex items-center">
            GÖNDER
            <ArrowRightIcon />
          </button>
        </div>
        <div className="w-full h-[1px] bg-brandtext" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full h-6 flex items-center gap-4">
          <Image
            className="cursor-pointer"
            src="/footer/facebook.svg"
            alt="facebook"
            width={12}
            height={24}
          />
          <Image
            className="cursor-pointer"
            src="/footer/x.svg"
            alt="x"
            width={24}
            height={24}
          />
          <Image
            className="cursor-pointer"
            src="/footer/d.svg"
            alt="discord"
            width={24}
            height={24}
          />
          <Image
            className="cursor-pointer"
            src="/footer/s.svg"
            alt="spotify"
            width={24}
            height={24}
          />
          <Image
            className="cursor-pointer"
            src="/footer/y.svg"
            alt="youtube"
            width={24}
            height={24}
          />
        </div>
        <div
          className={twMerge(
            "grid-cols-3 md:grid-cols-2",
            blog ? "grid md:flex md:justify-between md:items-center" : "grid"
          )}
        >
          {NavData.map((i) => {
            return (
              <button
                onClick={() => router.push(i.url)}
                className="text-white text-base text-start cursor-pointer"
                key={i.id}
              >
                {i.title}
              </button>
            );
          })}
        </div>
        <span className="text-base text-[#5C5C5C]">
          © RAPKOLOGY All Rights Are Reserved 2022.
        </span>
      </div>
    </div>
  );
};
