// src/pages/Products.tsx
import React, { useState } from 'react';
import { products } from '../data/mockData';
import { Product } from '../types';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories = [
    { id: 'all', name: 'All Products', icon: 'globe-africa' },
    { id: 'grains', name: 'Grains', icon: 'wheat' },
    { id: 'vegetables', name: 'Vegetables', icon: 'carrot' },
    { id: 'fruits', name: 'Fruits', icon: 'apple-alt' },
    { id: 'oils', name: 'Oils', icon: 'oil-can' },
    { id: 'tubers', name: 'Tubers', icon: 'seedling' }
  ];

  const filterProducts = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  const handleAddToCart = (product: Product) => {
    // In a real app, this would dispatch to a cart context or state manager
    console.log('Added to cart:', product);
    // You could also show a toast notification here
  };

  return (
    <section className="min-h-screen gradient-bg-light">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Agricultural Products</h2>
        <p className="text-gray-600 mb-6">Discover a wide range of fresh agricultural products from farmers across Nigeria</p>
        
        {/* Category Filter */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-green-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => filterProducts(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
                }`}
              >
                <i className={`fas fa-${category.icon} mr-2`}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="product-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div 
                  className="text-6xl text-center mb-4 floating"
                  style={{ animationDuration: `${3 + Math.random() * 3}s` }}
                >
                  {product.image}
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">{product.name}</h3>
                <p className="text-green-600 font-semibold mb-2">{product.price}</p>
                <p className="text-gray-600 mb-2 text-sm">{product.description}</p>
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                  <i className="fas fa-map-marker-alt mr-1"></i> {product.location}
                </p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-md flex items-center justify-center"
                >
                  <i className="fas fa-shopping-cart mr-2"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-green-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your category filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;