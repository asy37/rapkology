import { FavoriteContent } from "../components/FavoriteContent";
import { FavoriteTitle } from "../components/FavoriteTitle";

export const MounthFavorite = () => {
  return (
    <div className="w-full flex items-center">
      <FavoriteTitle />
      <FavoriteContent />
    </div>
  );
};
