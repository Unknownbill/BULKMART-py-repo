// src/app/seller/dashboard/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, DollarSign, TrendingUp, Users, Eye, Plus } from 'lucide-react';
import Link from 'next/link';

export default function SellerDashboardPage() {
  const stats = [
    {
      label: 'Total Products',
      value: '24',
      change: '+3',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      label: 'Monthly Revenue',
      value: '₦2.4M',
      change: '+18%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      label: 'Total Orders',
      value: '156',
      change: '+12%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      label: 'Product Views',
      value: '2.8K',
      change: '+25%',
      icon: Eye,
      color: 'text-orange-600'
    }
  ];

  const recentOrders = [
    {
      id: '1',
      product: 'Premium Rice (50kg bags)',
      customer: 'Green Fields Farm',
      quantity: 15,
      amount: '₦420,000',
      status: 'delivered',
      date: 'Oct 15, 2024'
    },
    {
      id: '2',
      product: 'Organic Fertilizer',
      customer: 'AgroTech Solutions',
      quantity: 8,
      amount: '₦148,000',
      status: 'processing',
      date: 'Oct 14, 2024'
    },
    {
      id: '3',
      product: 'Hybrid Maize Seeds',
      customer: 'Northern Farmers Co.',
      quantity: 25,
      amount: '₦262,500',
      status: 'shipped',
      date: 'Oct 13, 2024'
    }
  ];

  const topProducts = [
    {
      name: 'Premium Rice (50kg)',
      sales: 89,
      revenue: '₦2.4M',
      stock: 45,
      rating: 4.8
    },
    {
      name: 'Organic Fertilizer',
      sales: 67,
      revenue: '₦1.2M',
      stock: 23,
      rating: 4.6
    },
    {
      name: 'Hybrid Maize Seeds',
      sales: 45,
      revenue: '₦472,500',
      stock: 12,
      rating: 4.9
    }
  ];

  return (
    <>
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Seller Dashboard</h1>
            <p className="text-gray-600">Manage your products and track sales performance</p>
          </div>
          <Link href="/seller/products/new" className="btn-primary flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add New Product</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-2">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color.replace('text', 'bg')} bg-opacity-10`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Orders</h2>
                <Link href="/seller/orders" className="text-primary hover:text-primary-700 font-medium">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{order.product}</h3>
                      <p className="text-sm text-gray-600">
                        {order.customer} • Qty: {order.quantity} • {order.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-semibold text-gray-900">{order.amount}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Chart Placeholder */}
            <div className="card mt-6">
              <h2 className="text-xl font-semibold mb-6">Sales Performance</h2>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Sales performance chart</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products & Quick Actions */}
          <div className="lg:col-span-1 space-y-6">
            {/* Top Products */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Top Performing Products</h2>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.sales} sales</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 text-sm">{product.revenue}</p>
                      <p className="text-xs text-gray-500">Stock: {product.stock}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <Link 
                  href="/seller/products"
                  className="w-full btn-primary text-center block py-3"
                >
                  Manage Products
                </Link>
                <Link 
                  href="/seller/orders"
                  className="w-full btn-secondary text-center block py-3"
                >
                  View All Orders
                </Link>
                <Link 
                  href="/seller/analytics"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center block"
                >
                  Analytics Report
                </Link>
                <Link 
                  href="/seller/settings"
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center block"
                >
                  Store Settings
                </Link>
              </div>
            </div>

            {/* Inventory Alert */}
            <div className="card bg-orange-50 border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">Low Stock Alert</h3>
              <p className="text-sm text-orange-700 mb-3">
                3 products are running low on stock
              </p>
              <Link 
                href="/seller/inventory"
                className="text-orange-700 hover:text-orange-800 font-medium text-sm"
              >
                Review Inventory →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}