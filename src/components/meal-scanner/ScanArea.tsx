
import React from "react";
import { Camera, ImagePlus, Barcode, ArrowRight } from "lucide-react";
import { CustomButton } from "../ui/custom-button";

type ScanMode = "camera" | "upload" | "barcode";

interface ScanAreaProps {
  scanMode: ScanMode;
  previewImage: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  analyzeImage: () => void;
  resetScan: () => void;
}

export function ScanArea({ 
  scanMode, 
  previewImage, 
  handleFileChange, 
  analyzeImage, 
  resetScan 
}: ScanAreaProps) {
  return (
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
  );
}
