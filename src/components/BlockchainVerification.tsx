import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Link, 
  CheckCircle, 
  Shield, 
  Clock, 
  ExternalLink,
  Copy,
  RefreshCw
} from 'lucide-react';
import { generateTransactionHash, generateBlockNumber } from '@/utils/blockchain';
import { useToast } from '@/hooks/use-toast';

interface BlockchainVerificationProps {
  transactionType: 'purchase' | 'quality' | 'payment';
  amount?: string;
  product?: string;
}

const BlockchainVerification: React.FC<BlockchainVerificationProps> = ({ 
  transactionType, 
  amount, 
  product 
}) => {
  const [txHash, setTxHash] = useState<string>('');
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Generate transaction details on component mount
    setTxHash(generateTransactionHash());
    setBlockNumber(generateBlockNumber());
  }, []);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(txHash);
    toast({
      title: "Copied!",
      description: "Transaction hash copied to clipboard",
    });
  };

  const handleVerifyOnChain = () => {
    setIsVerifying(true);
    // Simulate blockchain verification delay
    setTimeout(() => {
      setIsVerifying(false);
      toast({
        title: "Verification Complete",
        description: "Transaction verified on blockchain",
      });
    }, 2000);
  };

  const getTransactionDescription = () => {
    switch (transactionType) {
      case 'purchase':
        return `Purchase of ${product} for ${amount}`;
      case 'quality':
        return `Quality verification for ${product}`;
      case 'payment':
        return `Fair payment of ${amount} to farmer`;
      default:
        return 'Blockchain transaction';
    }
  };

  return (
    <Card className="shadow-card border-l-4 border-l-success">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4 text-success" />
          Blockchain Verification
          <Badge variant="success" className="ml-auto">Confirmed</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-sm font-medium mb-1">{getTransactionDescription()}</div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            Verified 2 minutes ago
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Transaction Hash:</span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleCopyHash}
              className="h-6 px-2 text-xs"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          <div className="font-mono text-xs bg-muted p-2 rounded break-all">
            {txHash}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div>
            <span className="text-muted-foreground">Block: </span>
            <span className="font-mono">{blockNumber.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-success">
            <CheckCircle className="h-3 w-3" />
            <span>12 confirmations</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleVerifyOnChain}
            disabled={isVerifying}
            className="flex-1 text-xs h-7"
          >
            {isVerifying ? (
              <>
                <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Link className="h-3 w-3 mr-1" />
                Verify on Chain
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" className="text-xs h-7">
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockchainVerification;