// src/components/Sidebar/SideBar.tsx
import { useSidebarStore } from "../stores/useSideBarStore";
import SidebarItem from "./SideBarItem";
import { sidebarSections } from "./sidebarItems";

const SideBar: React.FC = () => {
  const isOpen = useSidebarStore((s) => s.isOpen);

  if (!isOpen) return null;

  return (
    <aside
      className="fixed top-0 left-0 z-40 w-60 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto px-2 py-4 text-gray-800 dark:text-gray-100 transform transition-transform duration-300 ease-in-out pt-20"
    >
      <nav className="flex flex-col gap-3">
        {sidebarSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="flex flex-col gap-1">
              {section.items.map((item, itemIndex) => (
                <SidebarItem
                  key={itemIndex}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                />
              ))}
            </div>

            {sectionIndex < sidebarSections.length - 1 && (
              <hr className="my-3 border-gray-300 dark:border-gray-700" />
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
