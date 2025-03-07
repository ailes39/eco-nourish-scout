
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Camera, Clock, ChefHat, BarChart2, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomButton } from "../ui/custom-button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Scan", path: "/scanner", icon: <Camera className="w-5 h-5" /> },
    { name: "Tracker", path: "/tracker", icon: <Clock className="w-5 h-5" /> },
    { name: "Recipes", path: "/recipes", icon: <ChefHat className="w-5 h-5" /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart2 className="w-5 h-5" /> },
  ];

  const isCurrent = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-eco-500 flex items-center justify-center">
              <span className="text-white font-semibold">EN</span>
            </div>
            <span className="font-medium text-lg">EcoNourish</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 rounded-md transition-all",
                  isCurrent(link.path)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-accent text-foreground/80 hover:text-foreground"
                )}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <CustomButton variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-50 md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-16 p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "flex items-center space-x-3 p-3 rounded-lg transition-all",
                isCurrent(link.path)
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent text-foreground/80 hover:text-foreground"
              )}
            >
              {link.icon}
              <span className="font-medium text-lg">{link.name}</span>
            </Link>
          ))}
          
          <div className="mt-auto flex items-center space-x-2 p-3">
            <CustomButton variant="outline" className="w-full justify-start">
              <User className="w-5 h-5 mr-2" />
              <span>Profile</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
}
