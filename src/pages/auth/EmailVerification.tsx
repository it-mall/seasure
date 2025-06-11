import React, { useState, useEffect } from 'react';
import { Button } from '@/components/shared/Button';
import { Link } from '@/components/shared/Link';
import { Logo } from '@/components/shared/Logo';
import { Mail, CheckCircle, AlertCircle } from '@/assets/icons';
import { BASIC_ROUTES } from '@/routes';

const EmailVerificationPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>(
    'pending'
  );
  const [countdown, setCountdown] = useState(60);

  // Mock email from URL or state management
  const email = 'user@example.com';

  useEffect(() => {
    // Start countdown for resend button
    if (countdown > 0 && verificationStatus === 'pending') {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, verificationStatus]);

  const handleResendEmail = async () => {
    if (countdown > 0) return;

    setLoading(true);
    setError('');

    try {
      // Mock API call
      console.log('Resending verification email to:', email);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset countdown
      setCountdown(60);
      setVerificationStatus('pending');
    } catch (err) {
      setError('Failed to resend verification email. Please try again.');
      setVerificationStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmail = async () => {
    setLoading(true);
    setError('');

    try {
      // Mock API call
      console.log('Verifying email:', email);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock success
      setVerificationStatus('success');
    } catch (err) {
      setError('Failed to verify email. Please try again.');
      setVerificationStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center min-h-screen dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Verification card */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <p className="text-xl text-gray-600 dark:text-slate-300">Verify your email</p>
        </div>

        {verificationStatus === 'pending' && (
          <>
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Mail size={64} className="text-[#0077cc] dark:text-[#00aaff]" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-slate-400">
                  We've sent a verification email to:
                </p>
                <p className="font-medium text-gray-900 dark:text-slate-100">{email}</p>
                <p className="text-gray-600 dark:text-slate-400">
                  Please check your inbox and click the verification link to continue.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-600 rounded-lg">
                  <p className="text-base text-red-700 dark:text-red-300 text-center">{error}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  type="button"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={loading}
                  onClick={handleVerifyEmail}
                  leftIcon={<CheckCircle size={22} />}
                >
                  I've Verified My Email
                </Button>

                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  isLoading={loading}
                  onClick={handleResendEmail}
                  disabled={countdown > 0}
                  leftIcon={<Mail size={22} />}
                >
                  {countdown > 0 ? `Resend in ${countdown}s` : 'Resend Verification Email'}
                </Button>
              </div>

              {/* Back to Login Link */}
              <p className="text-center text-gray-600 dark:text-slate-400">
                Already verified?{' '}
                <Link to={BASIC_ROUTES.LOGIN} variant="primary">
                  Back to login
                </Link>
              </p>
            </div>
          </>
        )}

        {verificationStatus === 'success' && (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle size={64} className="text-green-500 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium text-gray-900 dark:text-slate-100">
                Email Verified Successfully!
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                Your email has been verified. You can now sign in to your account.
              </p>
            </div>
            <Link to={BASIC_ROUTES.LOGIN} variant="primary" className="inline-block">
              <Button
                type="button"
                variant="primary"
                size="lg"
                fullWidth
                leftIcon={<CheckCircle size={22} />}
              >
                Continue to Login
              </Button>
            </Link>
          </div>
        )}

        {verificationStatus === 'error' && (
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <AlertCircle size={64} className="text-red-500 dark:text-red-400" />
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium text-gray-900 dark:text-slate-100">
                Verification Failed
              </p>
              <p className="text-gray-600 dark:text-slate-400">
                {error || 'There was a problem verifying your email. Please try again.'}
              </p>
            </div>
            <div className="space-y-4">
              <Button
                type="button"
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => setVerificationStatus('pending')}
                leftIcon={<Mail size={22} />}
              >
                Try Again
              </Button>
              <Link to={BASIC_ROUTES.LOGIN} variant="default" className="inline-block w-full">
                <Button type="button" variant="secondary" size="lg" fullWidth>
                  Back to Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationPage;
