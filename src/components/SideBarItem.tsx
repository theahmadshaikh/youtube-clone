// src/components/Sidebar/SidebarItem.tsx
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active }) => {
  return (
    <button
      className={`flex items-center gap-4 w-full px-4 py-2 rounded-lg transition 
        hover:bg-gray-100 dark:hover:bg-gray-800 text-left
        ${active ? 'bg-gray-100 dark:bg-gray-800 font-medium' : ''}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default SidebarItem;
