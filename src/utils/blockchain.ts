// Blockchain utility functions for demo purposes

export const generateTransactionHash = (): string => {
  const chars = '0123456789abcdef';
  let hash = '0x';
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
};

export const generateBlockNumber = (): number => {
  return Math.floor(Math.random() * 1000000) + 18500000; // Simulate Ethereum-like block numbers
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
  }).format(amount);
};

export const calculateFairPrice = (basePrice: number, qualityGrade: string, creditScore: number): number => {
  let premium = 0;
  
  // Quality premium
  switch (qualityGrade) {
    case 'Grade A':
      premium += 5;
      break;
    case 'Grade B+':
      premium += 3;
      break;
    case 'Grade B':
      premium += 1;
      break;
    default:
      premium += 0;
  }
  
  // Credit score bonus
  if (creditScore >= 900) premium += 3;
  else if (creditScore >= 800) premium += 2;
  else if (creditScore >= 700) premium += 1;
  
  return basePrice + premium;
};

export const getTimeAgo = (date: string): string => {
  const now = new Date();
  const past = new Date(date);
  const diffInHours = Math.floor((now.getTime() - past.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Just now';
  if (diffInHours < 24) return `${diffInHours}h ago`;
  return `${Math.floor(diffInHours / 24)}d ago`;
};