// src/components/Sidebar/SideBar.tsx
import {
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdExplore,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import SidebarItem from "./SideBarItem";
import { useSidebarStore } from "../stores/useSideBarStore";

const SideBar: React.FC = () => {
  const isOpen = useSidebarStore((s) => s.isOpen);
  const close = useSidebarStore((s) => s.close);

  if (!isOpen) return null; // hide sidebar if closed

  return (
    <>
      

      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 z-40 w-60 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto px-2 py-4 text-gray-800 dark:text-gray-100 transform transition-transform duration-300 ease-in-out"
      >
        <nav className="flex flex-col gap-1 mt-14">
          <SidebarItem icon={<MdHome />} label="Home" active />
          <SidebarItem icon={<MdOutlineOndemandVideo />} label="Shorts" />
          <SidebarItem icon={<MdSubscriptions />} label="Subscriptions" />

          <hr className="my-3 border-gray-300 dark:border-gray-700" />

          <SidebarItem icon={<MdVideoLibrary />} label="Library" />
          <SidebarItem icon={<MdHistory />} label="History" />
          <SidebarItem icon={<MdExplore />} label="Explore" />
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
