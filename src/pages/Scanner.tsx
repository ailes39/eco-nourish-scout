
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { MealScanner } from "@/components/meal-scanner/MealScanner";
import { Camera } from "lucide-react";

const Scanner = () => {
  return (
    <Layout className="px-4 py-6 md:px-6 lg:px-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-eco-100 text-eco-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
          <Camera className="w-4 h-4" />
          <span>AI-Powered Analysis</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Meal Scanner
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Upload a photo of your meal or scan a barcode to get instant nutrition insights
        </p>
      </header>

      <MealScanner />
    </Layout>
  );
};

export default Scanner;
