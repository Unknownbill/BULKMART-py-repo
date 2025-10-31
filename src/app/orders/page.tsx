
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import { Truck, CheckCircle, Clock, XCircle } from 'lucide-react';

interface Order {
  id: string;
  product: string;
  quantity: string;
  date: string;
  location: string;
  status: 'delivered' | 'transit' | 'processing' | 'cancelled';
  amount: string;
  orderId: string;
}

export default function OrdersPage() {
  const orders: Order[] = [
    {
      id: '1',
      product: 'Premium Rice (50kg bags)',
      quantity: '10 bags',
      date: 'Oct 5, 2024',
      location: 'Lagos',
      status: 'delivered',
      amount: '₦280,000',
      orderId: 'ORD-001'
    },
    {
      id: '2',
      product: 'NPK Fertilizer (25kg)',
      quantity: '15 bags',
      date: 'Oct 10, 2024',
      location: 'Kano',
      status: 'transit',
      amount: '₦225,000',
      orderId: 'ORD-002'
    },
    {
      id: '3',
      product: 'Hybrid Maize Seeds (10kg)',
      quantity: '5 bags',
      date: 'Oct 12, 2024',
      location: 'Kaduna',
      status: 'processing',
      amount: '₦62,500',
      orderId: 'ORD-003'
    },
    {
      id: '4',
      product: 'Organic Compost (50kg)',
      quantity: '8 bags',
      date: 'Oct 8, 2024',
      location: 'Ibadan',
      status: 'delivered',
      amount: '₦148,000',
      orderId: 'ORD-004'
    },
    {
      id: '5',
      product: 'Poultry Feed (50kg)',
      quantity: '12 bags',
      date: 'Oct 15, 2024',
      location: 'Lagos',
      status: 'cancelled',
      amount: '₦222,000',
      orderId: 'ORD-005'
    }
  ];

  const statusConfig = {
    delivered: { icon: CheckCircle, color: 'text-green-600 bg-green-50', label: 'Delivered' },
    transit: { icon: Truck, color: 'text-blue-600 bg-blue-50', label: 'In Transit' },
    processing: { icon: Clock, color: 'text-orange-600 bg-orange-50', label: 'Processing' },
    cancelled: { icon: XCircle, color: 'text-red-600 bg-red-50', label: 'Cancelled' },
  };

  const stats = {
    total: 24,
    delivered: 18,
    inTransit: 3,
    processing: 2,
    cancelled: 1
  };

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Orders & Transactions</h1>
          <p className="text-gray-600">Track and manage your agricultural purchases</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary mb-2">{stats.total}</div>
            <div className="text-gray-600">Total Orders</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">{stats.delivered}</div>
            <div className="text-gray-600">Delivered</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">{stats.inTransit}</div>
            <div className="text-gray-600">In Transit</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">{stats.processing}</div>
            <div className="text-gray-600">Processing</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>All Status</option>
            <option>Delivered</option>
            <option>In Transit</option>
            <option>Processing</option>
            <option>Cancelled</option>
          </select>
          <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>All Time</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Order Details</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Date & Location</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const StatusIcon = statusConfig[order.status].icon;
                  return (
                    <tr key={order.id} className="border-b border-gray-100 last:border-b-0">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{order.product}</div>
                          <div className="text-sm text-gray-600">{order.quantity}</div>
                          <div className="text-xs text-gray-500 mt-1">ID: {order.orderId}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-sm text-gray-900">{order.date}</div>
                        <div className="text-sm text-gray-600">{order.location}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${statusConfig[order.status].color}`}>
                          <StatusIcon className="h-4 w-4" />
                          <span>{statusConfig[order.status].label}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-900">{order.amount}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          <button className="text-primary hover:text-primary-700 text-sm font-medium">
                            Track
                          </button>
                          <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                            Details
                          </button>
                          {order.status === 'delivered' && (
                            <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                              Review
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              Showing 5 of {stats.total} orders
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 border border-primary bg-primary text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}