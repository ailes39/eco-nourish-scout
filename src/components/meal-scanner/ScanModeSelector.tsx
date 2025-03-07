
import React from "react";
import { Camera, ImagePlus, Barcode } from "lucide-react";
import { cn } from "@/lib/utils";

type ScanMode = "camera" | "upload" | "barcode";

interface ScanModeSelectorProps {
  scanMode: ScanMode;
  setScanMode: (mode: ScanMode) => void;
}

export function ScanModeSelector({ scanMode, setScanMode }: ScanModeSelectorProps) {
  return (
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
  );
}
