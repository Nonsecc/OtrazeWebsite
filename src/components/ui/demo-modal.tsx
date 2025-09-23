import React, { useState } from "react";
import { ThankYouModal } from "./thank-you-modal";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "Germany",
    phone: "",
    company: "",
    updates: false,
    blogDigest: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    // Filter phone number input to only allow numbers and common phone characters
    if (field === 'phone' && typeof value === 'string') {
      value = value.replace(/[^\d\s\+\-\(\)]/g, '');
    }
    
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear errors when user starts typing
    if (field === 'email' && emailError) {
      setEmailError('');
    }
    
    if (formErrors[field]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Business email validation
  const isValidBusinessEmail = (email: string) => {
    const personalEmailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'protonmail.com', 'yandex.com', 'mail.ru', 'zoho.com',
      'gmx.com', 'web.de', 't-online.de', 'freenet.de', 'arcor.de'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    return domain && !personalEmailDomains.includes(domain);
  };

  const [emailError, setEmailError] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNext = () => {
    const errors: {[key: string]: string} = {};
    
    // Validate step 1
    if (currentStep === 1) {
      if (!formData.firstName) errors.firstName = 'First name is required';
      if (!formData.lastName) errors.lastName = 'Last name is required';
      if (!formData.email) {
        setEmailError('Please enter your work email');
        return;
      }
      
      if (!isValidBusinessEmail(formData.email)) {
        setEmailError('Please use your business email address (no Gmail, Yahoo, etc.)');
        return;
      }
      
      setEmailError('');
      setFormErrors(errors);
      
      if (Object.keys(errors).length > 0) {
        return;
      }
    }
    
    // Validate step 2
    if (currentStep === 2) {
      if (!formData.phone) {
        errors.phone = 'Phone number is required';
      } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
        errors.phone = 'Phone number can only contain numbers, spaces, +, -, (, )';
      }
      if (!formData.company) errors.company = 'Company is required';
      
      setFormErrors(errors);
      
      if (Object.keys(errors).length > 0) {
        return;
      }
    }
    
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
    setShowThankYou(true);
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4 overflow-hidden">
        <div className="flex h-[600px]">
          {/* Left Panel - Form */}
          <div className="flex-1 p-8 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-2xl font-bold text-blue-600">OTraze.</div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="text-sm text-blue-600 font-medium mb-1">GET A PERSONALIZED DEMO</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">See OTraze in action</h2>
            
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="text-sm text-gray-500 mb-1">Step {currentStep} of 3</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 flex flex-col">
              {currentStep === 1 && (
                <div className="space-y-4 flex-1">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email*
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        emailError ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-600">{emailError}</p>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4 flex-1">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="Germany">🇩🇪 Germany</option>
                        <option value="United States">🇺🇸 United States</option>
                        <option value="United Kingdom">🇬🇧 United Kingdom</option>
                        <option value="France">🇫🇷 France</option>
                        <option value="Netherlands">🇳🇱 Netherlands</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      placeholder="+49 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company*
                    </label>
                    <input
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.company ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {formErrors.company && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.company}</p>
                    )}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4 flex-1">
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.updates}
                        onChange={(e) => handleInputChange("updates", e.target.checked)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        Keep me updated about OTraze product releases, industry news, and events (You can unsubscribe at any time)
                      </span>
                    </label>
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.blogDigest}
                        onChange={(e) => handleInputChange("blogDigest", e.target.checked)}
                        className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        Subscribe me to the OTraze blog digest emails
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 space-y-3">
                <button
                  onClick={currentStep === 3 ? handleSubmit : handleNext}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {currentStep === 3 ? "Get a demo" : "Next"}
                </button>
                
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="w-full text-blue-600 py-2 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>←</span>
                    <span>Go back</span>
                  </button>
                )}

                <p className="text-xs text-gray-500 text-center">
                  For information about how OTraze handles your personal data, please see our{" "}
                  <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel - Benefits */}
          <div className="w-80 bg-blue-50 p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                In your 30 minute personal demo, you will learn how OTraze:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-900 text-sm">
                    Maps your OT environment and provides complete asset visibility
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-900 text-sm">
                    Reveals attack paths and identifies critical vulnerabilities
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-900 text-sm">
                    Prioritizes risks using actionable insights for your infrastructure
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-blue-900 font-bold text-sm mb-2">
                Trusted by leading OT security teams
              </p>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-900 font-bold text-sm">
                Enterprise Ready
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      <ThankYouModal 
        isOpen={showThankYou} 
        onClose={handleCloseThankYou} 
      />
    </div>
  );
};
