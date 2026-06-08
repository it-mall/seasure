import React, { useState } from 'react';
import type { ProfileSetupStepProps, ProfileData } from '../../types/onboarding';
import { Input } from '../shared/Input';
import { UserCircle, Mail, Phone, MapPin, Calendar, Anchor } from '../../assets/icons';

const initialProfileData: ProfileData = {
  fullName: '',
  address: '',
  mobileNumber: '',
  email: '',
  dateOfBirth: '',
  primaryWaterway: '',
};

export const ProfileSetupStep: React.FC<ProfileSetupStepProps> = ({
  onSave,
  onSaveAndNext,
  onBack,
  initialData = initialProfileData,
}) => {
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [errors, setErrors] = useState<Partial<ProfileData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ProfileData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ProfileData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      newErrors.mobileNumber = 'Invalid mobile number format (e.g., +12223334444).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave(formData);
    }
  };

  const handleSaveAndNext = () => {
    if (validate()) {
      onSaveAndNext(formData);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Profile Setup</h2>
      <form className="space-y-4">
        <Input
          id="fullName"
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          icon={UserCircle}
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={Mail}
          autoComplete="email"
        />
        <Input
          id="mobileNumber"
          name="mobileNumber"
          label="Mobile Number"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleChange}
          error={errors.mobileNumber}
          icon={Phone}
          autoComplete="tel"
        />
        <Input
          id="address"
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleChange}
          icon={MapPin}
          autoComplete="street-address"
        />
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          label="Date of Birth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          icon={Calendar}
        />
        <Input
          id="primaryWaterway"
          name="primaryWaterway"
          label="Primary Waterway"
          value={formData.primaryWaterway}
          onChange={handleChange}
          icon={Anchor}
        />
      </form>
      <div className="mt-8 flex justify-between">
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
