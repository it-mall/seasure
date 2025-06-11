import React from 'react';
import { CheckSquare, Square } from '@/assets/icons';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  children,
  className = '',
  disabled = false,
  error,
}) => {
  return (
    <div className={className}>
      <label className="flex items-center space-x-3 text-sm text-gray-600 dark:text-slate-400">
        <button
          type="button"
          onClick={() => !disabled && onChange(!checked)}
          className={`focus:outline-none ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          disabled={disabled}
          aria-checked={checked}
          role="checkbox"
        >
          {checked ? (
            <CheckSquare size={24} className="text-[#0077cc] dark:text-[#00aaff]" />
          ) : (
            <Square size={24} className="text-gray-400 dark:text-slate-500" />
          )}
        </button>
        {children && <div>{children}</div>}
      </label>
      {error && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};
