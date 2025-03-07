
import React from "react";
import { Link } from "react-router-dom";
import { DashboardCard } from "./DashboardCard";
import { Lightning, Camera, Clock, ChefHat, Utensils, Barcode } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  className?: string;
}

function ActionButton({ icon, label, to, className }: ActionButtonProps) {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300",
        "hover:bg-secondary hover:scale-105",
        className
      )}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
        {icon}
      </div>
      <span className="text-sm font-medium text-center">{label}</span>
    </Link>
  );
}

export function QuickActions() {
  const actions = [
    { icon: <Camera className="w-5 h-5" />, label: "Scan Meal", to: "/scanner" },
    { icon: <Barcode className="w-5 h-5" />, label: "Scan Barcode", to: "/scanner?barcode=true" },
    { icon: <Clock className="w-5 h-5" />, label: "Log Item", to: "/tracker/add" },
    { icon: <ChefHat className="w-5 h-5" />, label: "Find Recipe", to: "/recipes" },
    { icon: <Utensils className="w-5 h-5" />, label: "Meal Plan", to: "/meal-plan" },
  ];

  return (
    <DashboardCard 
      title="Quick Actions" 
      icon={<Lightning className="w-5 h-5 text-eco-500" />}
      className="h-full"
    >
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {actions.map((action, index) => (
          <ActionButton
            key={index}
            icon={action.icon}
            label={action.label}
            to={action.to}
            className="animate-in fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
