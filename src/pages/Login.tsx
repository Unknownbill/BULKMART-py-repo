// src/pages/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

interface LoginProps {
  onLogin: (page: string) => void;
  onShowSuccess: (message: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onShowSuccess }) => {
  const { login } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoginMode) {
      if (!formData.username) {
        onShowSuccess('Please enter a username');
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        onShowSuccess('Passwords do not match');
        return;
      }
    }
    
    // Simulate authentication
    const user = {
      email: formData.email,
      username: formData.username || formData.email.split('@')[0]
    };
    
    login(user);
    onShowSuccess(isLoginMode ? 'Login successful!' : 'Account created successfully!');
    onLogin('dashboard');
  };

  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <section className="auth-container gradient-bg relative">
      {/* Floating elements */}
      <div className="floating absolute top-1/4 left-10 text-6xl opacity-10">🍚</div>
      <div className="floating absolute top-1/3 right-20 text-5xl opacity-15" style={{ animationDelay: '1s' }}>🫘</div>
      <div className="floating absolute bottom-1/4 left-1/4 text-4xl opacity-10" style={{ animationDelay: '2s' }}>🍠</div>

      <div className="auth-card">
        {/* Header */}
        <div className="bg-green-900 p-6 text-center">
          <div className="logo-container justify-center mb-2">
            <div className="logo-icon text-4xl">
              <i className="fas fa-seedling"></i>
            </div>
            <h1 className="text-2xl font-bold text-white logo-font">BULK<span className="text-yellow-400">MART</span></h1>
          </div>
          <p className="text-green-200">
            {isLoginMode 
              ? "Welcome Back to Africa's Agricultural Marketplace" 
              : "Join Africa's Agricultural Marketplace"
            }
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {!isLoginMode && (
            <div>
              <label className="block text-green-900 font-medium mb-2">
                <i className="fas fa-user mr-2"></i>Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-900 focus:outline-none focus:border-yellow-400 form-input"
                placeholder="Enter your username"
              />
            </div>
          )}

          <div>
            <label className="block text-green-900 font-medium mb-2">
              <i className="fas fa-envelope mr-2"></i>Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-900 focus:outline-none focus:border-yellow-400 form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-green-900 font-medium mb-2">
              <i className="fas fa-lock mr-2"></i>Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-900 focus:outline-none focus:border-yellow-400 form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-green-900 font-medium mb-2">
                <i className="fas fa-lock mr-2"></i>Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg text-green-900 focus:outline-none focus:border-yellow-400 form-input"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-green-600 hover:text-green-800">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 py-3 rounded-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-lg btn-glow"
          >
            {isLoginMode ? 'Sign In' : 'Sign Up'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={toggleAuthMode}
              className="text-green-600 hover:text-green-800 transition-colors duration-200"
            >
              {isLoginMode ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;