import type React from "react";
import ButtonList from "./ButtonList";

const MainContainer : React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-4">
        <ButtonList/>
      </div>
    </div>
  );
}

export default MainContainer;