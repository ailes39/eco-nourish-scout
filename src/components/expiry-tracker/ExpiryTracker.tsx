
import React, { useState } from "react";
import { Clock, Plus, Search, Filter, AlertTriangle, Check, Trash2 } from "lucide-react";
import { CustomButton } from "../ui/custom-button";
import { cn } from "@/lib/utils";

interface FoodItem {
  id: string;
  name: string;
  category: string;
  expiryDate: Date;
  quantity: number;
  unit: string;
  location: "pantry" | "fridge" | "freezer";
  status: "ok" | "expiring-soon" | "expired";
}

export function ExpiryTracker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "expiring-soon" | "expired">("all");
  
  // Sample data - in a real app this would come from an API
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: "1",
      name: "Milk",
      category: "Dairy",
      expiryDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      quantity: 1,
      unit: "gallon",
      location: "fridge",
      status: "expiring-soon"
    },
    {
      id: "2",
      name: "Apples",
      category: "Produce",
      expiryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      quantity: 5,
      unit: "pieces",
      location: "fridge",
      status: "ok"
    },
    {
      id: "3",
      name: "Bread",
      category: "Bakery",
      expiryDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      quantity: 1,
      unit: "loaf",
      location: "pantry",
      status: "expired"
    },
    {
      id: "4",
      name: "Chicken Breast",
      category: "Meat",
      expiryDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      quantity: 1,
      unit: "lb",
      location: "fridge",
      status: "expiring-soon"
    },
    {
      id: "5",
      name: "Rice",
      category: "Grains",
      expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
      quantity: 2,
      unit: "kg",
      location: "pantry",
      status: "ok"
    }
  ]);

  const filteredItems = foodItems.filter((item) => {
    // Apply search filter
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply status filter
    const matchesFilter = filter === "all" || item.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  // Sort by expiry date (soonest first)
  filteredItems.sort((a, b) => a.expiryDate.getTime() - b.expiryDate.getTime());

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ok": return "bg-green-100 text-green-800";
      case "expiring-soon": return "bg-amber-100 text-amber-800";
      case "expired": return "bg-red-100 text-red-800";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return `Expired ${Math.abs(diffDays)} day${Math.abs(diffDays) === 1 ? '' : 's'} ago`;
    } else if (diffDays === 0) {
      return "Expires today";
    } else {
      return `Expires in ${diffDays} day${diffDays === 1 ? '' : 's'}`;
    }
  };

  const removeItem = (id: string) => {
    setFoodItems(foodItems.filter(item => item.id !== id));
  };

  const consumeItem = (id: string) => {
    // In a real app, this would update the database
    removeItem(id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 md:items-center justify-between mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search food items..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative inline-block">
            <select
              className="appearance-none bg-secondary border border-border rounded-lg py-2 pl-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
            >
              <option value="all">All Items</option>
              <option value="expiring-soon">Expiring Soon</option>
              <option value="expired">Expired</option>
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          
          <CustomButton>
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </CustomButton>
        </div>
      </div>
      
      {filteredItems.length > 0 ? (
        <div className="space-y-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={cn(
                "bg-card border rounded-lg p-4 animate-in fade-in transition-all duration-300",
                item.status === "expired" && "border-red-200 bg-red-50/50"
              )}
            >
              <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h3 className="font-medium truncate">{item.name}</h3>
                    <span className={cn(
                      "ml-2 px-2 py-0.5 rounded-full text-xs font-medium",
                      getStatusColor(item.status)
                    )}>
                      {item.status === "ok" ? "Fresh" : item.status === "expiring-soon" ? "Soon" : "Expired"}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Clock className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                    <span>{getRelativeTime(item.expiryDate)}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground mt-1">
                    <span>{item.quantity} {item.unit}</span>
                    <span>•</span>
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="capitalize">{item.location}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {item.status === "expired" ? (
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                      onClick={() => removeItem(item.id)}
                      aria-label="Discard item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                      onClick={() => consumeItem(item.id)}
                      aria-label="Mark as consumed"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  
                  <button
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                    onClick={() => removeItem(item.id)}
                    aria-label="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg bg-card">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
            <AlertTriangle className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="mt-4 text-lg font-medium">No food items found</h3>
          <p className="mt-2 text-muted-foreground">
            {searchQuery ? "Try a different search term or filter." : "Add some items to track their expiry."}
          </p>
          <CustomButton className="mt-4">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Item
          </CustomButton>
        </div>
      )}
    </div>
  );
}
