"use client";
import { NavData } from "@/lib/mockData/navData";
import { SearchIcon, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

export const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="absolute top-0 left-0 min-w-full min-h-20 bg-black/10 backdrop-blur-md flex items-center justify-between px-10">
        <Image src="/Logo.png" alt="Logo" width={182} height={45} />

        <button className="!w-8 h-3" onClick={() => setOpen(!open)}>
          <Image src="/menubutton.png" alt="Logo" width={30} height={10} />
        </button>
      </div>
      <div className="relative min-w-full min-h-full">
        <div
          className={twMerge(
            "absolute z-10  flex flex-col items-center gap-[30px] bg-black p-10 transition-all duration-300",
            open ? "min-w-full min-h-full" : "min-w-0 min-h-0 opacity-0"
          )}
        >
          <div className="w-full flex justify-between items-center">
            <button className="!w-8 h-3" onClick={() => setOpen(!open)}>
              <XIcon className="text-white" />
            </button>
            <button className="!w-8 h-3">
              <SearchIcon className="text-white size-6" />
            </button>
          </div>
          {NavData.map((nav) => {
            return (
              <button
                key={nav.id}
                className="h-3.5 font-medium text-white cursor-pointer"
              >
                {nav.title}
              </button>
            );
          })}
          <button className="bg-white w-[120px] h-10 text-sm font-bold cursor-pointer">
            Giriş Yap
          </button>
        </div>
      </div>
    </>
  );
};
