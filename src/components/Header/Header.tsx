import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      <div className="sm:hidden">
        <MobileHeader />
      </div>
      <div className="hidden sm:flex">
        <DesktopHeader />
      </div>
    </header>
  );
};

export default Header;
