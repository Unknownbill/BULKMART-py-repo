// src/App.tsx
import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Groups from './pages/Groups';
import GroupPurchase from './pages/GroupPurchase';
import Feedback from './pages/Feedback';
import SuccessModal from './components/SuccessModal';
import { User, Page } from './types';
import './styles/globals.css';

const App: React.FC = () => {
  const { currentUser, isLoading, login, logout } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize app and handle authentication state
  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (currentUser) {
          setCurrentPage('dashboard');
        }
      } catch (error) {
        console.error('App initialization error:', error);
        showSuccessModal('Welcome to BULKMART!');
      } finally {
        setIsInitialized(true);
      }
    };

    if (!isLoading) {
      initializeApp();
    }
  }, [currentUser, isLoading]);

  const showPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const showSuccessModal = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const handleLogin = (user: User) => {
    login(user);
    showSuccessModal('Login successful!');
    showPage('dashboard');
  };

  const handleLogout = () => {
    logout();
    showPage('home');
    showSuccessModal('You have been logged out successfully.');
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalMessage('');
  };

  // Show loading screen while initializing
  if (isLoading || !isInitialized) {
    return (
      <div className="min-h-screen gradient-bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-green-600 mb-4 floating">
            <i className="fas fa-seedling"></i>
          </div>
          <h2 className="text-3xl font-bold text-green-900 mb-2 logo-font">
            BULK<span className="text-yellow-400">MART</span>
          </h2>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <p className="text-gray-600 mt-4">Loading African Agricultural Marketplace...</p>
        </div>
      </div>
    );
  }

  // Render appropriate page based on authentication and current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onGetStarted={() => showPage('login')} />;
      
      case 'login':
        return (
          <Login 
            onLogin={handleLogin}
            onShowSuccess={showSuccessModal}
          />
        );
      
      case 'dashboard':
        if (!currentUser) {
          showPage('login');
          return null;
        }
        return <Dashboard onNavigate={showPage} />;
      
      case 'products':
        if (!currentUser) {
          showPage('login');
          return null;
        }
        return <Products />;
      
      case 'groups':
        if (!currentUser) {
          showPage('login');
          return null;
        }
        return <Groups />;
      
      case 'group-purchase':
        if (!currentUser) {
          showPage('login');
          return null;
        }
        return <GroupPurchase />;
      
      case 'feedback':
        if (!currentUser) {
          showPage('login');
          return null;
        }
        return <Feedback onShowSuccess={showSuccessModal} />;
      
      default:
        return <Home onGetStarted={() => showPage('login')} />;
    }
  };

  return (
    <div className="App">
      {/* Header - Only show when user is authenticated and not on home/login pages */}
      {currentUser && currentPage !== 'home' && currentPage !== 'login' && (
        <Header 
          currentUser={currentUser} 
          onNavigate={showPage}
          onLogout={handleLogout}
        />
      )}
      
      <main className={!currentUser || currentPage === 'home' || currentPage === 'login' ? '' : 'pt-16'}>
        {renderCurrentPage()}
      </main>

      {/* Global Success Modal */}
      <SuccessModal 
        isOpen={showModal}
        message={modalMessage}
        onClose={handleModalClose}
        autoCloseDelay={4000}
      />
    </div>
  );
};

export default App;