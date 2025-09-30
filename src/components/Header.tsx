// src/components/Header.tsx
import React, { useState } from 'react';
import { User } from '../types';

interface HeaderProps {
  currentUser: User;
  onNavigate: (page: string) => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentUser, onNavigate, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    // You might want to redirect to home or login page
    onNavigate('home');
  };

  const userInitial = currentUser.username?.charAt(0).toUpperCase() || 'U';

  return (
    <header className="gradient-bg text-white shadow-lg sticky top-0 z-40">
      {/* ... rest of the header JSX ... */}
      
      {/* Update the logout buttons to use handleLogout */}
      <button 
        onClick={handleLogout}
        className="hidden md:block bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 shadow-md"
      >
        Logout
      </button>

      {/* ... mobile menu logout button ... */}
      <button 
        onClick={handleLogout}
        className="w-full bg-yellow-400 text-green-900 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 shadow-md"
      >
        Logout
      </button>
    </header>
  );
};

// ... rest of the component remains the same ...