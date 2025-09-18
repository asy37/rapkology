"use client";
import { ChevronRightIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (url: string) => {    
    router.push(url);
  };

  const segments = pathname.split("/").filter(Boolean);

  const data = segments.map((seg, idx) => {
    return {
      id: idx,
      title: seg,
      url: "/" + segments.slice(0, idx + 1).join("/"),
    };
  });

  const breadcrumbData = [{ id: -1, title: "anasayfa", url: "/" }, ...data];

  return (
    <div className="w-full flex items-center gap-4">
      {breadcrumbData.map((i, idx) => (
        <div key={i.id} className="flex items-center gap-2">
          <button
            onClick={() => handleNavigate(i.url)}
            className="text-sm cursor-pointer"
          >
            {i.title.toLocaleUpperCase()}
          </button>
          {idx !== breadcrumbData.length - 1 && <ChevronRightIcon />}
        </div>
      ))}
    </div>
  );
};