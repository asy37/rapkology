import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export const Navbar = () => {
  return (
    <nav className="w-full relative z-50">
      <div className="hidden md:flex">
        <DesktopNavbar />
      </div>

      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};
