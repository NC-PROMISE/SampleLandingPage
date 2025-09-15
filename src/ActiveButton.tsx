import { useState } from "react";

export default function GradientTabs() {
  const [activeTab, setActiveTab] = useState("smart");

  return (
    <div className="flex space-x-20 px-4 border-b border-gray-700 bg-black text-white pl-15">
      
      <button
        onClick={() => setActiveTab("smart")}
        className="relative pb-2"
      >
        <span
          className={`${
            activeTab === "smart" ? "font-semibold" : "text-gray-400"
          }`}
        >
          Smart script
        </span>

       
        {activeTab === "smart" && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
        )}
      </button>

      
      <button
        onClick={() => setActiveTab("advanced")}
        className="relative pb-2"
      >
        <span
          className={`${
            activeTab === "advanced" ? "font-semibold" : "text-gray-400"
          }`}
        >
          Advanced script
        </span>

        
        {activeTab === "advanced" && (
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></span>
        )}
      </button>
      
    </div>
    
  );
}
