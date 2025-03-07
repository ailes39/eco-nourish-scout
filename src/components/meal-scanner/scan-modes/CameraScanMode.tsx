
import React from "react";
import { Camera } from "lucide-react";

interface CameraScanModeProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CameraScanMode({ handleFileChange }: CameraScanModeProps) {
  return (
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
  );
}
