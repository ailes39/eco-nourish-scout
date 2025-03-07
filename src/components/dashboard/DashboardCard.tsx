
import React from "react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

export function DashboardCard({ 
  title, 
  icon, 
  children, 
  className, 
  contentClassName 
}: DashboardCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl overflow-hidden border shadow-card card-hover animate-in fade-in",
        className
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-medium flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h3>
      </div>
      <div className={cn("p-4", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
