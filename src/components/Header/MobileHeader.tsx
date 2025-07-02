// src/components/Header/MobileHeader.tsx
import { useState } from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import HeaderLogo from "./HeaderLogo";
import MobileSearchBar from "./MobileSearchBar";

const MobileHeader: React.FC = () => {
  const [isMobileSearch, setIsMobileSearch] = useState(false);

  return (
    <div className="flex w-full items-center px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {isMobileSearch ? (
        <MobileSearchBar onBack={() => setIsMobileSearch(false)} />
      ) : (
        <>
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-3">
            <button
              className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
              aria-label="Menu"
            >
              <FaBars />
            </button>
            <HeaderLogo />
          </div>

          {/* Right: Search + User */}
          <div className="flex items-center gap-4 ml-auto">
            <button
              className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
              onClick={() => setIsMobileSearch(true)}
              aria-label="Search"
            >
              <FaSearch />
            </button>
            <button
              className="text-2xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
              aria-label="Profile"
            >
              <FaUserCircle />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileHeader;
