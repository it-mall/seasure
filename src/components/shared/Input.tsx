import React from 'react';
import { Mail } from '@/assets/icons';

interface EmailProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  LeftIcon?: React.ReactNode;
}

export const Input: React.FC<EmailProps> = ({
  label,
  error,
  LeftIcon,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const commonInputStyle =
    'w-full px-4 py-3.5 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0077cc] dark:focus:ring-[#00aaff] text-lg text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-150';

  return (
    <div className={containerClassName}>
      {label && (
        <label
          htmlFor={props.id}
          className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5"
        >
          {label}
        </label>
      )}
      <div className="relative flex">
        {LeftIcon && <div className="absolute left-4 top-1/2 -translate-y-1/2 ">{LeftIcon}</div>}
        <input
          {...props}
          type="text"
          className={`${commonInputStyle} ${LeftIcon ? 'pl-12' : 'pl-4'} ${error ? 'border-red-500 dark:border-red-500' : ''} ${className}`}
        />
      </div>
      {error && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};
