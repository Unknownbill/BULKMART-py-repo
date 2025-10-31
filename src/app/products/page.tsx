// src/app/products/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import Link from 'next/link';
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

export default function ProductsPage() {
  const featuredProducts: Product[] = [
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
      name: 'Irrigation System Kit',
      category: 'Equipment',
      location: 'Kaduna',
      rating: 4.9,
      regularPrice: '₦45,000',
      groupPrice: '₦38,000',
      savings: '₦7,000',
      minOrder: '1 unit',
    },
  ];

  const allProducts: Product[] = [
    ...featuredProducts,
    {
      id: '4',
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
      name: 'Herbicide - Glyphosate (2L)',
      category: 'Fertilizers',
      location: 'Lagos',
      rating: 4.7,
      regularPrice: '₦8,500',
      groupPrice: '₦7,000',
      savings: '₦1,500',
      minOrder: '10 units',
    },
  ];

  function ProductCard({ product, showQuickAdd = false }: { product: Product; showQuickAdd?: boolean }) {
    return (
      <div className="card">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-sm font-medium text-gray-500">{product.category}</span>
            <h3 className="font-semibold text-lg text-gray-900 mt-1">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.location}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 line-through">{product.regularPrice}</span>
            <span className="text-lg font-bold text-primary">{product.groupPrice}</span>
          </div>
          <div className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full">
            Save {product.savings} with group purchase
          </div>
          <div className="text-sm text-gray-600">
            Minimum order: {product.minOrder}
          </div>
        </div>

        <div className="flex space-x-2">
          {showQuickAdd && (
            <button className="flex-1 bg-secondary text-white py-2 px-4 rounded-lg font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Quick Add</span>
            </button>
          )}
          <Link 
            href={`/products/${product.id}`}
            className={`${showQuickAdd ? 'flex-1' : 'w-full'} border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors text-center block`}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }

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

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} showQuickAdd={true} />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
            <span className="text-gray-600">Showing 6 of 8 products</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}