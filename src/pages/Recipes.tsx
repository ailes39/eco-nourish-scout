
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { RecipeSuggestions } from "@/components/recipes/RecipeSuggestions";
import { ChefHat } from "lucide-react";

const Recipes = () => {
  return (
    <Layout className="px-4 py-6 md:px-6 lg:px-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-eco-100 text-eco-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
          <ChefHat className="w-4 h-4" />
          <span>AI-Powered Suggestions</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Smart Recipe Suggestions
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Discover recipes based on ingredients you already have to minimize food waste
        </p>
      </header>

      <RecipeSuggestions />
    </Layout>
  );
};

export default Recipes;
