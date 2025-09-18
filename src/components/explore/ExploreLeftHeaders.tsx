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
        <h1 className="text-4xl md:text-6xl font-bold">KEŞFET</h1>
        <CompassIcon  className="text-brandyellow md:size-14 size-10" />
      </div>
      <div className="flex items-center gap-4 mt-4">
        <SearchIcon size={24} />
        <TextAlignCenterIcon size={24} />
        <LayoutListIcon size={24} />
      </div>
    </div>
  );
};
