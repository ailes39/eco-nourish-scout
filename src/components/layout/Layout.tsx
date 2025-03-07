
import React from "react";
import { Navbar } from "./Navbar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn("flex-1 pt-16 transition-all duration-300", className)}>
        {children}
      </main>
    </div>
  );
}
