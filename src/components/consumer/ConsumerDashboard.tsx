import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  QrCode, 
  MapPin, 
  User, 
  Star, 
  MessageSquare, 
  Camera,
  CheckCircle,
  Shield,
  Leaf,
  TrendingUp,
  Heart,
  Award,
  Clock
} from 'lucide-react';

const ConsumerDashboard: React.FC = () => {
  const [scannedProduct, setScannedProduct] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleQRScan = () => {
    setIsScanning(true);
    // Simulate QR scan after 2 seconds
    setTimeout(() => {
      setScannedProduct({
        name: 'Premium Tomatoes',
        farmer: 'Ravi Kumar',
        location: 'Bhubaneswar, Odisha',
        quality: 'Grade A',
        trustScore: 94,
        price: '₹35',
        farmerShare: '₹25 (71%)',
        harvestDate: '2024-01-15',
        journey: [
          { step: 'Harvested', date: '2024-01-15', location: 'Kumar Farm, Odisha', verified: true },
          { step: 'Quality Check', date: '2024-01-15', location: 'Local Collection Center', verified: true },
          { step: 'Transportation', date: '2024-01-16', location: 'Mumbai Distribution Hub', verified: true },
          { step: 'Retail Store', date: '2024-01-17', location: 'Green Market Store, Mumbai', verified: true }
        ]
      });
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6 max-w-md lg:max-w-4xl">
      {/* Welcome Section */}
      <div className="bg-gradient-success text-white p-6 rounded-lg shadow-elevated">
        <h1 className="text-2xl font-bold mb-2">Hey Priya! 👩‍💼</h1>
        <p className="opacity-90">Scan any product to discover its journey and support farmers</p>
      </div>

      {/* QR Scanner Section */}
      <Card className="shadow-elevated">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <QrCode className="h-6 w-6 text-primary" />
            Product Verification Scanner
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {!scannedProduct ? (
            <>
              <div className="border-2 border-dashed border-border rounded-lg p-8 bg-muted/20">
                {isScanning ? (
                  <div className="space-y-3">
                    <div className="animate-bounce-gentle">
                      <QrCode className="h-16 w-16 mx-auto text-primary" />
                    </div>
                    <p className="text-muted-foreground">Scanning QR code...</p>
                    <div className="w-24 h-1 bg-primary/20 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-pulse w-3/4"></div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Camera className="h-16 w-16 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Point your camera at the QR code on any product
                    </p>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleQRScan} 
                disabled={isScanning}
                size="lg"
                className="w-full bg-gradient-agri text-white"
              >
                {isScanning ? 'Scanning...' : 'Scan QR Code'}
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 p-3 bg-success/10 rounded-lg">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-success font-medium">Product Verified Successfully!</span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={() => setScannedProduct(null)}
                className="w-full"
              >
                Scan Another Product
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {scannedProduct && (
        <>
          {/* Product Details */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-success" />
                {scannedProduct.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-trust-blue">Trust Score: {scannedProduct.trustScore}%</div>
                  <Badge variant="secondary" className="bg-success text-white mt-1">Highly Trusted</Badge>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{scannedProduct.price}</div>
                  <div className="text-sm text-muted-foreground">Retail Price</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-muted/20 rounded">
                  <div className="text-sm text-muted-foreground">Quality Grade</div>
                  <div className="font-semibold text-success">{scannedProduct.quality}</div>
                </div>
                <div className="p-3 bg-muted/20 rounded">
                  <div className="text-sm text-muted-foreground">Harvest Date</div>
                  <div className="font-semibold">{scannedProduct.harvestDate}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                <Shield className="h-5 w-5 text-success" />
                <div className="flex-1">
                  <div className="font-medium text-success">Blockchain Verified</div>
                  <div className="text-sm text-muted-foreground">All claims verified on blockchain</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Consumer Impact */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-destructive" />
                Your Purchase Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-success/10 rounded-lg">
                <div className="text-lg font-semibold text-success">
                  {scannedProduct.farmerShare} went directly to farmer
                </div>
                <div className="text-sm text-muted-foreground">
                  That's 71% vs industry average of 30%
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Farmer receives:</span>
                  <span className="font-bold text-success">{scannedProduct.farmerShare}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Supply chain & retail:</span>
                  <span className="font-medium">₹10 (29%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fair trade premium:</span>
                  <span className="font-bold text-success">+₹5</span>
                </div>
              </div>

              <div className="p-3 bg-trust-blue/10 rounded">
                <div className="font-medium text-trust-blue mb-1">Monthly Impact Summary:</div>
                <div className="text-sm text-muted-foreground">
                  You've supported 12 farmers this month with ₹847 in direct purchases
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Supply Chain Journey */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                Product Journey Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scannedProduct.journey.map((step: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${step.verified ? 'bg-success' : 'bg-muted'}`}></div>
                      {index < scannedProduct.journey.length - 1 && (
                        <div className="w-px h-8 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{step.step}</span>
                        {step.verified && <CheckCircle className="h-4 w-4 text-success" />}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {step.date}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {step.location}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Farmer Connection */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Meet Your Farmer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-4xl">👨‍🌾</div>
                <div className="flex-1">
                  <div className="font-semibold text-lg">{scannedProduct.farmer}</div>
                  <div className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {scannedProduct.location}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="h-4 w-4 text-warning fill-current" />
                    <span className="font-medium">4.9/5</span>
                    <span className="text-sm text-muted-foreground">(127 reviews)</span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-farmer-credit text-white">
                  Grade A Farmer
                </Badge>
              </div>

              <div className="p-3 bg-muted/20 rounded">
                <div className="text-sm font-medium mb-1">About Ravi:</div>
                <div className="text-sm text-muted-foreground">
                  "Organic farming for 15 years. Committed to sustainable practices and quality produce for healthy families."
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Farmer
                </Button>
                <Button variant="outline" className="flex-1">
                  <Award className="h-4 w-4 mr-2" />
                  Support Farmer
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-success/10 rounded text-center">
                  <div className="font-bold text-success">15 years</div>
                  <div className="text-muted-foreground">Experience</div>
                </div>
                <div className="p-2 bg-trust-blue/10 rounded text-center">
                  <div className="font-bold text-trust-blue">500+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Farmers Supported</div>
            <div className="text-xs text-success mt-1">This month</div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-trust-blue">₹847</div>
            <div className="text-sm text-muted-foreground">Direct Impact</div>
            <div className="text-xs text-success mt-1">+43% farmer income</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConsumerDashboard;