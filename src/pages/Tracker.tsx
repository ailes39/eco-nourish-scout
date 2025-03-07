
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { ExpiryTracker } from "@/components/expiry-tracker/ExpiryTracker";
import { Clock } from "lucide-react";

const Tracker = () => {
  return (
    <Layout className="px-4 py-6 md:px-6 lg:px-8">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center justify-center space-x-2 bg-eco-100 text-eco-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
          <Clock className="w-4 h-4" />
          <span>Smart Expiry Management</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Food Expiry Tracker
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Monitor your food items, get expiry alerts, and reduce waste
        </p>
      </header>

      <ExpiryTracker />
    </Layout>
  );
};

export default Tracker;
