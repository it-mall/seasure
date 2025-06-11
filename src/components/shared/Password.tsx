import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock } from '@/assets/icons';

interface PasswordProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  containerClassName?: string;
  showStrengthIndicator?: boolean;
  onStrengthChange?: (strength: number) => void;
}

export const Password: React.FC<PasswordProps> = ({
  label,
  error,
  className = '',
  containerClassName = '',
  showStrengthIndicator = false,
  onStrengthChange,
  value,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (pass.match(/[A-Z]/)) strength += 1;
    if (pass.match(/[a-z]/)) strength += 1;
    if (pass.match(/[0-9]/)) strength += 1;
    if (pass.match(/[^A-Za-z0-9]/)) strength += 1;
    setPasswordStrength(strength);
    onStrengthChange?.(strength);
  };

  useEffect(() => {
    if (showStrengthIndicator && typeof value === 'string') {
      checkPasswordStrength(value);
    }
  }, [value, showStrengthIndicator]);

  const getPasswordStrengthColor = () => {
    if (!value || typeof value !== 'string' || value.length === 0)
      return 'bg-gray-200 dark:bg-slate-600';
    switch (passwordStrength) {
      case 0:
      case 1:
      case 2:
        return 'bg-red-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
      case 5:
        return 'bg-green-500';
      default:
        return 'bg-gray-200 dark:bg-slate-600';
    }
  };

  const passwordStrengthLabel = () => {
    if (!value || typeof value !== 'string' || value.length === 0) return 'Enter password';
    switch (passwordStrength) {
      case 0:
      case 1:
      case 2:
        return 'Weak';
      case 3:
        return 'Medium';
      case 4:
      case 5:
        return 'Strong';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (showStrengthIndicator) {
      checkPasswordStrength(e.target.value);
    }
    onChange?.(e);
  };

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
      <div className="relative">
        <Lock
          size={22}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none"
        />
        <input
          {...props}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          className={`${commonInputStyle} pl-12 ${error ? 'border-red-500 dark:border-red-500' : ''} ${className}`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-200 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
        </button>
      </div>
      {showStrengthIndicator && value && typeof value === 'string' && value.length > 0 && (
        <div className="mt-2 space-y-1">
          <div className="h-1.5 w-full bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${getPasswordStrengthColor()}`}
              style={{ width: `${(passwordStrength / 5) * 100}%` }}
            />
          </div>
          <p
            className={`text-sm ${
              passwordStrength <= 2
                ? 'text-red-500'
                : passwordStrength === 3
                  ? 'text-yellow-500'
                  : 'text-green-500'
            }`}
          >
            {passwordStrengthLabel()}
          </p>
        </div>
      )}
      {error && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};
