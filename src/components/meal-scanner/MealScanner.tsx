
import React, { useState } from "react";
import { ScanModeSelector } from "./ScanModeSelector";
import { ScanArea } from "./ScanArea";
import { AnalyzingState } from "./AnalyzingState";
import { ScanResults } from "./ScanResults";
import { ScanResultsData } from "./types";

export function MealScanner() {
  const [scanMode, setScanMode] = useState<"camera" | "upload" | "barcode">("camera");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<ScanResultsData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    if (!previewImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with a timeout
    setTimeout(() => {
      // Mock data - in a real app, this would come from an API call to an AI service
      setScanResults({
        food: "Grilled Salmon with Vegetables",
        calories: 420,
        macros: {
          protein: 32,
          carbs: 15,
          fats: 28
        },
        sustainability: {
          score: 8.2,
          footprint: "Low carbon footprint",
          suggestions: [
            "Seasonal vegetables are a great low-impact choice",
            "Consider locally sourced fish for reduced transportation emissions"
          ]
        },
        ingredients: [
          "Salmon (wild-caught)",
          "Broccoli",
          "Bell Peppers",
          "Olive Oil",
          "Herbs & Spices"
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetScan = () => {
    setPreviewImage(null);
    setScanResults(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!scanResults ? (
        <div className="space-y-6">
          {/* Scan Mode Selector */}
          <ScanModeSelector scanMode={scanMode} setScanMode={setScanMode} />

          {/* Scan Area */}
          <ScanArea
            scanMode={scanMode}
            previewImage={previewImage}
            handleFileChange={handleFileChange}
            analyzeImage={analyzeImage}
            resetScan={resetScan}
          />
        </div>
      ) : isAnalyzing ? (
        <AnalyzingState />
      ) : (
        <ScanResults scanResults={scanResults} resetScan={resetScan} />
      )}
    </div>
  );
}
