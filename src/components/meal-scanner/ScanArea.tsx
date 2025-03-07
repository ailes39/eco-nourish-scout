
import React from "react";
import { CameraScanMode } from "./scan-modes/CameraScanMode";
import { UploadScanMode } from "./scan-modes/UploadScanMode";
import { BarcodeScanMode } from "./scan-modes/BarcodeScanMode";
import { ImagePreview } from "./ImagePreview";

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
        <ImagePreview 
          previewImage={previewImage} 
          resetScan={resetScan} 
          analyzeImage={analyzeImage} 
        />
      ) : (
        <>
          {scanMode === "camera" && <CameraScanMode handleFileChange={handleFileChange} />}
          {scanMode === "upload" && <UploadScanMode handleFileChange={handleFileChange} />}
          {scanMode === "barcode" && <BarcodeScanMode handleFileChange={handleFileChange} />}
        </>
      )}
    </div>
  );
}
