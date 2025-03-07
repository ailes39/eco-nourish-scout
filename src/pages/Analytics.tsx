
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { BarChart2, TrendingUp, Calendar } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";

const Analytics = () => {
  // Sample data - in a real app this would come from an API
  const monthlyData = [
    { month: "Jan", calories: 2100, waste: 12 },
    { month: "Feb", calories: 2200, waste: 10 },
    { month: "Mar", calories: 2150, waste: 8 },
    { month: "Apr", calories: 2050, waste: 7 },
    { month: "May", calories: 2180, waste: 5 },
    { month: "Jun", calories: 2250, waste: 4 }
  ];

  return (
    <Layout className="px-4 py-6 md:px-6 lg:px-8">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Track your nutrition and waste reduction progress over time
        </p>
      </header>

      <div className="max-w-6xl mx-auto space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <DashboardCard 
            title="Average Daily Calories" 
            icon={<BarChart2 className="w-5 h-5 text-eco-500" />}
          >
            <div className="text-center py-4">
              <div className="text-3xl font-bold">2,155</div>
              <div className="text-sm text-muted-foreground mt-1">Last 30 days</div>
              <div className="flex items-center justify-center mt-2 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+5% from previous period</span>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard 
            title="Food Waste Reduction" 
            icon={<BarChart2 className="w-5 h-5 text-eco-500" />}
          >
            <div className="text-center py-4">
              <div className="text-3xl font-bold">42%</div>
              <div className="text-sm text-muted-foreground mt-1">Last 30 days</div>
              <div className="flex items-center justify-center mt-2 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+12% from previous period</span>
              </div>
            </div>
          </DashboardCard>
          
          <DashboardCard 
            title="Sustainability Score" 
            icon={<BarChart2 className="w-5 h-5 text-eco-500" />}
          >
            <div className="text-center py-4">
              <div className="text-3xl font-bold">78/100</div>
              <div className="text-sm text-muted-foreground mt-1">Current rating</div>
              <div className="flex items-center justify-center mt-2 text-green-500 text-sm">
                <TrendingUp className="w-4 h-4 mr-1" />
                <span>+8 points from previous month</span>
              </div>
            </div>
          </DashboardCard>
        </div>
        
        {/* Monthly Trend Chart */}
        <DashboardCard 
          title="Monthly Trends" 
          icon={<Calendar className="w-5 h-5 text-eco-500" />}
          className="h-full"
        >
          <div className="space-y-4 p-2">
            <div className="h-64 w-full">
              {/* In a real app, we would use Recharts here */}
              <div className="h-full flex items-end justify-between gap-2 pr-4 pt-8 relative">
                {/* Chart Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs text-muted-foreground">
                  <span>2400</span>
                  <span>2200</span>
                  <span>2000</span>
                  <span>1800</span>
                  <span>0</span>
                </div>
                
                {/* Bars for each month */}
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div className="w-full flex justify-center space-x-1">
                      {/* Calories bar */}
                      <div 
                        className="w-4 bg-eco-500 rounded-t-sm" 
                        style={{ 
                          height: `${(data.calories / 2400) * 100}%`,
                        }}
                      />
                      {/* Waste bar */}
                      <div 
                        className="w-4 bg-amber-400 rounded-t-sm" 
                        style={{ 
                          height: `${(data.waste / 15) * 70}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs mt-2">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-eco-500 rounded-sm mr-2"></div>
                <span className="text-sm">Calories</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-400 rounded-sm mr-2"></div>
                <span className="text-sm">Food Waste</span>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </Layout>
  );
};

export default Analytics;
