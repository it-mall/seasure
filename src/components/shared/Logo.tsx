import React from 'react';
import { Link } from './Link';
import { LifeBuoy } from '@/assets/icons';

interface LogoProps {
  to?: string;
  className?: string;
  iconSize?: number;
  showText?: boolean;
  variant?: 'default' | 'primary';
}

export const Logo: React.FC<LogoProps> = ({
  to = '/',
  className = '',
  iconSize = 48,
  showText = true,
  variant = 'default',
}) => {
  const logoContent = (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <LifeBuoy size={iconSize} className="text-[#1B365D] dark:text-sky-400" />
      {showText && <h1 className="text-4xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1>}
    </div>
  );

  if (to) {
    return (
      <Link to={to} variant={variant} className="hover:no-underline">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};
