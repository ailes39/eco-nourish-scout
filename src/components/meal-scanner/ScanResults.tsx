
import React from "react";
import { CustomButton } from "../ui/custom-button";
import { ScanResultsData } from "./types";

interface ScanResultsProps {
  scanResults: ScanResultsData;
  resetScan: () => void;
}

export function ScanResults({ scanResults, resetScan }: ScanResultsProps) {
  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="bg-card rounded-xl border shadow-card p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-medium">{scanResults.food}</h2>
          <p className="text-muted-foreground">Nutritional Analysis</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            <div className="text-2xl font-medium">{scanResults.calories}</div>
            <div className="text-sm text-muted-foreground">Calories</div>
          </div>
          
          {Object.entries(scanResults.macros).map(([key, value]) => (
            <div key={key} className="bg-secondary/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-medium">{value}g</div>
              <div className="text-sm text-muted-foreground capitalize">{key}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium flex items-center">
              <div className="w-6 h-6 rounded-full bg-eco-500 text-white flex items-center justify-center mr-2">
                <span className="text-xs font-bold">{scanResults.sustainability.score}</span>
              </div>
              Sustainability Score
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {scanResults.sustainability.footprint}
            </p>
            <ul className="mt-2 space-y-1">
              {scanResults.sustainability.suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm flex items-start">
                  <span className="text-eco-500 mr-2">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium">Ingredients</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {scanResults.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-secondary px-3 py-1 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t flex justify-between">
          <CustomButton onClick={resetScan} variant="outline">
            Scan Another Meal
          </CustomButton>
          <CustomButton>Save to Journal</CustomButton>
        </div>
      </div>
    </div>
  );
}
