
import React from "react";
import { ArrowRight } from "lucide-react";
import { CustomButton } from "../ui/custom-button";

interface ImagePreviewProps {
  previewImage: string;
  resetScan: () => void;
  analyzeImage: () => void;
}

export function ImagePreview({ previewImage, resetScan, analyzeImage }: ImagePreviewProps) {
  return (
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
  );
}
