// src/pages/Feedback.tsx
import React, { useState } from 'react';
import { FeedbackForm as FeedbackFormType } from '../types';

interface FeedbackProps {
  onShowSuccess: (message: string) => void;
}

const Feedback: React.FC<FeedbackProps> = ({ onShowSuccess }) => {
  const [formData, setFormData] = useState<FeedbackFormType>({
    name: '',
    email: '',
    category: 'general',
    rating: 5,
    message: '',
    contactPermission: false
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would make an API call
    console.log('Feedback submitted:', formData);
    
    onShowSuccess('Thank you for your feedback! We appreciate your input.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      category: 'general',
      rating: 5,
      message: '',
      contactPermission: false
    });
  };

  const contactInfo = [
    { icon: 'envelope', label: 'Email', value: 'support@bulkmart.com', color: 'green' },
    { icon: 'phone', label: 'Phone', value: '+234 800 123 4567', color: 'blue' },
    { icon: 'map-marker-alt', label: 'Address', value: '123 Agricultural Plaza, Abuja, Nigeria', color: 'yellow' }
  ];

  return (
    <section className="min-h-screen gradient-bg-light">
      <div className="container mx-auto p-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-green-900 mb-2">Feedback & Support</h2>
        <p className="text-gray-600 mb-6">We value your input. Share your experience to help us improve our agricultural marketplace</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-green-900 font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 form-input"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-green-900 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 form-input"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-green-900 font-medium mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500"
                  >
                    <option value="general">General Feedback</option>
                    <option value="technical">Technical Issue</option>
                    <option value="suggestion">Feature Suggestion</option>
                    <option value="complaint">Complaint</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-green-900 font-medium mb-2">
                    Rating: <span className="text-yellow-500">{formData.rating} ⭐</span>
                  </label>
                  <input
                    type="range"
                    name="rating"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>1 (Poor)</span>
                    <span>5 (Excellent)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-green-900 font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-green-50 border border-green-300 rounded-lg focus:outline-none focus:border-green-500 form-input"
                    placeholder="Tell us about your experience or suggestions..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="contactPermission"
                    checked={formData.contactPermission}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-600">
                    I agree to be contacted for follow-up on this feedback
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 shadow-md"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Submit Feedback
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-10 h-10 bg-${contact.color}-100 rounded-full flex items-center justify-center text-${contact.color}-600 mr-3`}>
                      <i className={`fas fa-${contact.icon}`}></i>
                    </div>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-green-600">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">
                <i className="fas fa-lightbulb mr-2"></i>Tips for Good Feedback
              </h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Be specific about your experience</li>
                <li>• Include relevant order numbers</li>
                <li>• Suggest improvements clearly</li>
                <li>• Report bugs with steps to reproduce</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">
                <i className="fas fa-clock mr-2"></i>Response Time
              </h3>
              <p className="text-green-700 text-sm">We typically respond to all feedback within 24-48 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;