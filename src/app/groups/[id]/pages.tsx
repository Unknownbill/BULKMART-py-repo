// src/app/groups/[id]/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link'; // Keep this line
import { Star, MessageCircle } from 'lucide-react';

interface GroupDetailPageProps {
  params: {
    id: string;
  };
}

export default function GroupDetailPage({ params }: GroupDetailPageProps) {
  const group = {
    id: params.id,
    name: 'Southwest Rice Farmers',
    description: 'Rice farmers cooperative covering Lagos, Ogun, and Oyo states for bulk purchases.',
    location: 'Multi-State',
    category: 'Rice & Grains',
    rating: 4.9,
    members: { current: 52, max: 60 },
    nextOrder: 'October 15, 2024',
    totalSavings: '₦3200K',
    completedOrders: 1,
  };

  const upcomingOrders = [
    {
      id: 1,
      product: 'Organic Fertilizer',
      savings: '30% savings',
      minQuantity: '200 units',
      currentCommitments: '185/200',
      deadline: 'October 15',
    },
  ];

  const tabs = ['Overview', 'Orders', 'Members'];

  return (
    <>
      <Header currentUser={null} onNavigate={function (): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/groups" className="inline-flex items-center text-primary hover:text-primary-700 mb-6 transition-colors">
          ← Back to Groups
        </Link>

        {/* Group Header */}
        <div className="card mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                  Featured
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{group.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{group.name}</h1>
              <p className="text-gray-600 mb-4">{group.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <span className="text-sm text-gray-600">Location</span>
              <p className="font-medium">{group.location}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Category</span>
              <p className="font-medium">{group.category}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Next Order</span>
              <p className="font-medium">{group.nextOrder}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Group Capacity: {group.members.current} / {group.members.max} members
            </div>
            <div className="flex space-x-3">
              <button className="btn-secondary flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Message Group</span>
              </button>
              <button className="btn-primary">
                View Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  tab === 'Overview'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="card text-center">
                <div className="text-2xl font-bold text-primary mb-2">{group.totalSavings}</div>
                <div className="text-gray-600">Total Savings</div>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-primary mb-2">{group.completedOrders}</div>
                <div className="text-gray-600">Completed Orders</div>
              </div>
            </div>

            {/* Upcoming Orders */}
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Upcoming Orders</h2>
              
              {upcomingOrders.map((order) => (
                <div key={order.id} className="border rounded-lg p-6 mb-4 last:mb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{order.product}</h3>
                      <p className="text-green-600 font-medium">{order.savings}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Minimum quantity:</span>
                      <p className="font-medium">{order.minQuantity}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Current Commitments:</span>
                      <p className="font-medium">{order.currentCommitments}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Deadline: {order.deadline}
                    </div>
                    <button className="btn-primary">
                      Commit to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Group Stats */}
            <div className="card">
              <h3 className="font-semibold mb-4">Group Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Members</span>
                  <span className="font-medium">{group.members.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-medium">{group.members.max}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{group.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{group.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  Start New Order
                </button>
                <button className="w-full btn-secondary">
                  Invite Members
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Group Settings
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
