// src/app/profile/page.tsx
import Header from '@/components/Header';
import { Page } from '@/types';
import Footer from '@/components/Footer';
import { User, Mail, Phone, MapPin, Shield, Bell, CreditCard } from 'lucide-react';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    location: 'Lagos, Nigeria',
    role: 'Farmer & Buyer',
    joinDate: 'January 2023',
    kycStatus: 'verified' as 'verified' | 'pending' | 'rejected',
  };

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'billing', name: 'Billing & Payments', icon: CreditCard },
  ];

  return (
    <> 
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your profile and account preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-8">
              {/* Profile Summary */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  JD
                </div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
                <div className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                  user.kycStatus === 'verified' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  <Shield className="h-3 w-3" />
                  <span>KYC {user.kycStatus === 'verified' ? 'Verified' : 'Pending'}</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        tab.id === 'personal'
                          ? 'bg-primary-50 text-primary border border-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="card">
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

              <form className="space-y-6">
                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Profile Photo
                  </label>
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                      JD
                    </div>
                    <div className="flex space-x-3">
                      <button
                        type="button"
                        className="btn-primary px-4 py-2 text-sm"
                      >
                        Upload New
                      </button>
                      <button
                        type="button"
                        className="btn-secondary px-4 py-2 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      id="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number</span>
                      </div>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>Location</span>
                      </div>
                    </label>
                    <select
                      id="location"
                      defaultValue="Lagos"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option>Lagos</option>
                      <option>Kano</option>
                      <option>Kaduna</option>
                      <option>Ibadan</option>
                      <option>Abuja</option>
                      <option>Port Harcourt</option>
                    </select>
                  </div>
                </div>

                {/* Business Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        placeholder="Your business name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option>Select business type</option>
                        <option>Individual Farmer</option>
                        <option>Farm Cooperative</option>
                        <option>Agricultural Supplier</option>
                        <option>Agribusiness</option>
                        <option>Wholesale Buyer</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* KYC Status */}
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">KYC Verification</h3>
                      <p className="text-gray-600">
                        {user.kycStatus === 'verified' 
                          ? 'Your identity has been verified' 
                          : 'Complete your KYC verification to access all features'
                        }
                      </p>
                    </div>
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg ${
                      user.kycStatus === 'verified' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      <Shield className="h-5 w-5" />
                      <span className="font-medium">
                        {user.kycStatus === 'verified' ? 'Verified' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  {user.kycStatus !== 'verified' && (
                    <button className="btn-primary mt-4">
                      Complete KYC Verification
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-6 border-t">
                  <button
                    type="submit"
                    className="btn-primary px-8"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="btn-secondary px-8"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}