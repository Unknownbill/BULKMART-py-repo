// src/app/messages/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Page } from '@/types';
import { Search, Send, MoreVertical } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  preview: string;
  time: string;
  unread: boolean;
  group?: string;
}

interface Conversation {
  id: string;
  sender: string;
  messages: {
    id: string;
    text: string;
    time: string;
    isOwn: boolean;
  }[];
}

export default function MessagesPage() {
  const messages: Message[] = [
    {
      id: '1',
      sender: 'Lagos Farmers Cooperative',
      preview: 'Your order for premium rice has been confirmed and will be shipped tomorrow...',
      time: '2 min ago',
      unread: true,
      group: 'Group'
    },
    {
      id: '2',
      sender: 'Kano Agricultural Alliance',
      preview: 'New group deal available for NPK fertilizer. 30% discount for orders above 50 units...',
      time: '1 hour ago',
      unread: true
    },
    {
      id: '3',
      sender: 'Agricultural Supplies Ltd',
      preview: 'Thank you for your purchase. Your delivery is scheduled for Friday...',
      time: '3 hours ago',
      unread: false
    },
    {
      id: '4',
      sender: 'Southwest Rice Farmers',
      preview: 'Reminder: Group order deadline is tomorrow. Please confirm your commitment...',
      time: '1 day ago',
      unread: false,
      group: 'Group'
    },
    {
      id: '5',
      sender: 'BULKGRO Support',
      preview: 'Your KYC verification has been approved. You now have full access to all features...',
      time: '2 days ago',
      unread: false
    }
  ];

  const activeConversation: Conversation = {
    id: '1',
    sender: 'Lagos Farmers Cooperative',
    messages: [
      {
        id: '1',
        text: 'Hello! I\'m interested in joining your group purchase for premium rice.',
        time: '10:30 AM',
        isOwn: true
      },
      {
        id: '2',
        text: 'Welcome! We\'re glad to have you. The current group price is ₦28,000 per 50kg bag with a minimum order of 10 bags.',
        time: '10:32 AM',
        isOwn: false
      },
      {
        id: '3',
        text: 'That sounds great. I\'d like to order 15 bags. What\'s the delivery timeline?',
        time: '10:35 AM',
        isOwn: true
      },
      {
        id: '4',
        text: 'Excellent choice! Delivery takes 3-5 business days within Lagos. Your order for 15 bags at ₦420,000 has been confirmed.',
        time: '10:38 AM',
        isOwn: false
      },
      {
        id: '5',
        text: 'Your order will be shipped tomorrow and you\'ll receive tracking information.',
        time: '2 min ago',
        isOwn: false
      }
    ]
  };

  return (
    <>
      <Header currentUser={null} onNavigate={function (page: Page): void {
        throw new Error('Function not implemented.');
      } } onLogout={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
          <p className="text-gray-600">Communicate with sellers and group members</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="card h-full flex flex-col">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search messages..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              {/* Messages List */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      message.id === activeConversation.id
                        ? 'bg-primary-50 border border-primary'
                        : 'hover:bg-gray-50'
                    } ${message.unread ? 'border-l-4 border-l-primary' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{message.sender}</h3>
                        {message.group && (
                          <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                            Group
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-gray-500">{message.time}</span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <p className={`text-sm ${
                      message.unread ? 'text-gray-900 font-medium' : 'text-gray-600'
                    } line-clamp-2`}>
                      {message.preview}
                    </p>
                    {message.unread && (
                      <div className="flex justify-end mt-2">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                          New
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="card h-full flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{activeConversation.sender}</h2>
                    <p className="text-sm text-gray-600">Online - Last seen 2 minutes ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-secondary text-white px-2 py-1 rounded text-xs font-medium">
                      Group
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {activeConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-4 ${
                        message.isOwn
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isOwn ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="bg-primary text-white p-3 rounded-lg hover:bg-primary-700 transition-colors">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}