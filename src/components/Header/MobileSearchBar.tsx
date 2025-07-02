// src/components/Header/MobileSearchBar.tsx
import { FaArrowLeft, FaSearch } from "react-icons/fa";

interface Props {
  onBack: () => void;
}

const MobileSearchBar: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="flex w-full items-center gap-2">
      {/* Back Arrow */}
      <button
        className="text-xl p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
        onClick={onBack}
        aria-label="Back"
      >
        <FaArrowLeft />
      </button>

      {/* Search input + icon in a pill shape */}
      <div className="flex items-center flex-grow border border-gray-300 dark:border-gray-700 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <input
          type="text"
          autoFocus
          placeholder="Search"
          className="flex-grow px-4 py-2 text-sm bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          className="text-xl p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default MobileSearchBar;
