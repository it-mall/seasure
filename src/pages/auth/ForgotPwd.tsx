import React, { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Email } from '@/components/shared/Email';
import { Link } from '@/components/shared/Link';
import { Logo } from '@/components/shared/Logo';
import { Mail } from '@/assets/icons';
import { BASIC_ROUTES } from '@/routes';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Mock API call
    console.log('Sending reset password email to:', email);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    // Mock success response
    setSuccess(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center min-h-screen dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Forgot Password card */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <p className="text-xl text-gray-600 dark:text-slate-300">Reset your password</p>
        </div>

        {!success ? (
          <>
            <p className="text-center text-gray-600 dark:text-slate-400 mb-6">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <Email
                id="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                label="Email address"
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
                leftIcon={!loading && <Mail size={22} />}
              >
                Send Reset Link
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6">
            <div className="p-4 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600 rounded-lg">
              <p className="text-base text-green-700 dark:text-green-300">
                If an account exists with {email}, you will receive a password reset link shortly.
              </p>
            </div>
            <p className="text-gray-600 dark:text-slate-400">
              Didn't receive the email? Check your spam folder or <br />
              <Link onClick={() => setSuccess(false)} variant="primary">
                try again
              </Link>
            </p>
          </div>
        )}

        {/* Back to Login Link */}
        <p className="mt-8 text-center text-gray-600 dark:text-slate-400">
          Remember your password?{' '}
          <Link to={BASIC_ROUTES.LOGIN} variant="primary">
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
