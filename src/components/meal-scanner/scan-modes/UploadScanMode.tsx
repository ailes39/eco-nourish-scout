
import React from "react";
import { ImagePlus } from "lucide-react";

interface UploadScanModeProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadScanMode({ handleFileChange }: UploadScanModeProps) {
  return (
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
  );
}
