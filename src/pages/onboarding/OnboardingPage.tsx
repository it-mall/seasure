import React, { useState } from 'react';
import type {
  OnboardingStep,
  OnboardingData,
  PermissionName,
  PermissionStatus,
} from '@/types/onboarding';
import { ProfileSetupStep } from '@/components/onboarding/ProfileSetupStep';
import { ExperienceLevelStep } from '@/components/onboarding/ExperienceLevelStep';
import { TermsAndAgreementsStep } from '@/components/onboarding/TermsAndAgreementsStep';
import { DevicePermissionsStep } from '@/components/onboarding/DevicePermissionsStep';

const STEPS: OnboardingStep[] = ['profile', 'experience', 'terms', 'permissions'];

const INITIAL_PERMISSIONS: Record<PermissionName, PermissionStatus> = {
  camera: 'notSet',
  microphone: 'notSet',
  location: 'notSet',
};

const OnboardingPage: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    profile: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    experience: {
      level: 'beginner',
      yearsOfExperience: 0,
      vesselTypes: [],
    },
    terms: {
      accepted: false,
    },
    permissions: INITIAL_PERMISSIONS,
  });

  const currentStep = STEPS[currentStepIndex];

  const handleSave = (step: OnboardingStep, data: OnboardingData[keyof OnboardingData]) => {
    setOnboardingData((prev: OnboardingData) => ({
      ...prev,
      [step]: data,
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleSaveAndNext = (step: OnboardingStep, data: OnboardingData[keyof OnboardingData]) => {
    handleSave(step, data);
    handleNext();
  };

  const handleSaveAndFinish = (
    step: OnboardingStep,
    data: OnboardingData[keyof OnboardingData]
  ) => {
    handleSave(step, data);
    // Here you would typically submit the entire onboarding data to your backend
    console.log('Onboarding completed:', { ...onboardingData, [step]: data });
    // Navigate to the main app or dashboard
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'profile':
        return (
          <ProfileSetupStep
            onSave={(data) => handleSave('profile', data)}
            onSaveAndNext={(data) => handleSaveAndNext('profile', data)}
            onBack={handleBack}
            initialData={onboardingData.profile}
          />
        );
      case 'experience':
        return (
          <ExperienceLevelStep
            onSave={(data) => handleSave('experience', data)}
            onSaveAndNext={(data) => handleSaveAndNext('experience', data)}
            onBack={handleBack}
            initialData={onboardingData.experience}
          />
        );
      case 'terms':
        return (
          <TermsAndAgreementsStep
            onSave={(data) => handleSave('terms', data)}
            onSaveAndNext={(data) => handleSaveAndNext('terms', data)}
            onBack={handleBack}
            initialAccepted={onboardingData.terms.accepted}
          />
        );
      case 'permissions':
        return (
          <DevicePermissionsStep
            onSave={(data) => handleSave('permissions', data)}
            onSaveAndFinish={(data) => handleSaveAndFinish('permissions', data)}
            onBack={handleBack}
            initialPermissions={onboardingData.permissions}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {STEPS.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStepIndex
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 capitalize">
                    {step}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      index < currentStepIndex ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step content */}
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingPage;
