// src/app/kyc-verification/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Upload, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function KYCVerificationPage() {
  const verificationSteps = [
    {
      step: 1,
      title: 'Personal Information',
      description: 'Provide your basic personal details',
      status: 'completed'
    },
    {
      step: 2,
      title: 'Identity Verification',
      description: 'Upload government-issued ID',
      status: 'current'
    },
    {
      step: 3,
      title: 'Business Information',
      description: 'Provide business registration details',
      status: 'upcoming'
    },
    {
      step: 4,
      title: 'Bank Verification',
      description: 'Verify your bank account details',
      status: 'upcoming'
    }
  ];

  const requiredDocuments = [
    {
      type: 'government_id',
      name: 'Government Issued ID',
      description: 'International passport, Driver\'s license, or National ID card',
      examples: ['Front and back of your ID card']
    },
    {
      type: 'proof_of_address',
      name: 'Proof of Address',
      description: 'Utility bill or bank statement not older than 3 months',
      examples: ['Recent electricity bill', 'Water bill', 'Bank statement']
    },
    {
      type: 'business_registration',
      name: 'Business Registration',
      description: 'For business accounts only',
      examples: ['CAC certificate', 'Business registration document']
    }
  ];

  return (
    <>
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">KYC Verification</h1>
          <p className="text-gray-600">
            Complete your Know Your Customer verification to unlock full marketplace features
          </p>
        </div>

        {/* Progress Steps */}
        <div className="card mb-8">
          <h2 className="text-xl font-semibold mb-6">Verification Progress</h2>
          
          <div className="space-y-4">
            {verificationSteps.map((step, index) => (
              <div key={step.step} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  step.status === 'completed' ? 'bg-green-100 text-green-600' :
                  step.status === 'current' ? 'bg-primary-100 text-primary-600' :
                  'bg-gray-100 text-gray-400'
                }`}>
                  {step.status === 'completed' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : step.status === 'current' ? (
                    <span className="text-sm font-medium">{step.step}</span>
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${
                    step.status === 'completed' || step.status === 'current' 
                      ? 'text-gray-900' 
                      : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${
                    step.status === 'completed' || step.status === 'current' 
                      ? 'text-gray-600' 
                      : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Upload */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Upload Required Documents</h2>
          
          <div className="space-y-6">
            {requiredDocuments.map((doc) => (
              <div key={doc.type} className="border border-gray-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{doc.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Accepted documents:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {doc.examples.map((example, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Drag and drop your files here or click to browse
                  </p>
                  <p className="text-xs text-gray-500">
                    Supported formats: JPG, PNG, PDF (Max 5MB each)
                  </p>
                  <button className="btn-primary mt-4">
                    Upload Documents
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Front of ID</span>
                      <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>id_front.jpg</span>
                      <span className="text-xs text-gray-500">2.1 MB</span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Back of ID</span>
                      <div className="flex items-center space-x-2 text-red-600">
                        <XCircle className="h-4 w-4" />
                        <span className="text-xs">Pending</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">No file uploaded</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-6 border-t mt-6">
            <button className="btn-primary px-8">
              Submit for Review
            </button>
            <button className="btn-secondary px-8">
              Save Draft
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> Verification typically takes 1-2 business days. 
              You'll receive an email notification once your verification is complete.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}