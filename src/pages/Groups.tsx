// src/pages/Groups.tsx
import React, { useState } from 'react';
import { marketGroups } from '../data/mockData';
import { MarketGroup } from '../types';

const Groups: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [filteredGroups, setFilteredGroups] = useState<MarketGroup[]>(marketGroups);

  const states = ['all', ...Array.from(new Set(marketGroups.map(group => group.location || '')))].filter(s => s !== '');

  const filterGroups = () => {
    let filtered = marketGroups;

    if (selectedState !== 'all') {
      filtered = filtered.filter(group => group.location === selectedState);
    }

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(group =>
        group.name?.toLowerCase().includes(q) ||
        (group.location || '').toLowerCase().includes(q) ||
        (group.specialty || '').toLowerCase().includes(q)
      );
    }

    setFilteredGroups(filtered);
  };

  React.useEffect(() => {
    filterGroups();
  }, [selectedState, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStateFilter = (state: string) => {
    setSelectedState(state);
  };

  const handleJoinGroup = (group: MarketGroup) => {
    // In a real app, this would make an API call
    console.log('Joined group:', group);
  };

  return (
    <section className="min-h-screen gradient-bg-light">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Market Groups</h2>
        <p className="text-gray-600 mb-6">Join agricultural communities and cooperatives to strengthen your business network</p>
        
        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search groups by name, location, or specialty..."
              className="flex-1 px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 form-input"
            />
            <button 
              onClick={filterGroups}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 shadow-md flex items-center"
            >
              <i className="fas fa-search mr-2"></i> Search
            </button>
          </div>

          {/* State Filter */}
          <div>
            <h3 className="font-semibold text-green-900 mb-3">Filter by State:</h3>
            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateFilter(state)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedState === state
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {state === 'all' ? (
                    <>
                      <i className="fas fa-globe-africa mr-2"></i>All States
                    </>
                  ) : (
                    state
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div 
              key={group.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="text-4xl floating"
                    style={{ animationDuration: `${4 + Math.random() * 4}s` }}
                  >
                    {group.image}
                  </div>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full shadow-sm">
                    {group.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-green-900 mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{group.description}</p>
                
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <span className="flex items-center">
                    <i className="fas fa-users mr-1"></i> {group.members} members
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-boxes mr-1"></i> {group.products} products
                  </span>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-gray-500">Est. {group.established}</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    {group.specialty}
                  </span>
                </div>
                
                <button 
                  onClick={() => handleJoinGroup(group)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 flex items-center justify-center shadow-md"
                >
                  <i className="fas fa-user-plus mr-2"></i> Join Group
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="col-span-3 text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-green-900 mb-2">No groups found</h3>
            <p className="text-gray-600">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Groups;