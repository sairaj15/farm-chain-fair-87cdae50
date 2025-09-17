import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Store, Scan } from 'lucide-react';

interface RoleSelectorProps {
  currentRole: 'farmer' | 'retailer' | 'consumer';
  onRoleChange: (role: 'farmer' | 'retailer' | 'consumer') => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ currentRole, onRoleChange }) => {
  const roles = [
    { value: 'farmer', label: 'Farmer Dashboard', icon: User },
    { value: 'retailer', label: 'Retailer Dashboard', icon: Store },
    { value: 'consumer', label: 'Consumer App', icon: Scan },
  ];

  return (
    <Select value={currentRole} onValueChange={onRoleChange}>
      <SelectTrigger className="w-48 bg-card shadow-card">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {roles.map((role) => (
          <SelectItem key={role.value} value={role.value}>
            <div className="flex items-center gap-2">
              <role.icon className="h-4 w-4" />
              <span>{role.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RoleSelector;