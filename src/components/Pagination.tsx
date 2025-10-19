import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { PaginationProps } from "@/types/props";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center justify-center mt-8 space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-3 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="size-4" />
        <span className="ml-1">Previous</span>
      </button>

      {visiblePages.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-3 py-2 text-sm text-black">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={clsx(
                "px-3 py-2 text-sm font-medium rounded-md",
                currentPage === page
                  ? "bg-black text-white"
                  : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
              )}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-3 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="mr-1">Next</span>
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
};

export default Pagination;
