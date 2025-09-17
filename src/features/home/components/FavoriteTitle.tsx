import Image from "next/image";
import { YoutubeIcon } from "../../../../public/favorite/YoutubeIcon";
import { SpotifyIcon } from "../../../../public/favorite/SpotifyIcon";

export const FavoriteTitle = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <Image src="/favorite/vector1.png" alt="1" height={126} width={600} />
        <div className="absolute top-7 left-10 md:left-20 z-10">
          <div className="w-full flex items-center gap-8">
            <YoutubeIcon className="w-36 h-12  hover:text-red-700 duration-200" />
            <SpotifyIcon className="w-36 h-12  hover:text-green-700 duration-200" />
          </div>
        </div>
      </div>
      <div className="w-2xs md:p-20 md:text-start text-center mx-auto md:mx-0">
        <h1 className="text-white text-4xl md:text-6xl">AYIN FAVORİLERİ</h1>
      </div>
    </div>
  );
};
