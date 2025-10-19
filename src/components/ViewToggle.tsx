import React from "react";
import clsx from "clsx";
import { ViewToggleProps } from "@/types/props";

const ViewToggle: React.FC<ViewToggleProps> = ({
  currentView,
  onViewChange,
}) => {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <button
        onClick={() => onViewChange("pagination")}
        className={clsx(
          "flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border",
          currentView === "pagination"
            ? "bg-black text-white border-black"
            : "bg-white text-black border-gray-300 hover:bg-gray-50"
        )}
      >
        Page Controls
      </button>
      <button
        onClick={() => onViewChange("load-more")}
        className={clsx(
          "flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border",
          currentView === "load-more"
            ? "bg-black text-white border-black"
            : "bg-white text-black border-gray-300 hover:bg-gray-50"
        )}
      >
        Infinite Scroll
      </button>
    </div>
  );
};

export default ViewToggle;
