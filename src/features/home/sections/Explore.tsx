import { ExploreLeftHeaders } from "../components/ExploreLeftHeaders";
import { ExploreContent } from "../components/ExploreContent";
import { WhatSee } from "../components/WhatSee";
import { Footer } from "../components/Footer";

export const Expolore = () => {
  return (
    <div className="md:p-10 p-4 md:grid md:grid-cols-3 gap-8 w-full">
      <div className="flex flex-col col-span-2">
        <ExploreLeftHeaders />
        <div className="md:hidden block">
          <WhatSee />
        </div>
        <ExploreContent />
      </div>
      <div className="flex flex-col gap-20">
        <div className="md:block hidden">
          <WhatSee />
        </div>
        <Footer />
      </div>
    </div>
  );
};
