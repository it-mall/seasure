import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LinkProps {
  to?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

const linkVariants = {
  default:
    'text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-slate-100 transition-colors',
  primary:
    'font-semibold text-[#0077cc] dark:text-[#00aaff] hover:text-[#0055aa] dark:hover:text-[#0077cc] transition-colors',
};

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = '',
  variant = 'default',
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    // In a real app, you would use react-router-dom's navigate here
    if (to) navigate(to);
  };

  return (
    <a
      href={to || '#'}
      onClick={handleClick}
      className={`${linkVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
};
