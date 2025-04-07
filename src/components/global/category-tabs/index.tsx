"use client";

import { useState } from "react";

interface CategoryTabsProps {
  categories: string[];
}

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <div className="flex space-x-6 border-b-[2px] border-gray-200 ">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`relative pb-2  font-medium transition-all duration-200 
            ${
              activeTab === category
                ? "text-black font-bold dark:text-white"
                : "text-body-color "
            }`}
        >
          {category}
          {activeTab === category && (
            <span className="absolute left-0 -bottom-[1px] h-[1px] w-full bg-black dark:bg-white"></span>
          )}
        </button>
      ))}
    </div>
  );
}
