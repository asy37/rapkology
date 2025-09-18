"use client";
import { NavData } from "@/lib/mockData/navData";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const DesktopNavbar = () => {
  const router = useRouter();
  return (
    <div className="absolute top-0 left-0 min-w-full min-h-20 bg-black/10 backdrop-blur-md flex items-center justify-between px-10">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={235}
        height={60}
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
      <div className="flex items-center gap-[30px]">
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
      </div>
      <div className="flex items-center gap-8">
        <SearchIcon className="text-white size-6" />
        <button className="bg-white w-[120px] h-10 text-sm font-bold cursor-pointer">
          Giriş Yap
        </button>
      </div>
    </div>
  );
};
