
import React from "react";
import { DashboardCard } from "./DashboardCard";
import { Recycle, ArrowDown, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function WasteAnalytics() {
  // Sample data - in a real app this would come from an API
  const wasteData = {
    reduction: 32, // percentage reduction from last month
    savedCO2: 5.8, // kg of CO2 saved
    totalItems: 48, // total items tracked
    expiringSoon: 3, // items expiring in the next 3 days
    categories: [
      { name: "Produce", value: 35, color: "bg-green-500" },
      { name: "Dairy", value: 20, color: "bg-blue-400" },
      { name: "Grains", value: 15, color: "bg-amber-400" },
      { name: "Protein", value: 30, color: "bg-red-400" }
    ]
  };

  return (
    <DashboardCard 
      title="Waste Analytics" 
      icon={<Recycle className="w-5 h-5 text-eco-500" />}
      className="h-full"
    >
      <div className="space-y-4">
        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-eco-50 border border-eco-100 rounded-lg p-3">
            <div className="flex items-center text-eco-700">
              <ArrowDown className="w-4 h-4 mr-1" />
              <span className="font-medium text-lg">{wasteData.reduction}%</span>
            </div>
            <div className="text-sm text-eco-600 mt-1">Waste Reduction</div>
          </div>
          
          <div className="bg-eco-50 border border-eco-100 rounded-lg p-3">
            <div className="flex items-center text-eco-700">
              <Leaf className="w-4 h-4 mr-1" />
              <span className="font-medium text-lg">{wasteData.savedCO2} kg</span>
            </div>
            <div className="text-sm text-eco-600 mt-1">CO2 Saved</div>
          </div>
        </div>
        
        {/* Item Status */}
        <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
          <div className="text-center">
            <div className="font-medium">{wasteData.totalItems}</div>
            <div className="text-xs text-muted-foreground">Items Tracked</div>
          </div>
          
          <div className="h-10 w-px bg-border"></div>
          
          <div className="text-center">
            <div className="font-medium text-amber-500">{wasteData.expiringSoon}</div>
            <div className="text-xs text-muted-foreground">Expiring Soon</div>
          </div>
        </div>
        
        {/* Categories Breakdown */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Waste Categories</div>
          <div className="h-4 w-full rounded-full overflow-hidden flex">
            {wasteData.categories.map((category, index) => (
              <div 
                key={index} 
                className={cn("h-full transition-all", category.color)}
                style={{ width: `${category.value}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {wasteData.categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <div className={cn("w-3 h-3 rounded-full", category.color)} />
                <span>{category.name}</span>
                <span className="text-muted-foreground ml-auto">{category.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
