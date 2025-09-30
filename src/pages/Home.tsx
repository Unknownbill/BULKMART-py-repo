// src/pages/Home.tsx
import React from 'react';

interface HomeProps {
  onGetStarted: () => void;
}

const Home: React.FC<HomeProps> = ({ onGetStarted }) => {
  return (
    <section className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="animate-pulse-slow w-full h-full bg-gradient-to-r from-green-400 to-yellow-200 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="floating absolute top-1/4 left-10 text-6xl opacity-20">🌱</div>
      <div className="floating absolute top-1/3 right-20 text-5xl opacity-30" style={{ animationDelay: '1s' }}>🌽</div>
      <div className="floating absolute bottom-1/4 left-1/4 text-4xl opacity-25" style={{ animationDelay: '2s' }}>🍅</div>
      <div className="floating absolute top-1/2 right-1/3 text-6xl opacity-20" style={{ animationDelay: '3s' }}>🥦</div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Enhanced Logo */}
        <div className="logo-container mb-8">
          <div className="logo-icon text-6xl">
            <i className="fas fa-seedling"></i>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white logo-font mb-2">
            BULK<span className="text-yellow-400">MART</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-2xl leading-relaxed">
          Africa's Premier Agricultural Bulk Marketplace
          <br />
          <span className="text-yellow-300 font-semibold">Connecting Farmers, Suppliers & Buyers Across Nigeria</span>
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex mb-16">
          <button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-2xl btn-glow"
          >
            Get Started
          </button>
          
          <button className="border-2 border-yellow-400 text-yellow-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-green-900 transition-all duration-300 shadow-lg">
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl">
          {[
            { number: '10K+', label: 'Farmers' },
            { number: '5K+', label: 'Buyers' },
            { number: '200+', label: 'Market Groups' },
            { number: '36', label: 'States Covered' }
          ].map((stat, index) => (
            <div key={index} className="bg-green-800/50 backdrop-blur-sm p-4 rounded-xl border border-green-600 text-center">
              <div className="stat-number">{stat.number}</div>
              <p className="text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl">
          {[
            { icon: 'handshake', title: 'B2B Marketplace', description: 'Connect directly with agricultural businesses across Nigeria.' },
            { icon: 'map-marked-alt', title: 'Nationwide Reach', description: 'Access agricultural products from all 36 states of Nigeria.' },
            { icon: 'boxes', title: 'Bulk Purchases', description: 'Leverage group buying power to get better prices.' }
          ].map((feature, index) => (
            <div key={index} className="feature-card bg-green-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-600">
              <div className={`text-4xl mb-2 floating african-${['yellow', 'green', 'orange'][index]}`} 
                   style={{ animationDuration: `${4 + index}s` }}>
                <i className={`fas fa-${feature.icon}`}></i>
              </div>
              <h3 className="text-yellow-300 font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-green-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Home;