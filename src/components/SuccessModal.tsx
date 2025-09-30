// src/components/SuccessModal.tsx - Enhanced Version
import React, { useEffect } from 'react';

export type ModalType = 'success' | 'error' | 'warning' | 'info';

interface SuccessModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  type?: ModalType;
  title?: string;
  autoCloseDelay?: number;
  showCloseButton?: boolean;
  actionButtonText?: string;
  onActionClick?: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ 
  isOpen, 
  message, 
  onClose, 
  type = 'success',
  title,
  autoCloseDelay = 3000,
  showCloseButton = true,
  actionButtonText = 'Continue',
  onActionClick
}) => {
  
  const modalConfig = {
    success: {
      icon: 'check-circle',
      color: 'green',
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    error: {
      icon: 'exclamation-circle',
      color: 'red',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    warning: {
      icon: 'exclamation-triangle',
      color: 'yellow',
      iconColor: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    info: {
      icon: 'info-circle',
      color: 'blue',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    }
  };

  const config = modalConfig[type];

  // Auto-close functionality
  useEffect(() => {
    if (isOpen && autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
  }, [isOpen, autoCloseDelay, onClose]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleActionClick = () => {
    if (onActionClick) {
      onActionClick();
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-xl p-6 max-w-md w-full text-center shadow-2xl transform animate-scale-in border-l-4 ${config.borderColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className={`text-6xl mb-4 floating ${config.iconColor}`}>
          <i className={`fas fa-${config.icon}`}></i>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title || (type === 'success' ? 'Success!' : type.charAt(0).toUpperCase() + type.slice(1))}
        </h3>
        
        {/* Message */}
        <p className="text-gray-700 mb-6 leading-relaxed">{message}</p>

        {/* Progress Bar for Auto-Close */}
        {autoCloseDelay > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
            <div 
              className={`h-1 rounded-full transition-all duration-300 ease-linear bg-${config.color}-500`}
              style={{ 
                width: '100%',
                animation: `shrinkWidth ${autoCloseDelay}ms linear forwards`
              }}
            ></div>
          </div>
        )}

        {/* Action Button */}
        <button 
          onClick={handleActionClick}
          className={`w-full bg-${config.color}-600 text-white py-3 rounded-lg font-bold hover:bg-${config.color}-700 transition-colors duration-300 shadow-md flex items-center justify-center`}
        >
          <i className={`fas fa-${type === 'success' ? 'thumbs-up' : type === 'error' ? 'redo' : 'check'} mr-2`}></i>
          {actionButtonText}
        </button>

        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        )}
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes shrinkWidth {
          from { width: 100%; }
          to { width: 0%; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;