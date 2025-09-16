import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  return (
    <nav className="w-full">
      {/* Sadece md ve üstü ekranlarda göster */}
      <div className="hidden md:flex">
        <DesktopNavbar />
      </div>

      {/* Sadece küçük ekranlarda göster */}
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};