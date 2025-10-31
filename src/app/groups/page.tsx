// src/app/groups/page.tsx
"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Page } from '@/types';
import { Star, Users, Calendar } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  description: string;
  location: string;
  members: { current: number; max: number };
  rating: number;
  totalSavings: string;
  nextOrder: string;
  categories: string[];
  isFeatured?: boolean;
  isMember?: boolean;
}

export default function GroupsPage() {
  const groups: Group[] = [
    {
      id: '1',
      name: 'Lagos Farmers Cooperative',
      description: 'A community of farmers in Lagos focused on bulk purchasing of grains and fertilizers.',
      location: 'Lagos',
      members: { current: 45, max: 50 },
      rating: 4.8,
      totalSavings: '₦150K',
      nextOrder: 'Oct 20',
      categories: ['Grains & Fertilizers'],
      isFeatured: true,
      isMember: true,
    },
    {
      id: '2',
      name: 'Kano Agricultural Alliance',
      description: 'Northern Nigeria agricultural cooperative specializing in seeds and pesticides procurement.',
      location: 'Kano',
      members: { current: 32, max: 40 },
      rating: 4.6,
      totalSavings: '₦980K',
      nextOrder: 'Oct 18',
      categories: ['Seeds & Pesticides'],
      isMember: true,
    },
    {
      id: '3',
      name: 'Kaduna Grain Buyers',
      description: 'Dedicated group for bulk grain purchases across Kaduna state with excellent track record.',
      location: 'Kaduna',
      members: { current: 28, max: 35 },
      rating: 4.9,
      totalSavings: '₦875K',
      nextOrder: 'Oct 25',
      categories: ['Grains'],
      isFeatured: true,
    },
    {
      id: '4',
      name: 'Ibadan Organic Farmers',
      description: 'Organic farming enthusiasts purchasing organic fertilizers and natural pesticides together.',
      location: 'Ibadan',
      members: { current: 21, max: 30 },
      rating: 4.7,
      totalSavings: '₦650K',
      nextOrder: 'Oct 22',
      categories: ['Organic Supplies'],
    },
    {
      id: '5',
      name: 'Abuja Equipment Buyers',
      description: 'Group focused on purchasing farm equipment and machinery at wholesale prices.',
      location: 'Abuja',
      members: { current: 18, max: 25 },
      rating: 4.5,
      totalSavings: '₦2100K',
      nextOrder: 'Oct 30',
      categories: ['Equipment'],
    },
    {
      id: '6',
      name: 'Southwest Rice Farmers',
      description: 'Rice farmers cooperative covering Lagos, Ogun, and Oyo states for bulk purchases.',
      location: 'Multi-State',
      members: { current: 52, max: 60 },
      rating: 4.9,
      totalSavings: '₦3200K',
      nextOrder: 'Oct 15',
      categories: ['Rice & Grains'],
      isFeatured: true,
      isMember: true,
    },
  ];

  const stats = {
    totalGroups: 6,
    yourGroups: 3,
    totalSavings: '₦2.5M',
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [activeTab, setActiveTab] = useState<'all' | 'my'>('all');

  return (
    <>
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Market Groups
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join buying groups to unlock better prices through collective purchasing
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stats.totalGroups}</div>
            <div className="text-gray-600">Total Groups</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">{stats.yourGroups}</div>
            <div className="text-gray-600">Your Groups</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats.totalSavings}</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search groups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <select 
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option>All Locations</option>
            <option>Lagos</option>
            <option>Kano</option>
            <option>Kaduna</option>
            <option>Ibadan</option>
            <option>Abuja</option>
            <option>Multi-State</option>
          </select>
          <Link 
            href="/groups/create"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap text-center"
          >
            Create Group
          </Link>
        </div>

        {/* Group Tabs */}
        <div className="flex space-x-4 mb-6">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 border-b-2 font-semibold ${
              activeTab === 'all' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-primary'
            }`}
          >
            All Groups ({stats.totalGroups})
          </button>
          <button 
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 border-b-2 font-semibold ${
              activeTab === 'my' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-600 hover:text-primary'
            }`}
          >
            My Groups ({stats.yourGroups})
          </button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.filter(group => {
            const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || group.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLocation = selectedLocation === 'All Locations' || group.location === selectedLocation;
            const matchesTab = activeTab === 'all' || (activeTab === 'my' && group.isMember);
            return matchesSearch && matchesLocation && matchesTab;
          }).map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-sm border p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  {group.isFeatured && (
                    <span className="inline-block bg-secondary text-white px-2 py-1 rounded text-xs font-medium mb-2">
                      Featured
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{group.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{group.description}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{group.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>📍 {group.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>Members: {group.members.current}/{group.members.max}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Next Order: {group.nextOrder}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Total Savings: </span>
                  <span className="font-semibold text-green-600">{group.totalSavings}</span>
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {group.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              {group.isMember ? (
                <Link 
                  href={{ pathname: `/groups/${group.id}` }}
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors text-center block"
                >
                  View Group Details
                </Link>
              ) : (
                <button className="w-full border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                  Join Group
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}