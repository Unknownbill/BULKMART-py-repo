// src/pages/Dashboard.tsx
import React from 'react';
import { Page } from '../types';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const quickStats = [
    { title: 'Available Products', value: '1,247', icon: 'shopping-basket', color: 'yellow', progress: 70, trend: '+12% from last month' },
    { title: 'Active Groups', value: '89', icon: 'users', color: 'green', progress: 60, trend: '+5 new groups this week' },
    { title: 'Your Orders', value: '12', icon: 'shipping-fast', color: 'red', progress: 80, trend: '3 orders pending delivery' }
  ];

  const quickActions = [
    { icon: 'plus-circle', label: 'Add Product', color: 'green' },
    { icon: 'search', label: 'Find Suppliers', color: 'blue' },
    { icon: 'chart-line', label: 'Market Trends', color: 'purple' },
    { icon: 'question-circle', label: 'Get Help', color: 'orange' }
  ];

  const navigationCards: { page: Page; icon: string; title: string; description: string; color: string }[] = [
    { page: 'products', icon: 'shopping-basket', title: 'Browse Products', description: 'Discover agricultural products from across Nigeria', color: 'blue' },
    { page: 'groups', icon: 'users', title: 'Market Groups', description: 'Join local agricultural communities and cooperatives', color: 'green' },
    { page: 'group-purchase', icon: 'handshake', title: 'Group Purchase', description: 'Collaborate with others to get better bulk prices', color: 'purple' },
    { page: 'feedback', icon: 'comments', title: 'Feedback', description: 'Share your experience and help us improve', color: 'orange' }
  ];

  const recentActivities = [
    { icon: 'shopping-cart', title: 'Order #12345 confirmed', description: 'Premium Rice - 50 bags', time: '2 hours ago', color: 'yellow' },
    { icon: 'users', title: 'Joined "Lagos Farmers Cooperative"', description: 'Market group membership', time: '1 day ago', color: 'blue' },
    { icon: 'check-circle', title: 'Profile completed', description: 'Business verification pending', time: '3 days ago', color: 'green' }
  ];

  return (
    <section className="min-h-screen gradient-bg-light">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Dashboard</h2>
        <p className="text-gray-600 mb-6">Welcome back! Here's an overview of your agricultural marketplace activities.</p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-400 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-green-900">{stat.title}</h3>
                  <p className="text-3xl font-bold text-green-700">{stat.value}</p>
                </div>
                <div className="text-4xl text-yellow-400">
                  <i className={`fas fa-${stat.icon}`}></i>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-green-600 h-2 rounded-full progress-bar" 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{stat.trend}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button 
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
              >
                <i className={`fas fa-${action.icon} text-2xl text-green-600 mb-2`}></i>
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Cards */}
        <h3 className="text-xl font-bold text-green-900 mb-4">Explore Marketplace</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationCards.map((card, index) => (
            <div 
              key={index}
              onClick={() => onNavigate(card.page)}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg cursor-pointer hover:scale-105 transform transition-all duration-300 floating"
              style={{ animationDuration: `${4 + index}s` }}
            >
              <div className="text-4xl mb-4">
                <i className={`fas fa-${card.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="opacity-90">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3">
                    <i className={`fas fa-${activity.icon}`}></i>
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-500">{activity.description}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;