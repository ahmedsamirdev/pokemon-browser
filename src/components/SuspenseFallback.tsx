import React from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import { SuspenseFallbackProps } from "@/types/props";

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({
  message = "Loading...",
  size = "lg",
}) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        <Loader2
          className={clsx(sizeClasses[size], "animate-spin text-black")}
        />
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
      </div>
      <p className="mt-4 text-lg font-medium text-gray-600">{message}</p>
      <div className="flex mt-2 space-x-1">
        <div className="bg-black rounded-full size-2 animate-bounce"></div>
        <div
          className="bg-black rounded-full size-2 animate-bounce"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="bg-black rounded-full size-2 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
};

export default SuspenseFallback;
