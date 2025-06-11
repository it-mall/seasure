import { BASIC_ROUTES } from '@/routes';
import type { UserType } from '@/types/auth';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/shared/Button';
import { Password } from '@/components/shared/Password';
import { Email } from '@/components/shared/Email';
import { Link } from '@/components/shared/Link';
import { Logo } from '@/components/shared/Logo';
import { Sun, Moon, LogIn } from '@/assets/icons';

// LoginPage Component
const LoginPage = () => {
  const [userType, setUserType] = useState<UserType>('boater');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const navigate = useNavigate(); // Would be used with actual react-router-dom

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    // Mock API call
    console.log('Logging in as:', userType, { email, password });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    setLoading(false);
    // Example navigation:
    // if (success) {
    //   navigate(PATHS.HOME);
    // } else {
    //   setError("Invalid email or password. Please try again.");
    // }
    setError('Mock login: Invalid email or password. Please try again.'); // Example error
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    setError('');
    console.log('Signing in with Google as:', userType);
    // Mock Google Sign-In
    setTimeout(() => {
      setLoading(false);
      // navigate(PATHS.HOME);
      setError('Mock Google Sign-In failed.'); // Example error
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 justify-center min-h-screen dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Dark mode toggle button */}
      {/* <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="fixed top-4 right-4 p-3 rounded-full text-[#1B365D] dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
      >
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button> */}

      {/* Login card */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Logo className="mb-4" />
          <p className="text-xl text-gray-600 dark:text-slate-300">Sign in to your account</p>
        </div>

        {/* User Type Selector */}
        <div className="mb-6">
          <div className="flex border border-gray-300 dark:border-slate-600 rounded-lg p-1 bg-gray-100 dark:bg-slate-700">
            {(['boater', 'serviceProvider'] as UserType[]).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 py-2.5 px-4 rounded-md text-lg font-medium transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none
                  ${
                    userType === type
                      ? 'bg-[#0077cc] dark:bg-[#00aaff] text-white shadow-lg' // Active state with ocean blue accent
                      : 'text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                  }`}
              >
                {type === 'boater' ? 'Boater' : 'Service Provider'}
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
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

          {/* Password Input */}
          <Password
            id="password"
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            label="Password"
          />

          {/* Forgot Password Link */}
          <div className="flex items-center justify-end">
            <div className="text-lg">
              <Link to={BASIC_ROUTES.FORGOT_PASSWORD} variant="primary">
                Forgot your password?
              </Link>
            </div>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-600 rounded-lg">
              <p className="text-base text-red-700 dark:text-red-300 text-center">{error}</p>
            </div>
          )}

          {/* Sign In Button */}
          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={loading}
              leftIcon={!loading && <LogIn size={22} />}
            >
              Sign In
            </Button>
          </div>
        </form>

        {/* "Or continue with" Separator */}
        <div className="mt-8 mb-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300 dark:border-slate-600" />
            </div>
            <div className="relative flex justify-center text-lg">
              <span className="px-3 bg-white dark:bg-slate-800 text-gray-500 dark:text-slate-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Sign-In Button */}
          <div className="mt-6">
            <Button
              type="button"
              variant="secondary"
              size="lg"
              fullWidth
              isLoading={loading}
              leftIcon={
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 381.5 512 244 512 110.3 512 0 398.8 0 256S110.3 0 244 0c73.5 0 136.3 24.8 186.6 65.7l-67.4 64.4C338.9 102.3 300.5 78.9 244 78.9c-69.1 0-125.5 50.8-141.2 116.5H24.1v78.3h180v-0.1c12.3-53.6 58.2-95.3 112.2-95.3 33.6 0 61.5 11.6 83.8 30.4l73.1-70.9C453.9 104.6 394.4 55.5 331.1 29.8L331.1 29.8zM244 512c51.9 0 97.4-15.7 133.2-42.1L331.1 411c-27.9 17.6-63.8 29.5-104.6 29.5-69.2 0-125.5-50.8-141.3-116.5H24.1v78.3h180c12.3 53.6 58.2 95.3 112.2 95.3z"
                  ></path>
                </svg>
              }
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-10 text-center text-lg text-gray-600 dark:text-slate-300">
          Don't have an account?{' '}
          <Link to={BASIC_ROUTES.REGISTER} variant="primary">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
