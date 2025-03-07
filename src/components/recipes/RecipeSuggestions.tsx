
import React, { useState } from "react";
import { ChefHat, Clock, Users, Utensils, Filter, Search, BookOpen, Plus } from "lucide-react";
import { CustomButton } from "../ui/custom-button";
import { cn } from "@/lib/utils";

interface Recipe {
  id: string;
  name: string;
  description: string;
  prepTime: number;
  servings: number;
  ingredients: string[];
  dietaryTags: string[];
  wasteSaving: number;
  imageUrl: string;
}

export function RecipeSuggestions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<string | null>(null);
  
  // Sample data - in a real app this would come from an API based on the user's available ingredients
  const recipes: Recipe[] = [
    {
      id: "1",
      name: "Vegetable Frittata",
      description: "A delicious way to use up leftover vegetables in a protein-rich egg dish.",
      prepTime: 25,
      servings: 4,
      ingredients: ["Eggs", "Milk", "Bell Peppers", "Onions", "Spinach", "Cheese"],
      dietaryTags: ["Vegetarian", "Gluten-Free", "High-Protein"],
      wasteSaving: 85,
      imageUrl: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "2",
      name: "Bread Pudding",
      description: "Transform stale bread into a delightful dessert with this simple recipe.",
      prepTime: 45,
      servings: 6,
      ingredients: ["Stale Bread", "Milk", "Eggs", "Sugar", "Vanilla Extract", "Cinnamon"],
      dietaryTags: ["Vegetarian"],
      wasteSaving: 95,
      imageUrl: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "3",
      name: "Stir-Fry with Leftover Rice",
      description: "A quick and customizable meal that uses leftover rice and vegetables.",
      prepTime: 15,
      servings: 2,
      ingredients: ["Leftover Rice", "Mixed Vegetables", "Protein", "Soy Sauce", "Garlic", "Ginger"],
      dietaryTags: ["Dairy-Free", "Adaptable"],
      wasteSaving: 80,
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: "4",
      name: "Banana Oat Muffins",
      description: "Use overripe bananas to make these nutritious breakfast muffins.",
      prepTime: 30,
      servings: 12,
      ingredients: ["Overripe Bananas", "Oats", "Flour", "Eggs", "Milk", "Honey"],
      dietaryTags: ["Vegetarian", "Low-Sugar"],
      wasteSaving: 100,
      imageUrl: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const dietaryOptions = ["All", "Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free", "High-Protein", "Low-Sugar"];

  const filteredRecipes = recipes.filter((recipe) => {
    // Apply search filter
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Apply dietary filter
    const matchesDietary = !dietaryFilter || dietaryFilter === "All" || recipe.dietaryTags.includes(dietaryFilter);
    
    return matchesSearch && matchesDietary;
  });

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center justify-between mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative inline-block">
            <select
              className="appearance-none bg-secondary border border-border rounded-lg py-2 pl-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              value={dietaryFilter || "All"}
              onChange={(e) => setDietaryFilter(e.target.value === "All" ? null : e.target.value)}
            >
              {dietaryOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          
          <CustomButton>
            <Plus className="w-4 h-4 mr-2" />
            Add Ingredients
          </CustomButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="bg-card rounded-xl overflow-hidden border shadow-card card-hover animate-in fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="bg-eco-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-flex items-center">
                  <span>{recipe.wasteSaving}% Waste Reduction</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-lg">{recipe.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{recipe.description}</p>
              
              <div className="flex items-center space-x-4 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{recipe.prepTime} min</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{recipe.servings} servings</span>
                </div>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-2">
                {recipe.dietaryTags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary px-2 py-0.5 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Main Ingredients</h4>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.slice(0, 3).map((ingredient) => (
                    <span
                      key={ingredient}
                      className="bg-muted px-2 py-0.5 rounded-full text-xs"
                    >
                      {ingredient}
                    </span>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs">
                      +{recipe.ingredients.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              
              <CustomButton className="w-full mt-4" variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                View Recipe
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
      
      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 border rounded-lg bg-card">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
            <Utensils className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-medium">No recipes found</h3>
          <p className="mt-2 text-muted-foreground">
            {searchQuery || dietaryFilter
              ? "Try a different search term or dietary filter."
              : "Add more ingredients to get personalized recipe suggestions."}
          </p>
          <CustomButton className="mt-4">
            <Plus className="w-4 h-4 mr-2" />
            Add Your Ingredients
          </CustomButton>
        </div>
      )}
    </div>
  );
}
