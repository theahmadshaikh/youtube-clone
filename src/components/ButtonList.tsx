import {  useState } from "react";
import Button from "./Button";

const categories = [
  "All",
  "JavaScript",
  "React",
  "Tailwind",
  "Music",
  "Live",
  "News",
  "Gaming",
  "Movies",
  "Trending",
  "Podcasts",
  "AI",
  "Coding",
];

const ButtonList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
 
  return (
    <div className="sticky top-16 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-x-auto whitespace-nowrap px-4 py-2">
      <div className="flex space-x-2 w-max">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
              }`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
