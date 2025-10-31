// src/pages/GroupPurchase.tsx
import React, { useState } from 'react';
import { groupPurchases } from '../data/mockData';
import { GroupPurchase } from '../types';

const GroupPurchasePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');
  const [purchases, setPurchases] = useState<GroupPurchase[]>(groupPurchases);

  const handleJoinPurchase = (purchaseId: string | number) => {
    // In a real app, this would make an API call
    setPurchases(prev => prev.map(purchase => 
        purchase.id === purchaseId 
          ? { ...purchase, currentMembers: (purchase.currentMembers ?? 0) + 1 }
          : purchase
    ));
    console.log('Joined purchase:', purchaseId);
  };

  const activePurchases = purchases;
  const completedPurchases = purchases.slice(0, 2).map(purchase => ({
    ...purchase,
    status: 'completed',
    currentMembers: purchase.membersNeeded ?? purchase.currentMembers ?? 0
  }));

  const currentPurchases = activeTab === 'active' ? activePurchases : completedPurchases;

  return (
    <section className="min-h-screen gradient-bg-light">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Group Purchase Opportunities</h2>
        <p className="text-gray-600 mb-6">Join forces with other buyers to get wholesale prices through collective purchasing power</p>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            onClick={() => setActiveTab('active')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors duration-300 flex items-center ${
              activeTab === 'active' 
                ? 'border-green-600 text-green-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <i className="fas fa-bolt mr-2"></i>Active Purchases
          </button>
          <button 
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 font-medium border-b-2 transition-colors duration-300 flex items-center ${
              activeTab === 'completed' 
                ? 'border-green-600 text-green-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <i className="fas fa-check-circle mr-2"></i>Completed
          </button>
        </div>

        {/* Purchases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentPurchases.map((purchase) => (
            <div 
              key={purchase.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="text-4xl floating"
                    style={{ animationDuration: `${3 + Math.random() * 3}s` }}
                  >
                    {purchase.image}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium shadow-sm ${
                    activeTab === 'active' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {activeTab === 'active' ? 'Active' : 'Completed'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-green-900 mb-2">{purchase.product}</h3>
                <p className="text-gray-600 text-sm mb-4">{purchase.description}</p>
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <i className="fas fa-user-tie mr-2"></i> Organized by: {purchase.organizer}
                </p>
                
                {/* Price Comparison */}
                <div className="bg-green-50 rounded-lg p-4 mb-4 shadow-inner">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Individual Price:</span>
                    <span className="line-through text-red-500 font-semibold">{purchase.originalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Group Price:</span>
                    <span className="text-green-600 font-bold text-lg">{purchase.groupPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">You Save:</span>
                    <span className="text-yellow-600 font-bold">{purchase.savings}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Members: {purchase.currentMembers}/{purchase.membersNeeded}</span>
                    <span>{Math.round(((purchase.currentMembers ?? 0) / (purchase.membersNeeded ?? 1)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
                    <div 
                      className="bg-green-600 h-2 rounded-full progress-bar" 
                      style={{ width: `${((purchase.currentMembers ?? 0) / (purchase.membersNeeded ?? 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-1"></i> {purchase.location}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-clock mr-1"></i> {purchase.deadline}
                  </span>
                </div>

                {activeTab === 'active' ? (
                  <button 
                    onClick={() => handleJoinPurchase(purchase.id)}
                    className="join-purchase w-full bg-yellow-400 text-green-900 py-3 rounded-lg font-bold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-md btn-glow"
                  >
                    <i className="fas fa-handshake mr-2"></i> Join Group Purchase
                  </button>
                ) : (
                  <button className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-bold cursor-not-allowed shadow-sm">
                    <i className="fas fa-check-circle mr-2"></i> Purchase Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {currentPurchases.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-green-900 mb-2">No purchases found</h3>
            <p className="text-gray-600">
              {activeTab === 'active' 
                ? 'Check back later for new group purchase opportunities'
                : 'No completed purchases yet'
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupPurchasePage;