// src/components/Chat/ChatRoom.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Mic, Smile } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
  isOwn: boolean;
  type: 'text' | 'image' | 'file';
}

interface ChatRoomProps {
  roomId: string;
  currentUser: string;
}

export default function ChatRoom({ roomId, currentUser }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const ws = useRef<WebSocket | null>(null);

  // Mock initial messages
  const initialMessages: Message[] = [
    {
      id: '1',
      text: 'Hello! I\'m interested in your premium rice.',
      sender: 'Buyer123',
      timestamp: new Date(Date.now() - 3600000),
      isOwn: false,
      type: 'text'
    },
    {
      id: '2',
      text: 'Welcome! We have excellent quality rice available. What quantity are you looking for?',
      sender: currentUser,
      timestamp: new Date(Date.now() - 3500000),
      isOwn: true,
      type: 'text'
    },
    {
      id: '3',
      text: 'I need about 20 bags. What\'s the best price you can offer?',
      sender: 'Buyer123',
      timestamp: new Date(Date.now() - 3400000),
      isOwn: false,
      type: 'text'
    }
  ];

  useEffect(() => {
    setMessages(initialMessages);

    // WebSocket connection
    const connectWebSocket = () => {
      // In production, this would be your WebSocket server URL
      const socketUrl = `ws://localhost:3001/chat/${roomId}`;
      
      try {
        ws.current = new WebSocket(socketUrl);
        
        ws.current.onopen = () => {
          console.log('WebSocket connected');
          setIsConnected(true);
        };

        ws.current.onmessage = (event) => {
          const data = JSON.parse(event.data);
          if (data.type === 'message') {
            setMessages(prev => [...prev, {
              id: Date.now().toString(),
              text: data.text,
              sender: data.sender,
              timestamp: new Date(),
              isOwn: data.sender === currentUser,
              type: 'text'
            }]);
          }
        };

        ws.current.onclose = () => {
          console.log('WebSocket disconnected');
          setIsConnected(false);
          // Attempt to reconnect after 5 seconds
          setTimeout(connectWebSocket, 5000);
        };

        ws.current.onerror = (error) => {
          console.error('WebSocket error:', error);
          setIsConnected(false);
        };
      } catch (error) {
        console.error('Failed to connect WebSocket:', error);
      }
    };

    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [roomId, currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    if (!newMessage.trim() || !ws.current || !isConnected) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: currentUser,
      timestamp: new Date(),
      isOwn: true,
      type: 'text'
    };

    // Send via WebSocket
    ws.current.send(JSON.stringify({
      type: 'message',
      text: newMessage,
      sender: currentUser,
      roomId
    }));

    // Optimistically add to UI
    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border">
      {/* Chat Header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {currentUser.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Buyer123</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  isConnected ? 'bg-green-500' : 'bg-gray-400'
                }`}></div>
                <span className="text-sm text-gray-500">
                  {isConnected ? 'Online' : 'Connecting...'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
              {!message.isOwn && (
                <div className="text-xs text-gray-500 mb-1 ml-1">
                  {message.sender}
                </div>
              )}
              <div
                className={`rounded-lg p-3 ${
                  message.isOwn
                    ? 'bg-primary text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.isOwn ? 'text-primary-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <div className="flex space-x-1">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Smile className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>

          <div className="flex space-x-1">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Mic className="h-5 w-5" />
            </button>
            <button
              onClick={sendMessage}
              disabled={!newMessage.trim() || !isConnected}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Connection Status */}
        <div className="mt-2 text-xs text-gray-500 text-center">
          {isConnected ? (
            <span className="text-green-600">✓ Connected</span>
          ) : (
            <span className="text-orange-600">⏳ Connecting to chat...</span>
          )}
        </div>
      </div>
    </div>
  );
}