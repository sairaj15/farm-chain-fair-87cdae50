import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  DollarSign,
  BarChart3,
  MessageSquare,
  Eye,
  QrCode
} from 'lucide-react';

const RetailerDashboard: React.FC = () => {
  const inventoryData = [
    {
      product: 'Tomatoes',
      quality: 'Grade A',
      quantity: '450 kg',
      trustScore: 94,
      farmer: 'Ravi Kumar',
      price: '₹25/kg',
      status: 'verified'
    },
    {
      product: 'Onions',
      quality: 'Grade A',
      quantity: '380 kg',
      trustScore: 96,
      farmer: 'Meera Patel',
      price: '₹30/kg',
      status: 'verified'
    },
    {
      product: 'Potatoes',
      quality: 'Grade B+',
      quantity: '220 kg',
      trustScore: 88,
      farmer: 'Suresh Singh',
      price: '₹18/kg',
      status: 'verified'
    },
    {
      product: 'Carrots',
      quality: 'Grade A',
      quantity: '150 kg',
      trustScore: 92,
      farmer: 'Anita Devi',
      price: '₹35/kg',
      status: 'verified'
    }
  ];

  const getTrustBadge = (score: number) => {
    if (score >= 95) return { variant: 'success' as const, text: 'Excellent' };
    if (score >= 90) return { variant: 'secondary' as const, text: 'Very Good' };
    if (score >= 80) return { variant: 'warning' as const, text: 'Good' };
    return { variant: 'destructive' as const, text: 'Fair' };
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-trust text-white p-6 rounded-lg shadow-elevated">
        <h1 className="text-2xl font-bold mb-2">Green Market Store Dashboard 🏪</h1>
        <p className="opacity-90">Connecting trusted farmers with conscious consumers through blockchain verification</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Key Metrics */}
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded">
                <ShoppingCart className="h-5 w-5 text-success" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Active Products</div>
                <div className="text-2xl font-bold">47</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-trust-blue/10 rounded">
                <Users className="h-5 w-5 text-trust-blue" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Verified Farmers</div>
                <div className="text-2xl font-bold">23</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded">
                <TrendingUp className="h-5 w-5 text-warning" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Avg Trust Score</div>
                <div className="text-2xl font-bold">92%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-farmer-credit/10 rounded">
                <DollarSign className="h-5 w-5 text-farmer-credit" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Fair Payments</div>
                <div className="text-2xl font-bold">₹2.3L</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory with Trust Scores */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-secondary" />
            Inventory with Trust Scores
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-2">Product</th>
                  <th className="pb-2">Quality</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Trust Score</th>
                  <th className="pb-2">Farmer</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {inventoryData.map((item, index) => {
                  const trustBadge = getTrustBadge(item.trustScore);
                  return (
                    <tr key={index} className="hover:bg-muted/50">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="font-medium">{item.product}</div>
                          <CheckCircle className="h-4 w-4 text-success" />
                        </div>
                      </td>
                      <td className="py-3">
                        <Badge variant="secondary">{item.quality}</Badge>
                      </td>
                      <td className="py-3">{item.quantity}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <Badge variant={trustBadge.variant}>{item.trustScore}%</Badge>
                          <span className="text-sm text-muted-foreground">({trustBadge.text})</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <Button variant="link" className="p-0 h-auto text-trust-blue">
                          {item.farmer}
                        </Button>
                      </td>
                      <td className="py-3 font-medium">{item.price}</td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Smart Contract Price Verification */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              Smart Contract Verification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 p-3 bg-success/10 rounded-lg">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-success font-medium">All purchases verified fair</span>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-medium">Recent Verification:</div>
              
              <div className="p-3 bg-card border rounded">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm font-medium">Tomatoes - Ravi Kumar</div>
                  <Badge variant="secondary" className="bg-success text-white">Verified</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Fair price paid: ₹25/kg (MSP: ₹20/kg)</div>
                  <div>Farmer received: ₹25/kg (100% of retail cost)</div>
                  <div>Quality verified: Grade A</div>
                </div>
              </div>

              <div className="p-3 bg-card border rounded">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm font-medium">Onions - Meera Patel</div>
                  <Badge variant="secondary" className="bg-success text-white">Verified</Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div>Fair price paid: ₹30/kg (MSP: ₹25/kg)</div>
                  <div>Farmer received: ₹30/kg (100% of retail cost)</div>
                  <div>Quality verified: Grade A</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t">
              <div className="text-sm font-medium mb-1">Protection Statistics:</div>
              <div className="text-sm text-muted-foreground">
                <div>✅ 247 fair transactions this month</div>
                <div>⚠️ 3 unfair attempts blocked</div>
                <div>💰 ₹45,000 saved for farmers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consumer Impact Analytics */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-warning" />
              Consumer Impact Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-warning/10 rounded-lg">
              <div className="text-2xl font-bold text-warning">47</div>
              <div className="text-sm text-muted-foreground">Farmers supported this month</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Average farmer income increase:</span>
                <span className="font-bold text-success">43%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Customer satisfaction:</span>
                <span className="font-bold text-success">96%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">QR verification rate:</span>
                <span className="font-bold text-trust-blue">87%</span>
              </div>
            </div>

            <div className="p-3 bg-trust-blue/10 rounded">
              <div className="font-medium text-trust-blue mb-1">Customer Feedback Highlights:</div>
              <div className="text-muted-foreground">
                "Love knowing exactly where my produce comes from and that farmers get fair prices!"
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">This Month's Impact:</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-success/10 rounded text-center">
                  <div className="font-bold text-success">₹1.2M</div>
                  <div className="text-muted-foreground">Direct to farmers</div>
                </div>
                <div className="p-2 bg-secondary/10 rounded text-center">
                  <div className="font-bold text-secondary">1,847</div>
                  <div className="text-muted-foreground">QR scans</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t">
              <div className="text-sm font-medium mb-2">Sample Product QR Codes:</div>
              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-card border-2 border-dashed border-border rounded flex items-center justify-center mb-1">
                    <QrCode className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="text-xs text-muted-foreground">Premium Tomatoes</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Supplier Verification Panel */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Top Verified Suppliers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Ravi Kumar', location: 'Bhubaneswar, Odisha', score: 96, products: ['Tomatoes', 'Onions'], transactions: 45 },
              { name: 'Meera Patel', location: 'Ahmedabad, Gujarat', score: 94, products: ['Onions', 'Carrots'], transactions: 38 },
              { name: 'Suresh Singh', location: 'Ludhiana, Punjab', score: 88, products: ['Potatoes', 'Wheat'], transactions: 52 }
            ].map((supplier, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-card transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-medium">{supplier.name}</div>
                    <div className="text-sm text-muted-foreground">{supplier.location}</div>
                  </div>
                  <Badge variant="secondary" className="bg-success text-white">
                    {supplier.score}%
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Products: </span>
                    {supplier.products.join(', ')}
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Transactions: </span>
                    {supplier.transactions}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RetailerDashboard;