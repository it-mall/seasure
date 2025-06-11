import React from 'react';
import { Logo } from '@/components/shared/Logo';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-0.5 w-16',
  md: 'h-1 w-32',
  lg: 'h-1.5 w-48',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  return (
    <div className={`loading-bar ${sizeClasses[size]} ${className}`}>
      <div className="loading-bar-progress" role="status" aria-label="Loading" />
    </div>
  );
};

export const PageLoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="mb-8">
        <Logo iconSize={64} showText={true} />
      </div>
      <LoadingSpinner size="lg" className="text-white" />
    </div>
  );
};
