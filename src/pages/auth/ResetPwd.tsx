import React, { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Password } from '@/components/shared/Password';
import { Link } from '@/components/shared/Link';
import { Logo } from '@/components/shared/Logo';
import { Lock } from '@/assets/icons';
import { BASIC_ROUTES } from '@/routes';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    if (passwordStrength < 3 && password.length > 0) {
      setError(
        'Password is too weak. Please include uppercase, lowercase, numbers, and symbols, and be at least 8 characters long.'
      );
      setLoading(false);
      return;
    }

    // Mock API call
    console.log('Resetting password...');
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    // Mock success response
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center min-h-screen dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Reset Password card */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <p className="text-xl text-gray-600 dark:text-slate-300">Reset your password</p>
        </div>

        {!success ? (
          <>
            <p className="text-center text-gray-600 dark:text-slate-400 mb-6">
              Please enter your new password below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password Input */}
              <Password
                id="new-password"
                name="newPassword"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                label="New Password"
                showStrengthIndicator
                onStrengthChange={setPasswordStrength}
              />

              {/* Confirm Password Input */}
              <Password
                id="confirm-password"
                name="confirmPassword"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                label="Confirm New Password"
                error={
                  confirmPassword && password !== confirmPassword
                    ? 'Passwords do not match'
                    : undefined
                }
              />

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-600 rounded-lg">
                  <p className="text-base text-red-700 dark:text-red-300 text-center">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                isLoading={loading}
                leftIcon={!loading && <Lock size={22} />}
              >
                Reset Password
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="p-4 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600 rounded-lg">
              <p className="text-base text-green-700 dark:text-green-300">
                Your password has been successfully reset.
              </p>
            </div>
            <Link to={BASIC_ROUTES.LOGIN} variant="primary" className="inline-block">
              Back to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
