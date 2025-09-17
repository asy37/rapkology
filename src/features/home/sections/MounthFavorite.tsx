import { FavoriteContent } from "../components/FavoriteContent";
import { FavoriteTitle } from "../components/FavoriteTitle";

export const MounthFavorite = () => {
  return (
    <div className="w-full flex items-center flex-col md:flex-row mt-4">
      <FavoriteTitle />
      <FavoriteContent />
    </div>
  );
};
