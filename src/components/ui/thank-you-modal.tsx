import React from "react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-8 text-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>

          {/* Success Icon with Sparkles */}
          <div className="relative flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Sparkles */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full opacity-80"></div>
              <div className="absolute -top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Thank You Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'll be in touch as soon as possible.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">OT</span>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">Trusted by OT Security Teams</span>
          </div>

          {/* Additional Message */}
          <p className="text-sm text-gray-500">
            Our team will reach out within 24 hours to schedule your personalized demo.
          </p>
        </div>
      </div>
    </div>
  );
};
