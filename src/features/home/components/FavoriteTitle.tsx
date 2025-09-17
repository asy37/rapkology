import Image from "next/image";
import { YoutubeIcon } from "../../../../public/favorite/YoutubeIcon";
import { SpotifyIcon } from "../../../../public/favorite/SpotifyIcon";

export const FavoriteTitle = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <Image src="/favorite/vector1.png" alt="1" height={126} width={600} />
        <div className="absolute top-8 left-20 z-10">
          <div className="w-full flex items-center gap-8">
            <YoutubeIcon className="w-36 h-12  hover:text-red-700 duration-200" />
            <SpotifyIcon className="w-36 h-12  hover:text-green-700 duration-200" />
          </div>
        </div>
      </div>
      <div className="w-2xs p-20">
        <h1 className="text-white text-6xl">AYIN FAVORİLERİ</h1>
      </div>
    </div>
  );
};
