
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { NutritionInsights } from "@/components/dashboard/NutritionInsights";
import { WasteAnalytics } from "@/components/dashboard/WasteAnalytics";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <Layout className="px-4 py-6 md:px-6 lg:px-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-eco-100 text-eco-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
          <Leaf className="w-4 h-4" />
          <span>Smart Nutrition & Waste Reduction</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Welcome to EcoNourish
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Track your nutrition, reduce food waste, and discover sustainable recipes - all in one place
        </p>
      </header>

      <div className="max-w-6xl mx-auto space-y-6">
        <QuickActions />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <NutritionInsights />
          <WasteAnalytics />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
