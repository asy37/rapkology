import { ExploreLeftHeaders } from "../components/ExploreLeftHeaders";
import { ExploreContent } from "../components/ExploreContent";
import { WhatSee } from "../components/WhatSee";
import { Footer } from "../components/Footer";

export const Expolore = () => {
  return (
    <div className="p-10 grid grid-cols-2 px-10 gap-8">
      <div className="flex flex-col">
        <ExploreLeftHeaders />
        <ExploreContent />
      </div>
      <div className="flex flex-col gap-20">
        <WhatSee />
        <Footer />
      </div>
    </div>
  );
};
