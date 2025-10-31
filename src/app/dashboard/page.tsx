// src/app/dashboard/page.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { TrendingUp, Users, DollarSign, Package, Plus, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Page } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  // Placeholder functions for Header props
  const handleNavigate = (page: Page) => console.log('Navigating to:', page);
  const handleLogout = () => console.log('Logging out');

  const stats = [
    { 
      label: "Total Orders", 
      value: "24", 
      change: "+12%", 
      icon: Package,
      color: "text-blue-600"
    },
    { 
      label: "Active Groups", 
      value: "5", 
      change: "+2", 
      icon: Users,
      color: "text-green-600"
    },
    { 
      label: "Total Savings", 
      value: "₦450K", 
      change: "+12%", 
      icon: DollarSign,
      color: "text-secondary"
    },
    { 
      label: "Pending Orders", 
      value: "3", 
      change: "+₦125K", 
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentOrders = [
    {
      id: 1,
      product: "Premium Rice (50kg bags)",
      quantity: "10 bags",
      date: "Oct 5, 2024",
      location: "Lagos",
      status: "Delivered",
      amount: "₦280,000"
    },
    {
      id: 2,
      product: "NPK Fertilizer (25kg)",
      quantity: "15 bags",
      date: "Oct 10, 2024",
      location: "Kano",
      status: "In Transit",
      amount: "₦225,000"
    },
    {
      id: 3,
      product: "Hybrid Maize Seeds (10kg)",
      quantity: "5 bags",
      date: "Oct 12, 2024",
      location: "Kaduna",
      status: "Processing",
      amount: "₦62,500"
    }
  ];

  const activeGroups = [
    {
      id: 1,
      name: "Lagos Farmers Cooperative",
      members: 45,
      savings: "₦125,000",
      nextOrder: "Oct 20"
    },
    {
      id: 2,
      name: "Kano Agricultural Alliance",
      members: 32,
      savings: "₦98,000",
      nextOrder: "Oct 18"
    },
    {
      id: 3,
      name: "Kaduna Grain Buyers",
      members: 28,
      savings: "₦87,500",
      nextOrder: "Oct 25"
    }
  ];

  const handleCreateGroup = () => {
    router.push('/groups/create');
  };

  const handleStartPurchase = () => {
    router.push('/products');
  };

  return (
    <>
      <Header currentUser={null} onNavigate={handleNavigate} onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, John!
          </h1>
          <p className="text-gray-600 mt-2">
            Here&apos;s what&apos;s happening with your agricultural marketplace
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color.replace('text', 'bg')} bg-opacity-10`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <p className="text-sm text-green-600 mt-2">{stat.change}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex space-x-4 mb-8">
          <button 
            onClick={handleCreateGroup}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Create Group</span>
          </button>
          <button 
            onClick={handleStartPurchase}
            className="btn-secondary flex items-center space-x-2"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Start Purchase</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Recent Orders</h2>
                <Link href="/orders" className="text-primary hover:text-primary-dark font-medium">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-medium">{order.product}</h3>
                      <p className="text-sm text-gray-600">
                        {order.quantity} • {order.date} • {order.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {order.status}
                      </span>
                      <span className="font-semibold">{order.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Status Summary */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">₦280,000</div>
                  <div className="text-sm text-gray-600">Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">₦225,000</div>
                  <div className="text-sm text-gray-600">In Transit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">₦62,500</div>
                  <div className="text-sm text-gray-600">Processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Groups */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Active Groups</h2>
                <Link href="/groups" className="text-primary hover:text-primary-dark font-medium">
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {activeGroups.map((group) => (
                  <div key={group.id} className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                    <h3 className="font-medium mb-3">{group.name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{group.members} members</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{group.savings}</span>
                      </div>
                      <div className="col-span-2 flex items-center space-x-1">
                        <Package className="h-4 w-4" />
                        <span>Next: {group.nextOrder}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Link 
                  href="/products"
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                >
                  Browse Products
                </Link>
                <Link 
                  href="/groups"
                  className="w-full border border-primary text-primary py-3 px-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center block"
                >
                  Find Groups
                </Link>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Savings Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}