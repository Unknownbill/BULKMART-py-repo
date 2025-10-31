// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart } from 'lucide-react';
import Notifications from './Notifications';
import MobileNavigation from './MobileNavigation';
import type { User, Page } from '@/types';

interface HeaderProps {
  currentUser: User | null;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export default function Header({ currentUser, onNavigate, onLogout }: HeaderProps) {
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Market Groups', href: '/groups' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">BULKGRO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href as any}
                className={`${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Notifications />
            
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-700 hover:text-primary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Desktop Auth Links / User Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {currentUser ? (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onNavigate('dashboard')}
                    className="text-gray-700 hover:text-primary text-sm font-medium transition-colors"
                  >
                    {currentUser.name || currentUser.username || 'Account'}
                  </button>
                  <button
                    onClick={onLogout}
                    className="text-sm text-red-600 hover:underline"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Link 
                    href="/signin" 
                    className="text-gray-700 hover:text-primary text-sm font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link 
                    href="/signup" 
                    className="text-gray-700 hover:text-primary text-sm font-medium transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </header>
  );
}