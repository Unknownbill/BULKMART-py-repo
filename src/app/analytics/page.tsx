// src/app/analytics/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingUp,  Calendar } from 'lucide-react';
import { Page } from '@/types';

export default function AnalyticsPage() {
  const metrics = [
    {
      label: 'Total Revenue',
      value: '₦12.4M',
      change: '+18.2%',
      trend: 'up',
      description: 'From last month'
    },
    {
      label: 'Active Users',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      description: 'From last month'
    },
    {
      label: 'Conversion Rate',
      value: '3.2%',
      change: '+0.4%',
      trend: 'up',
      description: 'From last month'
    },
    {
      label: 'Avg Order Value',
      value: '₦45,200',
      change: '+5.8%',
      trend: 'up',
      description: 'From last month'
    }
  ];

  const topProducts = [
    { name: 'Premium Rice (50kg)', sales: 245, revenue: '₦6.8M' },
    { name: 'NPK Fertilizer (25kg)', sales: 189, revenue: '₦2.8M' },
    { name: 'Hybrid Maize Seeds', sales: 156, revenue: '₦1.6M' },
    { name: 'Organic Compost', sales: 134, revenue: '₦2.5M' },
    { name: 'Poultry Feed', sales: 98, revenue: '₦1.8M' }
  ];

  const recentTransactions = [
    {
      id: '1',
      customer: 'Green Fields Farm',
      product: 'Premium Rice (50kg)',
      amount: '₦840,000',
      status: 'completed',
      date: 'Oct 15, 2024'
    },
    {
      id: '2',
      customer: 'AgroTech Solutions',
      product: 'NPK Fertilizer (25kg)',
      amount: '₦450,000',
      status: 'completed',
      date: 'Oct 14, 2024'
    },
    {
      id: '3',
      customer: 'Northern Grains Co.',
      product: 'Various Seeds',
      amount: '₦1,200,000',
      status: 'pending',
      date: 'Oct 14, 2024'
    },
    {
      id: '4',
      customer: 'Farmers Cooperative',
      product: 'Organic Supplies',
      amount: '₦680,000',
      status: 'completed',
      date: 'Oct 13, 2024'
    }
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Track your marketplace performance and insights</p>
        </div>

        {/* Date Range Selector */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">
              Last 30 Days
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Last 90 Days
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              This Year
            </button>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Oct 1 - Oct 30, 2024</span>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${
                  metric.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <TrendingUp className={`h-5 w-5 ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <span className={`text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm font-medium text-gray-600">{metric.label}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Chart Placeholder */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Revenue Overview</h2>
              <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Revenue chart visualization</p>
                  <p className="text-sm text-gray-400">(Chart component would be integrated here)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="lg:col-span-1">
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Top Products</h2>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold mb-6">Recent High-Value Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Transaction ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-3 px-4">
                      <span className="font-mono text-sm text-gray-600">#{transaction.id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{transaction.customer}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-600">{transaction.product}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-gray-900">{transaction.amount}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-600">{transaction.date}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Options */}
        <div className="flex justify-end space-x-4 mt-6">
          <button className="btn-secondary">
            Export as PDF
          </button>
          <button className="btn-primary">
            Export as Excel
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}