// src/app/products/[id]/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import Link from 'next/link';
import { Star, Truck, Shield, Clock } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = {
    id: params.id,
    name: 'Premium Rice (50kg bags)',
    location: 'Lagos',
    regularPrice: '₦35,000',
    groupPrice: '₦28,000',
    savings: '₦7,000',
    description: 'High-quality premium rice sourced directly from local farmers. Perfect for bulk purchasing and group orders. Each bag weighs 50kg and is carefully packaged to maintain freshness. This rice variety is known for its excellent cooking quality and long grain structure.',
    features: [
      'Premium long-grain rice',
      'Locally sourced from Nigerian farms',
      'Carefully processed and packaged',
      'Bulk discount available',
      'Fast delivery within Lagos',
    ],
    specifications: {
      type: 'Premium Rice',
      weight: '50kg per bag',
      origin: 'Nigeria',
      shelfLife: '12 months',
      storage: 'Cool, dry place',
    },
    organizer: {
      name: 'Lagos Farmers Cooperative',
      rating: 4.8,
      orders: 245,
      memberSince: 'Jan 2023',
    },
    groupProgress: {
      current: 7,
      required: 10,
      timeRemaining: {
        days: 5,
        hours: 14,
        minutes: 31,
      },
    },
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'NPK Fertilizer (25kg)',
      location: 'Kano',
      rating: 4.6,
      regularPrice: '₦18,000',
      groupPrice: '₦15,000',
      savings: '₦3,000',
      minOrder: '20 units',
      category: 'Fertilizers',
    },
    {
      id: '5',
      name: 'Hybrid Maize Seeds (10kg)',
      location: 'Kaduna',
      rating: 4.9,
      regularPrice: '₦12,500',
      groupPrice: '₦10,500',
      savings: '₦2,000',
      minOrder: '5 units',
      category: 'Seeds',
    },
    {
      id: '9',
      name: 'Poultry Feed (50kg)',
      location: 'Lagos',
      rating: 4.7,
      regularPrice: '₦22,000',
      groupPrice: '₦18,500',
      savings: '₦3,500',
      minOrder: '10 units',
      category: 'Livestock Feed',
    },
  ];

  return (
    <>
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/products" className="inline-flex items-center text-primary hover:text-primary-700 mb-6 transition-colors">
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="card mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Grains
                </span>
                <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Group Deal Active
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.location}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl font-bold text-primary">{product.groupPrice}</span>
                <span className="text-xl text-gray-500 line-through">{product.regularPrice}</span>
                <span className="text-lg font-semibold text-green-600">Save 20%</span>
              </div>
              <p className="text-gray-600">per 50kg bag</p>
            </div>

            {/* Description */}
            <div className="card mb-6">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="card mb-6">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Product Type</span>
                    <span className="font-medium">{product.specifications.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium">{product.specifications.weight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Origin</span>
                    <span className="font-medium">{product.specifications.origin}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Shelf Life</span>
                    <span className="font-medium">{product.specifications.shelfLife}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Storage</span>
                    <span className="font-medium">{product.specifications.storage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer */}
            <div className="card">
              <h3 className="font-semibold mb-4">Organizer</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  LFC
                </div>
                <div>
                  <h4 className="font-medium">{product.organizer.name}</h4>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.organizer.rating}</span>
                    <span className="text-sm text-gray-600">({product.organizer.orders} orders)</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Member since {product.organizer.memberSince}</p>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                View Profile
              </button>
            </div>

            {/* Group Purchase */}
            <div className="card">
              <h3 className="font-semibold mb-4">Group Purchase</h3>
              
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm text-gray-600">{product.groupProgress.current}/{product.groupProgress.required} members</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(product.groupProgress.current / product.groupProgress.required) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  {product.groupProgress.required - product.groupProgress.current} more members needed to unlock group price
                </p>
              </div>

              {/* Time Remaining */}
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-3">Time Remaining</h4>
                <div className="flex space-x-4 text-center">
                  <div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <span className="text-xl font-bold">{product.groupProgress.timeRemaining.days}</span>
                    </div>
                    <span className="text-xs text-gray-600 mt-1">Days</span>
                  </div>
                  <div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <span className="text-xl font-bold">{product.groupProgress.timeRemaining.hours}</span>
                    </div>
                    <span className="text-xs text-gray-600 mt-1">Hours</span>
                  </div>
                  <div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <span className="text-xl font-bold">{product.groupProgress.timeRemaining.minutes}</span>
                    </div>
                    <span className="text-xs text-gray-600 mt-1">Mins</span>
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Min. order:</span>
                  <span className="font-medium">10 50kg bags</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Regular Price:</span>
                  <span className="line-through">{product.regularPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Group Price:</span>
                  <span className="text-lg font-bold text-primary">{product.groupPrice}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="font-medium">Your Savings:</span>
                  <span className="font-bold text-green-600">{product.savings}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="btn-primary w-full py-3">
                  Join Group Purchase
                </button>
                <button className="btn-secondary w-full py-3">
                  Buy Individual
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="card">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Free Delivery</h4>
                    <p className="text-sm text-gray-600">For orders above ₦100,000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Verified Seller</h4>
                    <p className="text-sm text-gray-600">Trusted by 1000+ customers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Fast Processing</h4>
                    <p className="text-sm text-gray-600">Ships within 2-3 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">{relatedProduct.category}</span>
                    <h3 className="font-semibold text-lg">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm">{relatedProduct.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{relatedProduct.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 line-through">{relatedProduct.regularPrice}</span>
                    <span className="text-lg font-bold text-primary">{relatedProduct.groupPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600 font-medium">
                      Save {relatedProduct.savings} with group purchase
                    </span>
                    <span className="text-sm text-gray-500">
                      Min: {relatedProduct.minOrder}
                    </span>
                  </div>
                </div>
                
                <Link 
                  href={`/products/${relatedProduct.id}`}
                  className="btn-secondary w-full text-center block py-2"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}