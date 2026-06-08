import React, { useState } from 'react';
import type { TermsAndAgreementsStepProps } from '../../types/onboarding';
import { FileText, CheckSquare, Square } from '../../assets/icons';

export const TermsAndAgreementsStep: React.FC<TermsAndAgreementsStepProps> = ({
  onSave,
  onSaveAndNext,
  onBack,
  initialAccepted,
}) => {
  const [accepted, setAccepted] = useState(initialAccepted);
  const [error, setError] = useState<string>('');

  const handleSave = () => {
    if (!accepted) {
      setError('You must accept the Terms of Service to continue.');
      return;
    }
    onSave(accepted);
  };

  const handleSaveAndNext = () => {
    if (!accepted) {
      setError('You must accept the Terms of Service to continue.');
      return;
    }
    onSaveAndNext(accepted);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Terms & Agreements</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-start mb-6">
          <FileText size={24} className="text-blue-500 mr-3 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              SeaSure Terms of Service
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Please review our terms of service carefully. By accepting, you agree to:
            </p>
          </div>
        </div>

        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>1. Use SeaSure's services in accordance with all applicable laws and regulations.</p>
          <p>
            2. Provide accurate and up-to-date information about your vessel and maintenance
            activities.
          </p>
          <p>3. Follow safety guidelines and best practices for boat maintenance.</p>
          <p>4. Respect the privacy and security of your account and data.</p>
          <p>
            5. Acknowledge that SeaSure provides guidance but is not responsible for maintenance
            outcomes.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => {
              setAccepted(!accepted);
              if (error) setError('');
            }}
            className="flex items-center space-x-3 text-left w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            {accepted ? (
              <CheckSquare size={24} className="text-blue-500" />
            ) : (
              <Square size={24} className="text-gray-400" />
            )}
            <span className="text-gray-700 dark:text-gray-200">
              I have read and agree to the Terms of Service
            </span>
          </button>
        </div>

        {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          Back
        </button>
        <div className="space-x-4">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Save
          </button>
          <button
            onClick={handleSaveAndNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};
