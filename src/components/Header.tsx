import React from 'react';
import { Leaf, Shield, ChevronDown } from 'lucide-react';
import RoleSelector from './RoleSelector';

interface HeaderProps {
  currentRole: 'farmer' | 'retailer' | 'consumer';
  onRoleChange: (role: 'farmer' | 'retailer' | 'consumer') => void;
}

const Header: React.FC<HeaderProps> = ({ currentRole, onRoleChange }) => {
  const getUserInfo = () => {
    switch (currentRole) {
      case 'farmer':
        return { name: 'Ravi Kumar', location: 'Bhubaneswar, Odisha', avatar: '👨‍🌾' };
      case 'retailer':
        return { name: 'Green Market Store', location: 'Delhi', avatar: '🏪' };
      case 'consumer':
        return { name: 'Priya Sharma', location: 'Mumbai', avatar: '👩‍💼' };
    }
  };

  const userInfo = getUserInfo();

  return (
    <header className="bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 py-2 px-2">
              <img 
                src="/src/assets/agritrace-logo-new.png" 
                alt="AgriTrace" 
                className="h-12 w-auto sm:h-14 md:h-16 flex-shrink-0"
              />
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl font-bold text-primary">
                  AgriTrace
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Farm to Fork. Secure & Transparent
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-success font-medium hidden sm:inline">Blockchain Connected</span>
            </div>
          </div>

          {/* Role Selector */}
          <div className="flex items-center gap-4">
            <RoleSelector currentRole={currentRole} onRoleChange={onRoleChange} />
            
            {/* User Info */}
            <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg">
              <div className="text-2xl">{userInfo.avatar}</div>
              <div className="text-sm">
                <div className="font-medium">{userInfo.name}</div>
                <div className="text-muted-foreground">{userInfo.location}</div>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;