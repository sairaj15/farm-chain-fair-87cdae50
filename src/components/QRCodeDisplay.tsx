import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { QrCode } from 'lucide-react';

interface QRCodeDisplayProps {
  data: string;
  size?: number;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ data, size = 120 }) => {
  // Generate a simple QR-like pattern for demo purposes
  const generateQRPattern = () => {
    const pattern = [];
    const gridSize = 21; // Standard QR code is 21x21 for version 1
    
    for (let i = 0; i < gridSize; i++) {
      const row = [];
      for (let j = 0; j < gridSize; j++) {
        // Create corner patterns (finder patterns)
        const isCornerPattern = 
          (i < 7 && j < 7) || 
          (i < 7 && j >= gridSize - 7) || 
          (i >= gridSize - 7 && j < 7);
          
        // Create some random data pattern
        const isDataModule = Math.random() > 0.5;
        
        if (isCornerPattern) {
          // Corner pattern logic
          const isBorder = i === 0 || i === 6 || j === 0 || j === 6 ||
                         (i >= gridSize - 7 && (i === gridSize - 7 || i === gridSize - 1)) ||
                         (j >= gridSize - 7 && (j === gridSize - 7 || j === gridSize - 1));
          const isCenter = (i === 3 && j === 3) || 
                          (i === 3 && j === gridSize - 4) || 
                          (i === gridSize - 4 && j === 3);
          row.push(isBorder || isCenter);
        } else {
          row.push(isDataModule);
        }
      }
      pattern.push(row);
    }
    return pattern;
  };

  const pattern = generateQRPattern();
  const moduleSize = size / 21;

  return (
    <Card className="inline-block shadow-card">
      <CardContent className="p-4 text-center">
        <div className="mb-2 text-sm text-muted-foreground">Product QR Code</div>
        <div 
          className="inline-block p-2 bg-white border-2 border-border rounded"
          style={{ width: size + 16, height: size + 16 }}
        >
          <svg width={size} height={size} className="block">
            {pattern.map((row, i) => 
              row.map((filled, j) => 
                filled && (
                  <rect
                    key={`${i}-${j}`}
                    x={j * moduleSize}
                    y={i * moduleSize}
                    width={moduleSize}
                    height={moduleSize}
                    fill="#000"
                  />
                )
              )
            )}
          </svg>
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          Scan with AgriTrace app
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;