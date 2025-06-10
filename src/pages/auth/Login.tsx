import { BASIC_ROUTES } from '@/routes';
import type { UserType } from '@/types/auth';
import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Using placeholder for now

// --- Icon Placeholders (Lucide React Mocks from aiGemenihome.tsx) ---
// In a real app, you'd import these directly from 'lucide-react'
const IconPlaceholder = ({ name, size = 24, className = '', children, strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-label={`${name} icon`}
  >
    {children || (
      <>
        <circle cx="12" cy="12" r="10" />
        <text x="12" y="17" fontSize="12" textAnchor="middle" fill="currentColor">
          {name.substring(0, 1)}
        </text>
      </>
    )}
  </svg>
);

const LifeBuoy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
    <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
    <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
    <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
  </svg>
);

const Sun = (props) => (
  <IconPlaceholder name="Sun" {...props}>
    <path d="M12 1v2m8.66 1.34l-1.42 1.42M23 12h-2m-1.34 8.66l-1.42-1.42M12 23v-2m-8.66-1.34l1.42-1.42M1 12h2m1.34-8.66l1.42 1.42" />
  </IconPlaceholder>
);
const Moon = (props) => (
  <IconPlaceholder name="Moon" {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </IconPlaceholder>
);
const Mail = (props) => (
  <IconPlaceholder name="Mail" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </IconPlaceholder>
);
const Lock = (props) => (
  <IconPlaceholder name="Lock" {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </IconPlaceholder>
);
const Eye = (props) => (
  <IconPlaceholder name="Eye" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </IconPlaceholder>
);
const EyeOff = (props) => (
  <IconPlaceholder name="EyeOff" {...props}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7c.34 0 .66-.05.97-.15"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </IconPlaceholder>
);
const LogIn = (props) => (
  <IconPlaceholder name="LogIn" {...props}>
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </IconPlaceholder>
);

// --- Mock React Router Link ---
// In a real app, you'd import Link from 'react-router-dom'
const Link = ({ to, children, className, ...rest }) => (
  <a
    href={to}
    onClick={(e) => {
      e.preventDefault();
      console.log(`Navigating to ${to}`);
    }}
    className={className}
    {...rest}
  >
    {children}
  </a>
);

// LoginPage Component
export const LoginPage = () => {
  const [userType, setUserType] = useState<UserType>('boater');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light, will check system preference
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // const navigate = useNavigate(); // Would be used with actual react-router-dom

  // Effect to set initial dark mode based on system preference or saved preference
  useEffect(() => {
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else if (prefersDark) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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

  // Common Tailwind CSS classes for inputs and buttons to ensure consistency and maintainability
  const commonInputStyle =
    'w-full px-4 py-3.5 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0077cc] dark:focus:ring-[#00aaff] text-lg text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-150';
  const commonButtonBaseStyle =
    'w-full py-3.5 px-6 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-150 flex items-center justify-center gap-2 min-h-[52px]'; // Ensuring min height for touch target (48px + padding)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA] dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="fixed top-4 right-4 p-3 rounded-full text-[#1B365D] dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
      >
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button>

      {/* Login card */}
      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        {/* Header: Logo and Title */}
        <div className="flex flex-col items-center mb-8">
          <Link to={BASIC_ROUTES.DASHBOARD} className="flex items-center space-x-2.5 mb-4">
            <LifeBuoy size={48} className="text-[#1B365D] dark:text-sky-400" />
            <h1 className="text-4xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1>
          </Link>
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
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5"
            >
              Email address
            </label>
            <div className="relative">
              <Mail
                size={22}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none"
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${commonInputStyle} pl-12`} // Padding left for icon
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                size={22}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none"
              />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${commonInputStyle} pl-12`} // Padding left for icon
                placeholder="••••••••"
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
          </div>

          {/* Forgot Password Link */}
          <div className="flex items-center justify-end">
            <div className="text-lg">
              <Link
                to={BASIC_ROUTES.FORGOT_PASSWORD}
                className="font-medium text-[#0077cc] dark:text-[#00aaff] hover:text-[#0055aa] dark:hover:text-[#0077cc] transition-colors"
              >
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
            <button
              type="submit"
              disabled={loading}
              className={`${commonButtonBaseStyle} bg-[#ea580c] hover:bg-[#c2410c] text-white focus:ring-[#ea580c] disabled:opacity-70`} // Accent color for primary action
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <LogIn size={22} className="mr-2" />
              )}
              Sign In
            </button>
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
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className={`${commonButtonBaseStyle} bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 focus:ring-gray-400 dark:focus:ring-slate-500 disabled:opacity-70`}
            >
              {/* Google Icon SVG */}
              <svg
                className="w-5 h-5 mr-2.5"
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
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <p className="mt-10 text-center text-lg text-gray-600 dark:text-slate-300">
          Don't have an account?{' '}
          <Link
            to={BASIC_ROUTES.REGISTER}
            className="font-semibold text-[#0077cc] dark:text-[#00aaff] hover:text-[#0055aa] dark:hover:text-[#0077cc] transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
