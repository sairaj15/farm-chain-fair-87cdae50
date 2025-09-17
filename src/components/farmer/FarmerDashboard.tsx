import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import BlockchainVerification from '@/components/BlockchainVerification';
import heroImage from '@/assets/agritrace-hero.jpg';
import { 
  TrendingUp, 
  Shield, 
  Camera, 
  AlertTriangle, 
  CheckCircle, 
  Star,
  DollarSign,
  Award,
  BarChart3,
  Users,
  Bell,
  Settings
} from 'lucide-react';

const FarmerDashboard: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Welcome Section with Hero Image */}
      <div 
        className="relative bg-gradient-agri text-white p-8 rounded-lg shadow-elevated overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Ravi Kumar! 👨‍🌾</h1>
          <p className="text-lg opacity-90 mb-4">Your farm is protected by smart contracts and blockchain verification</p>
          <div className="flex items-center gap-4 text-sm">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              ✅ Blockchain Protected
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              📈 +43% Income vs Traditional
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              🛡️ Zero Exploitation
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Credit Score Card - Large Featured */}
        <Card className="lg:col-span-2 shadow-elevated">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-farmer-credit" />
                Farmer Credit Score
              </CardTitle>
              <Badge variant="secondary" className="bg-gradient-success text-white">Grade A</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-farmer-credit">765</div>
              <div className="text-muted-foreground">/900</div>
              <div className="flex items-center justify-center gap-1 mt-2 text-success">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">+13 points this month</span>
              </div>
            </div>
            <Progress value={85} className="h-2" />
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-xl font-semibold">247</div>
                <div className="text-sm text-muted-foreground">Total Transactions</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">A+ 94%</div>
                <div className="text-sm text-muted-foreground">Average Quality</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">98.5%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exploitation Alert Status */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Protection Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-success font-medium">Fair Pricing Protected</span>
            </div>
            <div className="text-sm space-y-2">
              <div className="font-medium">Recent Protection:</div>
              <div className="text-muted-foreground">
                Rejected below-threshold sale attempt - ₹15/kg
                <br />
                <span className="text-success">Fair price: ₹25/kg</span>
              </div>
            </div>
            <div className="pt-2 border-t">
              <div className="text-sm font-medium">This Month:</div>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">exploitation attempts prevented</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dynamic Fair Price Calculator */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-trust-blue" />
              Today's Fair Price Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-trust-blue-light rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">Current Fair Price for Tomatoes</div>
              <div className="text-3xl font-bold text-trust-blue">₹27/kg</div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>MSP (Minimum Support Price)</span>
                <span>₹20/kg</span>
              </div>
              <div className="flex justify-between">
                <span>Quality Premium (Grade A)</span>
                <span className="text-success">+₹5/kg</span>
              </div>
              <div className="flex justify-between">
                <span>Credit Score Bonus</span>
                <span className="text-success">+₹2/kg</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold">
                <span>Fair Price Total</span>
                <span>₹27/kg</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-success/10 rounded text-sm">
              <Shield className="h-4 w-4 text-success" />
              <span className="text-success">Price Protected by Smart Contract</span>
            </div>

            <div className="pt-2 text-sm">
              <div className="font-medium mb-1">Price Comparison:</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Market Rate:</span>
                  <span>₹25/kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Traditional Middleman:</span>
                  <span className="text-destructive">₹18/kg</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Your Protected Price:</span>
                  <span className="text-success">₹27/kg (+50%)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Quality Analysis */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-quality-grade" />
              AI Quality Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!uploadedImage ? (
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Camera className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <div className="text-sm text-muted-foreground mb-3">
                  Upload your crop photo for AI quality analysis
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="crop-upload"
                />
                <Button asChild variant="outline">
                  <label htmlFor="crop-upload" className="cursor-pointer">
                    Take Photo / Upload
                  </label>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <img src={uploadedImage} alt="Uploaded crop" className="w-full h-32 object-cover rounded" />
                <div className="p-3 bg-success/10 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="font-medium text-success">Quality Grade A Detected</span>
                  </div>
                  <div className="text-sm">
                    <div>Recommended Price: <span className="font-bold text-success">₹27/kg</span></div>
                    <div>Confidence: 94%</div>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="text-sm font-medium mb-2">Quality Consistency (6 months)</div>
              <div className="flex items-center gap-2">
                <Progress value={92} className="flex-1" />
                <span className="text-sm font-medium">92% Grade A</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supply Chain Reputation */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Supply Chain Reputation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-warning">96/100</div>
              <Badge variant="secondary" className="bg-warning text-white mt-2">
                Top 5% in Region
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Product Quality</span>
                <div className="flex items-center gap-2">
                  <Progress value={96} className="w-20" />
                  <span className="text-sm font-medium">96%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Delivery Reliability</span>
                <div className="flex items-center gap-2">
                  <Progress value={98} className="w-20" />
                  <span className="text-sm font-medium">98%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Communication</span>
                <div className="flex items-center gap-2">
                  <Progress value={94} className="w-20" />
                  <span className="text-sm font-medium">94%</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t">
              <div className="text-sm font-medium mb-1">Recent Reviews:</div>
              <div className="text-sm text-muted-foreground">
                "Excellent quality tomatoes, always fresh" - Green Market Store
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Impact Summary */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-secondary" />
              Monthly Impact Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-secondary/10 rounded">
                <div className="text-lg font-bold text-secondary">₹1.2L</div>
                <div className="text-sm text-muted-foreground">Total Earnings</div>
              </div>
              <div className="text-center p-3 bg-success/10 rounded">
                <div className="text-lg font-bold text-success">43%</div>
                <div className="text-sm text-muted-foreground">Above Market</div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Exploitation Prevented:</span>
                <span className="font-medium text-success">₹45,000</span>
              </div>
              <div className="flex justify-between">
                <span>Quality Bonus Earned:</span>
                <span className="font-medium text-success">₹18,000</span>
              </div>
              <div className="flex justify-between">
                <span>Direct Sales:</span>
                <span className="font-medium">24 transactions</span>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 bg-trust-blue/10 rounded text-sm">
              <Users className="h-4 w-4 text-trust-blue" />
              <span className="text-trust-blue">Connected to 8 verified retailers</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Blockchain Transactions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <BlockchainVerification 
              transactionType="payment" 
              amount="₹25,000" 
              product="Tomatoes" 
            />
            <BlockchainVerification 
              transactionType="quality" 
              product="Grade A Onions" 
            />
          </CardContent>
        </Card>
      </div>

      {/* Notifications & Alerts */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-warning" />
            Recent Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-success/10 rounded-lg">
            <CheckCircle className="h-5 w-5 text-success mt-0.5" />
            <div className="flex-1">
              <div className="font-medium text-success">Payment Received</div>
              <div className="text-sm text-muted-foreground">₹25,000 received from Green Market Store</div>
              <div className="text-xs text-muted-foreground mt-1">2 minutes ago</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
            <Shield className="h-5 w-5 text-warning mt-0.5" />
            <div className="flex-1">
              <div className="font-medium text-warning">Price Protection Activated</div>
              <div className="text-sm text-muted-foreground">Blocked sale attempt at ₹18/kg - Fair price ₹25/kg</div>
              <div className="text-xs text-muted-foreground mt-1">1 hour ago</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-trust-blue/10 rounded-lg">
            <Star className="h-5 w-5 text-trust-blue mt-0.5" />
            <div className="flex-1">
              <div className="font-medium text-trust-blue">New 5-Star Review</div>
              <div className="text-sm text-muted-foreground">"Excellent quality produce!" - City Fresh Mart</div>
              <div className="text-xs text-muted-foreground mt-1">3 hours ago</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FarmerDashboard;