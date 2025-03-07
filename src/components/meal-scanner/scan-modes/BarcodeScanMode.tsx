
import React from "react";
import { Barcode } from "lucide-react";

interface BarcodeScanModeProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BarcodeScanMode({ handleFileChange }: BarcodeScanModeProps) {
  return (
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
  );
}
