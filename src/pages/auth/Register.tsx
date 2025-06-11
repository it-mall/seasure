import React, { useState } from 'react';
import { Button } from '@/components/shared/Button';
import { Email } from '@/components/shared/Email';
import { Password } from '@/components/shared/Password';
import { Link } from '@/components/shared/Link';
import { Logo } from '@/components/shared/Logo';
import { Checkbox } from '@/components/shared/Checkbox';
import { Input } from '@/components/shared/Input';
import { Google, UserPlus, User } from '@/assets/icons';
import { UserType } from '@/types/auth';
import { BASIC_ROUTES } from '@/routes';

// RegistrationPage Component
const RegistrationPage = () => {
  const [userType, setUserType] = useState<UserType>('boater');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (!agreedToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy.');
      return;
    }
    if (passwordStrength < 3 && password.length > 0) {
      setError(
        'Password is too weak. Please include uppercase, lowercase, numbers, and symbols, and be at least 8 characters long.'
      );
      return;
    }

    setLoading(true);
    console.log('Registering as:', userType, { fullName, email, password });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setError('Mock registration failed. Please try again.');
  };

  const handleGoogleSignUp = () => {
    setLoading(true);
    setError('');
    if (!agreedToTerms) {
      setError(
        'You must agree to the Terms of Service and Privacy Policy before signing up with Google.'
      );
      setLoading(false);
      return;
    }
    console.log('Signing up with Google as:', userType);
    setTimeout(() => {
      setLoading(false);
      setError('Mock Google Sign-Up failed.');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center min-h-screen dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Registration card */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300 my-8">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <p className="text-xl text-gray-600 dark:text-slate-300">Create your account</p>
        </div>

        {/* User Type Selection */}
        <div className="mb-6">
          <div className="flex border border-gray-300 dark:border-slate-600 rounded-lg p-1 bg-gray-100 dark:bg-slate-700">
            {(['boater', 'serviceProvider'] as UserType[]).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2.5 px-4 rounded-md text-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none
                  ${
                    userType === type
                      ? 'bg-[#0077cc] dark:bg-[#00aaff] text-white shadow-lg'
                      : 'text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
              >
                {type === 'boater' ? 'Boater' : 'Service Provider'}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleRegistration} className="space-y-5">
          {/* Full Name Input */}
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={error && !fullName ? 'Full name is required' : undefined}
            required
            LeftIcon={<User size={24} className="text-gray-400" />}
          />

          {/* Email Input */}
          <Email
            id="email-register"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            label="Email address"
          />

          {/* Password Input */}
          <Password
            id="password-register"
            name="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
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
            label="Confirm Password"
            error={
              confirmPassword && password !== confirmPassword ? 'Passwords do not match' : undefined
            }
          />

          {/* Terms Agreement */}
          <Checkbox
            checked={agreedToTerms}
            onChange={setAgreedToTerms}
            error={
              error && !agreedToTerms
                ? 'You must agree to the Terms of Service and Privacy Policy'
                : undefined
            }
          >
            I agree to the{' '}
            <Link to={BASIC_ROUTES.TERMS_OF_SERVICE} variant="primary" className="hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to={BASIC_ROUTES.PRIVACY_POLICY} variant="primary" className="hover:underline">
              Privacy Policy
            </Link>
          </Checkbox>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={loading}
            className="w-full"
            leftIcon={<UserPlus size={24} />}
          >
            Create Account
          </Button>

          {/* Google Sign Up Button */}
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={handleGoogleSignUp}
            isLoading={loading}
            className="w-full"
            leftIcon={<Google size={20} />}
          >
            Sign up with Google
          </Button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link to={BASIC_ROUTES.LOGIN} variant="primary" className="hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
