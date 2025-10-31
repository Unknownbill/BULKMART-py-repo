// src/components/AdvancedSearch.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, Star, MapPin, DollarSign } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  groupPrice: number;
  location: string;
  rating: number;
  tags: string[];
  seller: string;
  minOrder: number;
  createdAt: Date;
}

interface SearchFilters {
  query: string;
  category: string;
  subcategory: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  tags: string[];
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest';
  inStock: boolean;
}

export default function AdvancedSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    category: '',
    subcategory: '',
    location: '',
    minPrice: 0,
    maxPrice: 1000000,
    minRating: 0,
    tags: [],
    sortBy: 'relevance',
    inStock: true
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  // Mock products data
  const products: Product[] = useMemo(() => [
    {
      id: '1',
      name: 'Premium Long Grain Rice 50kg',
      description: 'High-quality premium rice sourced from Nigerian farms. Perfect for bulk purchasing.',
      category: 'Grains',
      subcategory: 'Rice',
      price: 35000,
      groupPrice: 28000,
      location: 'Lagos',
      rating: 4.8,
      tags: ['premium', 'long-grain', 'local', 'bulk'],
      seller: 'Lagos Farmers Cooperative',
      minOrder: 10,
      createdAt: new Date('2024-09-15')
    },
    {
      id: '2',
      name: 'NPK 15-15-15 Fertilizer 25kg',
      description: 'Balanced NPK fertilizer for all crop types. Improves soil fertility.',
      category: 'Fertilizers',
      subcategory: 'Chemical',
      price: 18000,
      groupPrice: 15000,
      location: 'Kano',
      rating: 4.6,
      tags: ['npk', 'balanced', 'crops', 'soil'],
      seller: 'AgroTech Solutions',
      minOrder: 20,
      createdAt: new Date('2024-10-01')
    },
    // Add more mock products...
  ], []);

  const categories = [
    { value: 'grains', label: 'Grains & Cereals', subcategories: ['rice', 'maize', 'wheat', 'millet'] },
    { value: 'fertilizers', label: 'Fertilizers', subcategories: ['organic', 'chemical', 'liquid', 'granular'] },
    { value: 'seeds', label: 'Seeds', subcategories: ['maize', 'rice', 'vegetable', 'fruit'] },
    { value: 'equipment', label: 'Equipment', subcategories: ['irrigation', 'tools', 'machinery', 'storage'] }
  ];

  const popularTags = ['organic', 'premium', 'bulk', 'local', 'imported', 'hybrid', 'non-gmo'];

  // Search and filter logic
  const filteredProducts = useMemo(() => {
    let results = products;

    // Text search across multiple fields
    if (filters.query) {
      const query = filters.query.toLowerCase();
      results = results.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query)) ||
        product.seller.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category) {
      results = results.filter(product => 
        product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Subcategory filter
    if (filters.subcategory) {
      results = results.filter(product => 
        product.subcategory.toLowerCase() === filters.subcategory.toLowerCase()
      );
    }

    // Location filter
    if (filters.location) {
      results = results.filter(product => 
        product.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Price range filter
    results = results.filter(product => 
      product.groupPrice >= filters.minPrice && 
      product.groupPrice <= filters.maxPrice
    );

    // Rating filter
    results = results.filter(product => product.rating >= filters.minRating);

    // Tags filter
    if (filters.tags.length > 0) {
      results = results.filter(product =>
        filters.tags.every(tag => product.tags.includes(tag))
      );
    }

    // Stock filter
    if (filters.inStock) {
      // Mock stock check - in real app this would check actual inventory
      results = results.filter(product => product.minOrder > 0);
    }

    // Sorting
    results.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.groupPrice - b.groupPrice;
        case 'price-high':
          return b.groupPrice - a.groupPrice;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'relevance':
        default:
          return 0; // Relevance would be handled by search engine
      }
    });

    return results;
  }, [products, filters]);

  const addTag = (tag: string) => {
    if (!filters.tags.includes(tag)) {
      setFilters(prev => ({ ...prev, tags: [...prev.tags, tag] }));
    }
  };

  const removeTag = (tag: string) => {
    setFilters(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  const clearAllFilters = () => {
    setFilters({
      query: '',
      category: '',
      subcategory: '',
      location: '',
      minPrice: 0,
      maxPrice: 1000000,
      minRating: 0,
      tags: [],
      sortBy: 'relevance',
      inStock: true
    });
  };

  return (
    <div className="space-y-6">
      {/* Main Search Bar */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={filters.query}
              onChange={(e) => setFilters(prev => ({ ...prev, query: e.target.value }))}
              placeholder="Search products, suppliers, categories..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
            />
          </div>
          
          <div className="flex space-x-3">
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>

            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {(filters.category || filters.location || filters.tags.length > 0 || filters.minRating > 0) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {filters.category && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                Category: {filters.category}
                <button onClick={() => setFilters(prev => ({ ...prev, category: '' }))} className="ml-2">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            
            {filters.location && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                Location: {filters.location}
                <button onClick={() => setFilters(prev => ({ ...prev, location: '' }))} className="ml-2">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {filters.tags.map(tag => (
              <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                {tag}
                <button onClick={() => removeTag(tag)} className="ml-2">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}

            {filters.minRating > 0 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                Rating: {filters.minRating}+
                <button onClick={() => setFilters(prev => ({ ...prev, minRating: 0 }))} className="ml-2">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category & Subcategory */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value, subcategory: '' }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
              <select
                value={filters.subcategory}
                onChange={(e) => setFilters(prev => ({ ...prev, subcategory: e.target.value }))}
                disabled={!filters.category}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-50"
              >
                <option value="">All Subcategories</option>
                {categories
                  .find(cat => cat.value === filters.category)
                  ?.subcategories.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4 inline mr-1" />
                Location
              </label>
              <input
                type="text"
                value={filters.location}
                onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                placeholder="City or state"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <DollarSign className="h-4 w-4 inline mr-1" />
                Price Range (₦)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, minPrice: Number(e.target.value) }))}
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: Number(e.target.value) }))}
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Star className="h-4 w-4 inline mr-1" />
              Minimum Rating
            </label>
            <div className="flex space-x-2">
              {[0, 3, 3.5, 4, 4.5].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                  className={`px-3 py-2 rounded-lg border transition-colors ${
                    filters.minRating === rating
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {rating === 0 ? 'Any' : `${rating}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Popular Tags</label>
            <div className="flex flex-wrap gap-2">
              {popularTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => addTag(tag)}
                  disabled={filters.tags.includes(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Stock Filter */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="inStock"
              checked={filters.inStock}
              onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="inStock" className="ml-2 text-sm text-gray-700">
              Show only products in stock
            </label>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Search Results ({filteredProducts.length} products found)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.seller} • {product.location}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>

              <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 line-through">₦{product.price.toLocaleString()}</span>
                  <span className="text-lg font-bold text-primary">₦{product.groupPrice.toLocaleString()}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {product.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full btn-primary">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="card text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
            <button
              onClick={clearAllFilters}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}