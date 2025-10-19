import React from "react";
import { BaseStatsProps } from "@/types/props";
import { BASE_STATS_CONFIG } from "@/constants";

const BaseStats: React.FC<BaseStatsProps> = ({ stats }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900">Base Stats</h2>
      <div className="space-y-3">
        {BASE_STATS_CONFIG.map((statConfig, index) => {
          const statValue = stats[index]?.base_stat || 0;

          return (
            <div key={statConfig.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-black">
                  {statConfig.name}
                </span>
                <span className="font-semibold text-gray-600 text-md">
                  {statValue}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 transition-all duration-500 bg-black rounded-full"
                  style={{
                    width: `${Math.min(statValue / 2, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BaseStats;
