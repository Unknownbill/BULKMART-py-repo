// src/app/products/list/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Page } from '@/types';
import { Star, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: number;
  regularPrice: string;
  groupPrice: string;
  savings: string;
  minOrder: string;
}

export default function ProductsListPage() {
  const products: Product[] = [
    {
      id: '1',
      name: 'Premium Rice (50kg bags)',
      category: 'Grains',
      location: 'Lagos',
      rating: 4.8,
      regularPrice: '₦35,000',
      groupPrice: '₦28,000',
      savings: '₦5,000',
      minOrder: '10 units',
    },
    {
      id: '2',
      name: 'NPK Fertilizer (25kg)',
      category: 'Fertilizers',
      location: 'Kano',
      rating: 4.6,
      regularPrice: '₦18,000',
      groupPrice: '₦15,000',
      savings: '₦3,000',
      minOrder: '20 units',
    },
    {
      id: '3',
      name: 'Hybrid Maize Seeds (10kg)',
      category: 'Seeds',
      location: 'Kaduna',
      rating: 4.9,
      regularPrice: '₦12,500',
      groupPrice: '₦10,500',
      savings: '₦2,000',
      minOrder: '5 units',
    },
    {
      id: '4',
      name: 'Herbicide - Glyphosate (2L)',
      category: 'Fertilizers',
      location: 'Lagos',
      rating: 4.7,
      regularPrice: '₦8,500',
      groupPrice: '₦7,000',
      savings: '₦1,500',
      minOrder: '10 units',
    },
    {
      id: '5',
      name: 'Organic Compost (50kg)',
      category: 'Fertilizers',
      location: 'Ibadan',
      rating: 4.5,
      regularPrice: '₦22,000',
      groupPrice: '₦18,500',
      savings: '₦3,500',
      minOrder: '30 units',
    },
    {
      id: '6',
      name: 'Irrigation System Kit',
      category: 'Equipment',
      location: 'Abuja',
      rating: 4.8,
      regularPrice: '₦45,000',
      groupPrice: '₦38,000',
      savings: '₦7,000',
      minOrder: '1 unit',
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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover quality agricultural supplies at wholesale prices
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-6 py-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* View Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            <Link 
              href="/products"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
            >
              Grid View
            </Link>
            <Link 
              href="/products/list"
              className="px-4 py-2 border border-primary bg-primary text-white rounded-lg"
            >
              List View
            </Link>
          </div>
          <span className="text-gray-600">Showing 6 of 8 products</span>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  {/* Product Image Placeholder */}
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.location}</p>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-500 line-through">{product.regularPrice}</span>
                      <span className="text-lg font-bold text-primary">{product.groupPrice}</span>
                      <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded">
                        Save {product.savings}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-2">
                      Minimum order: {product.minOrder}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button className="bg-secondary text-white p-2 rounded-lg hover:bg-secondary-600 transition-colors">
                    <Plus className="h-5 w-5" />
                  </button>
                  <Link 
                    href={`/products/${product.id}`}
                    className="btn-secondary px-6 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}