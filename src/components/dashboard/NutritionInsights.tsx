
import React from "react";
import { DashboardCard } from "./DashboardCard";
import { Salad, TrendingUp, Activity } from "lucide-react";

export function NutritionInsights() {
  // Sample data - in a real app this would come from an API
  const nutritionData = {
    calories: {
      consumed: 1840,
      goal: 2200,
      percentage: 84
    },
    macros: {
      protein: { value: 85, goal: 120, unit: "g" },
      carbs: { value: 210, goal: 250, unit: "g" },
      fats: { value: 65, goal: 70, unit: "g" }
    },
    insights: [
      "Protein intake is 30% below your daily goal",
      "Great job on staying hydrated today",
      "Consider adding more leafy greens to your diet"
    ]
  };
  
  return (
    <DashboardCard 
      title="Nutrition Insights" 
      icon={<Salad className="w-5 h-5 text-eco-500" />}
      className="h-full"
    >
      <div className="space-y-4">
        {/* Calories Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Calories</span>
            <span className="text-sm text-muted-foreground">
              {nutritionData.calories.consumed} / {nutritionData.calories.goal} kcal
            </span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-eco-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${nutritionData.calories.percentage}%` }}
            />
          </div>
        </div>

        {/* Macros */}
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(nutritionData.macros).map(([key, data]) => (
            <div key={key} className="bg-secondary/50 rounded-lg p-3 text-center">
              <div className="font-medium">{data.value}{data.unit}</div>
              <div className="text-xs text-muted-foreground capitalize">{key}</div>
              <div className="text-xs mt-1">
                <span className={data.value >= data.goal ? "text-green-500" : "text-amber-500"}>
                  {Math.round((data.value / data.goal) * 100)}%
                </span> of goal
              </div>
            </div>
          ))}
        </div>

        {/* AI Insights */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm font-medium">
            <TrendingUp className="w-4 h-4 mr-1 text-eco-500" />
            <span>AI Insights</span>
          </div>
          <ul className="space-y-2">
            {nutritionData.insights.map((insight, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="bg-eco-100 text-eco-800 p-1 rounded-full mr-2 mt-0.5">
                  <Activity className="w-3 h-3" />
                </span>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DashboardCard>
  );
}
