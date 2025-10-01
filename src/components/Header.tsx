// src/components/Header.tsx
import React, { useState } from 'react';
import { User, Page } from '../types';

interface HeaderProps {
  currentUser: User;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onNavigate, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const userInitial = currentUser.username?.charAt(0).toUpperCase() || currentUser.email.charAt(0).toUpperCase();

  const navigationItems: { page: Page; icon: string; label: string }[] = [
    { page: 'dashboard', icon: 'tachometer-alt', label: 'Dashboard' },
    { page: 'products', icon: 'shopping-basket', label: 'Products' },
    { page: 'groups', icon: 'users', label: 'Market Groups' },
    { page: 'group-purchase', icon: 'handshake', label: 'Group Purchase' },
    { page: 'feedback', icon: 'comments', label: 'Feedback' }
  ];

  return (
    <header className="gradient-bg text-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="logo-container cursor-pointer"
            onClick={() => handleNavigation('dashboard')}
          >
            <div className="logo-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h1 className="text-2xl font-bold logo-font">BULK<span className="text-yellow-400">MART</span></h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300 capitalize"
              >
                <i className={`fas fa-${item.icon}`}></i>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold shadow-md">
                {userInitial}
              </div>
              <span className="text-green-200">
                Welcome, {currentUser.username || currentUser.email.split('@')[0]}!
              </span>
            </div>
            
            <button 
              onClick={onLogout}
              className="hidden md:block bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 shadow-md"
            >
              Logout
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 pb-4 border-t border-green-700 pt-4 transition-all duration-300 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}>
          <div className="space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className="w-full text-left flex items-center space-x-3 p-2 rounded-lg hover:text-yellow-300 transition-colors duration-300"
              >
                <i className={`fas fa-${item.icon} text-xl`}></i>
                <span>{item.label}</span>
              </button>
            ))}
            
            <div className="flex items-center space-x-3 p-2 border-t border-green-700 pt-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-green-900 font-bold shadow-md">
                {userInitial}
              </div>
              <span>Welcome, {currentUser.username || currentUser.email.split('@')[0]}!</span>
            </div>
            
            <button 
              onClick={onLogout}
              className="w-full bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 shadow-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Make sure this is the only export and it's a default export
export default Header;