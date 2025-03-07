
import React from "react";
import { Loader2 } from "lucide-react";

export function AnalyzingState() {
  return (
    <div className="text-center py-12 space-y-4">
      <Loader2 className="w-12 h-12 mx-auto animate-spin text-primary" />
      <h3 className="text-xl font-medium">Analyzing Your Meal</h3>
      <p className="text-muted-foreground">
        Our AI is identifying ingredients and calculating nutrition data...
      </p>
    </div>
  );
}
