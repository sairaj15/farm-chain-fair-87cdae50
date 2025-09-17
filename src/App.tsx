import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/Header";
import FarmerDashboard from "@/components/farmer/FarmerDashboard";
import RetailerDashboard from "@/components/retailer/RetailerDashboard";
import ConsumerDashboard from "@/components/consumer/ConsumerDashboard";

const queryClient = new QueryClient();

const App = () => {
  const [currentRole, setCurrentRole] = useState<'farmer' | 'retailer' | 'consumer'>('farmer');

  const renderDashboard = () => {
    switch (currentRole) {
      case 'farmer':
        return <FarmerDashboard />;
      case 'retailer':
        return <RetailerDashboard />;
      case 'consumer':
        return <ConsumerDashboard />;
      default:
        return <FarmerDashboard />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Header currentRole={currentRole} onRoleChange={setCurrentRole} />
          <main>
            {renderDashboard()}
          </main>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
