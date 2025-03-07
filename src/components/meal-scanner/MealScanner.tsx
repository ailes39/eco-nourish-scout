
import React, { useState } from "react";
import { Camera, ImagePlus, Barcode, ArrowRight, Loader2 } from "lucide-react";
import { CustomButton } from "../ui/custom-button";
import { cn } from "@/lib/utils";

export function MealScanner() {
  const [scanMode, setScanMode] = useState<"camera" | "upload" | "barcode">("camera");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<any | null>(null);

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
          <div className="flex rounded-lg border p-1 w-full max-w-md mx-auto">
            <button
              className={cn(
                "flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm font-medium transition-all",
                scanMode === "camera" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
              onClick={() => setScanMode("camera")}
            >
              <Camera className="w-4 h-4 mr-2" />
              Camera
            </button>
            <button
              className={cn(
                "flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm font-medium transition-all",
                scanMode === "upload" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
              onClick={() => setScanMode("upload")}
            >
              <ImagePlus className="w-4 h-4 mr-2" />
              Upload
            </button>
            <button
              className={cn(
                "flex-1 flex items-center justify-center py-2 px-3 rounded-md text-sm font-medium transition-all",
                scanMode === "barcode" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
              )}
              onClick={() => setScanMode("barcode")}
            >
              <Barcode className="w-4 h-4 mr-2" />
              Barcode
            </button>
          </div>

          {/* Scan Area */}
          <div className="rounded-xl border border-dashed border-border bg-card p-6 text-center">
            {previewImage ? (
              <div className="space-y-4">
                <div className="relative w-full max-w-sm mx-auto aspect-square rounded-lg overflow-hidden">
                  <img
                    src={previewImage}
                    alt="Food preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-center">
                  <CustomButton onClick={resetScan} variant="outline">
                    Take New Photo
                  </CustomButton>
                  <CustomButton onClick={analyzeImage}>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Analyze Food
                  </CustomButton>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {scanMode === "camera" && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Camera className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Take a Photo of Your Meal</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Our AI will analyze your meal and provide nutrition insights
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90 cursor-pointer">
                      Open Camera
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}

                {scanMode === "upload" && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <ImagePlus className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Upload a Photo</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Select an image from your device
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90 cursor-pointer">
                      Select Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}

                {scanMode === "barcode" && (
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Barcode className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Scan Barcode</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Scan the product barcode to get nutrition information
                      </p>
                    </div>
                    <label className="inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90 cursor-pointer">
                      Scan Barcode
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : isAnalyzing ? (
        <div className="text-center py-12 space-y-4">
          <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" />
          <h3 className="text-xl font-medium">Analyzing Your Meal</h3>
          <p className="text-muted-foreground">
            Our AI is identifying ingredients and calculating nutrition data...
          </p>
        </div>
      ) : (
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
                  {scanResults.sustainability.suggestions.map((suggestion: string, index: number) => (
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
                  {scanResults.ingredients.map((ingredient: string, index: number) => (
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
      )}
    </div>
  );
}
