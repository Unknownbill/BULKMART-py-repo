// src/app/groups/create/page.tsx
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Page } from '@/types';

export default function CreateGroupPage() {
  // Placeholder functions for Header props
  const handleNavigate = (page: Page) => console.log('Navigating to:', page);
  const handleLogout = () => console.log('Logging out');

  return (
    <>
      <Header currentUser={null} onNavigate={handleNavigate} onLogout={handleLogout} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/groups" className="inline-flex items-center text-primary hover:text-primary-700 mb-6 transition-colors">
          ← Back to Groups
        </Link>

        <div className="card">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Market Group</h1>
          <p className="text-gray-600 mb-8">
            Start a new group to connect with other buyers and unlock bulk discounts
          </p>

          <form className="space-y-8">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
              <p className="text-gray-600 mb-6">Provide the basic details about your market group</p>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-2">
                    Group Name *
                  </label>
                  <input
                    type="text"
                    id="groupName"
                    placeholder="e.g., Lagos Farmers Cooperative"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Describe the purpose and focus of your group..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <select
                      id="location"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option>Select location</option>
                      <option>Lagos</option>
                      <option>Kano</option>
                      <option>Kaduna</option>
                      <option>Ibadan</option>
                      <option>Abuja</option>
                      <option>Multi-State</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                      Specialty *
                    </label>
                    <select
                      id="specialty"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option>Select specialty</option>
                      <option>Grains</option>
                      <option>Fertilizers</option>
                      <option>Seeds</option>
                      <option>Equipment</option>
                      <option>Organic Supplies</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Settings */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Group Settings</h2>
              <p className="text-gray-600 mb-6">Configure how your group will operate</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700 mb-2">
                    Maximum Members *
                  </label>
                  <input
                    type="number"
                    id="maxMembers"
                    placeholder="e.g., 50"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="deliverySchedule" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Schedule
                  </label>
                  <select
                    id="deliverySchedule"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option>Select schedule</option>
                    <option>Weekly</option>
                    <option>Bi-weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privateGroup"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="privateGroup" className="ml-2 block text-sm text-gray-700">
                      Private Group
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">Only invited members can join</p>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="requireApproval"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="requireApproval" className="ml-2 block text-sm text-gray-700">
                      Require Approval
                    </label>
                  </div>
                  <p className="text-sm text-gray-500">Manually approve new members</p>
                </div>

                <div>
                  <label htmlFor="minOrderValue" className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Order Value (₦)
                  </label>
                  <input
                    type="number"
                    id="minOrderValue"
                    placeholder="e.g., 50000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Categories</h2>
              <p className="text-gray-600 mb-6">What products will your group focus on?</p>
              
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Add product category"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="button"
                  className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">How members can reach you</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    placeholder="group@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    placeholder="08012345678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-6 border-t">
              <button
                type="submit"
                className="btn-primary px-8"
              >
                Create Group
              </button>
              <Link
                href="/groups"
                className="btn-secondary px-8"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}