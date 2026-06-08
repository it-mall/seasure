import type { ComponentType, ReactElement, ChangeEvent } from 'react';
import type { IconProps } from '../assets/icons/IconPlaceholder';

export interface OnboardingSection {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<any>;
  isComplete: boolean;
  estimatedTime: string;
  isRequired: boolean;
  path: string;
}

export interface OnboardingProgress {
  completedSteps: number;
  totalSteps: number;
  percentage: number;
  estimatedTimeRemaining: string;
}

export interface ProfileData {
  fullName: string;
  address: string;
  mobileNumber: string;
  email: string;
  dateOfBirth: string;
  primaryWaterway: string;
}

export type ExperienceLevelId = 'new' | 'novice' | 'intermediate' | 'expert';

export interface ExperienceLevel {
  id: ExperienceLevelId;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  seaSureBenefit: string;
  icon: ComponentType<any>;
}

export type PermissionName = 'camera' | 'microphone' | 'location';
export type PermissionStatus = 'allowed' | 'denied' | 'notSet';

export interface DevicePermissionsState {
  camera: PermissionStatus;
  microphone: PermissionStatus;
  location: PermissionStatus;
}

export interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  icon?: ComponentType<IconProps>;
  placeholder?: string;
  autoComplete?: string;
}

export interface ProfileSetupStepProps {
  onSave: (data: ProfileData) => void;
  onSaveAndNext: (data: ProfileData) => void;
  onBack: () => void;
  initialData: ProfileData;
}

export interface ExperienceLevelStepProps {
  onSave: (levelId: ExperienceLevelId) => void;
  onSaveAndNext: (levelId: ExperienceLevelId) => void;
  onBack: () => void;
  initialSelection: ExperienceLevelId | null;
}

export interface TermsAndAgreementsStepProps {
  onSave: (accepted: boolean) => void;
  onSaveAndNext: (accepted: boolean) => void;
  onBack: () => void;
  initialAccepted: boolean;
}

export interface DevicePermissionsStepProps {
  onSave: (permissions: DevicePermissionsState) => void;
  onSaveAndFinish: (permissions: DevicePermissionsState) => void;
  onBack: () => void;
  initialPermissions: DevicePermissionsState;
}

export interface OnboardingProgressDisplayProps {
  progressData: OnboardingProgress;
  sections: OnboardingSection[];
  activeSectionId: string | null;
}

export interface OnboardingSectionCardProps {
  section: OnboardingSection;
  onClick: () => void;
  isActive: boolean;
}

export interface PermissionToggleProps {
  permissionName: PermissionName;
  title: string;
  description: string;
  icon: ComponentType<any>;
  status: PermissionStatus;
  onToggle: () => void;
}

export type OnboardingStep = 'profile' | 'experience' | 'terms' | 'permissions';

export interface ExperienceData {
  level: 'beginner' | 'intermediate' | 'expert';
  yearsOfExperience: number;
  vesselTypes: string[];
}

export interface TermsData {
  accepted: boolean;
}

export type PermissionsData = {
  [K in PermissionName]: PermissionStatus;
};

export interface OnboardingData {
  profile: ProfileData;
  experience: ExperienceData;
  terms: TermsData;
  permissions: PermissionsData;
}
