import { useSidebarStore } from "../stores/useSideBarStore";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer: React.FC = () => {
  const isSidebarOpen = useSidebarStore((s) => s.isOpen);

  return (
    <main className={` dark:bg-gray-900 transition-all duration-300 p-4 ${isSidebarOpen ? "ml-60" : "ml-0"}`}>
      <ButtonList />
      <VideoContainer/>
    </main>
  );
};
export default MainContainer;