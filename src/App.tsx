// src/App.tsx
import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { Header } from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Groups from './pages/Groups';
import GroupPurchase from './pages/GroupPurchase';
import Feedback from './pages/Feedback';
import SuccessModal from './components/SuccessModal';
import './styles/globals.css';

type Page = 'home' | 'login' | 'dashboard' | 'products' | 'groups' | 'group-purchase' | 'feedback';

const App: React.FC = () => {
  const { currentUser, isLoading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const showPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const showSuccessModal = (message: string) => {
    setModalMessage(message);
    setShowModal(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-bg-light flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-green-600 mb-4 floating">
            <i className="fas fa-seedling"></i>
          </div>
          <h2 className="text-2xl font-bold text-green-900">BULKMART</h2>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {currentUser && (
        <Header 
          currentUser={currentUser} 
          onNavigate={showPage} 
        />
      )}
      
      <main>
        {currentPage === 'home' && <Home onGetStarted={() => showPage('login')} />}
        {currentPage === 'login' && (
          <Login 
            onLogin={showPage} 
            onShowSuccess={showSuccessModal}
          />
        )}
        {currentPage === 'dashboard' && <Dashboard onNavigate={showPage} />}
        {currentPage === 'products' && <Products />}
        {currentPage === 'groups' && <Groups />}
        {currentPage === 'group-purchase' && <GroupPurchase />}
        {currentPage === 'feedback' && <Feedback onShowSuccess={showSuccessModal} />}
      </main>

      <SuccessModal 
        isOpen={showModal}
        message={modalMessage}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default App;