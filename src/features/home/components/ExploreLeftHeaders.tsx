import {
  CompassIcon,
  LayoutListIcon,
  SearchIcon,
  TextAlignCenterIcon,
} from "lucide-react";
export const ExploreLeftHeaders = () => {
  return (
    <div className="flex items-start w-full justify-between text-white ">
      <div className="flex items-center gap-2 text-white">
        <h1 className="text-6xl font-bold">KEŞFET</h1>
        <CompassIcon size={60} className="text-[#F0E74D]" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <SearchIcon size={24} />
        <TextAlignCenterIcon size={24} />
        <LayoutListIcon size={24} />
      </div>
    </div>
  );
};
