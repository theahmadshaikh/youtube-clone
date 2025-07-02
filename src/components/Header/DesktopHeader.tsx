// src/components/Header/DesktopHeader.tsx
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import HeaderLogo from "./HeaderLogo";
import { useSidebarStore } from "../../stores/useSideBarStore";

const DesktopHeader: React.FC = () => {
    const toggleSidebar = useSidebarStore((s) => s.toggle);
  
    return (
    <div className="w-full flex items-center justify-between px-4 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        <button
          className="text-2xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
          aria-label="Menu"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <HeaderLogo />
      </div>

      {/* Center: Full-width Search */}
      <form className="flex-1 mx-4 max-w-2xl">
        <div className="flex w-full border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden bg-white dark:bg-gray-800 focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow px-4 py-2 text-sm bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition cursor-pointer"
            aria-label="Search"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      {/* Right: Profile Icon */}
      <div
        className="text-2xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
        role="button"
        aria-label="User Profile"
        tabIndex={0}
      >
        <FaUserCircle />
      </div>
    </div>
  );
};

export default DesktopHeader;
