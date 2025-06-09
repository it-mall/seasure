import React, { useState, useEffect } from 'react';

// --- Icon Placeholders (Lucide React Mocks) ---
const IconPlaceholder = ({ name, size = 24, className = "", children, strokeWidth = 2 }) => (
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
        <text x="12" y="17" fontSize="12" textAnchor="middle" fill="currentColor">{name.substring(0,1)}</text>
      </>
    )}
  </svg>
);

const LifeBuoy = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
    </svg>
);

const Sun = (props) => <IconPlaceholder name="Sun" {...props}><path d="M12 1v2m8.66 1.34l-1.42 1.42M23 12h-2m-1.34 8.66l-1.42-1.42M12 23v-2m-8.66-1.34l1.42-1.42M1 12h2m1.34-8.66l1.42 1.42"/></IconPlaceholder>;
const Moon = (props) => <IconPlaceholder name="Moon" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></IconPlaceholder>;
const Mail = (props) => <IconPlaceholder name="Mail" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></IconPlaceholder>;
const Send = (props) => <IconPlaceholder name="Send" {...props}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></IconPlaceholder>;
const ArrowLeft = (props) => <IconPlaceholder name="ArrowLeft" {...props}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></IconPlaceholder>;


// --- Mock React Router Link ---
const Link = ({ to, children, className, ...rest }) => (
  <a href={to} onClick={(e) => { e.preventDefault(); console.log(`Navigating to ${to}`); }} className={className} {...rest}>
    {children}
  </a>
);

// Mock PATHS object
const PATHS = {
  HOME: '/',
  LOGIN: '/login',
};

// ForgotPasswordPage Component
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  const handlePasswordResetRequest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');
    setLoading(true);

    // Mock API call for password reset
    console.log('Requesting password reset for:', email);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    setLoading(false);
    // Example:
    // const success = Math.random() > 0.3; // Simulate success/failure
    // if (success) {
    //   setSuccessMessage("If an account exists for this email, a password reset link has been sent.");
    //   setEmail(''); // Clear email field on success
    // } else {
    //   setError("Failed to send reset link. Please try again or contact support.");
    // }
    setSuccessMessage("Mock: If an account exists for this email, a password reset link has been sent.");
    setEmail('');
  };

  const commonInputStyle = "w-full px-4 py-3.5 rounded-lg bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-[#0077cc] dark:focus:ring-[#00aaff] text-lg text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 transition-colors duration-150";
  const commonButtonBaseStyle = "w-full py-3.5 px-6 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors duration-150 flex items-center justify-center gap-2 min-h-[52px]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F9FA] dark:bg-slate-900 p-4 font-sans transition-colors duration-300 text-gray-900 dark:text-slate-100">
      <button
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="fixed top-4 right-4 p-3 rounded-full text-[#1B365D] dark:text-sky-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
      >
        {isDarkMode ? <Sun size={28} /> : <Moon size={28} />}
      </button>

      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300">
        <div className="flex flex-col items-center mb-8">
          <Link to={PATHS.HOME} className="flex items-center space-x-2.5 mb-4">
            <LifeBuoy size={48} className="text-[#1B365D] dark:text-sky-400" />
            <h1 className="text-4xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1>
          </Link>
          <p className="text-2xl font-semibold text-gray-800 dark:text-slate-100 mb-2">Forgot Your Password?</p>
          <p className="text-lg text-gray-600 dark:text-slate-300 text-center">
            No worries! Enter your email address below and we'll send you a link to reset it.
          </p>
        </div>

        <form onSubmit={handlePasswordResetRequest} className="space-y-6">
          <div>
            <label htmlFor="email-forgot" className="block text-lg font-medium text-gray-800 dark:text-slate-200 mb-1.5">
              Email address
            </label>
            <div className="relative">
              <Mail size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none" />
              <input
                id="email-forgot"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${commonInputStyle} pl-12`}
                placeholder="you@example.com"
              />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-600 rounded-lg">
              <p className="text-base text-red-700 dark:text-red-300 text-center">{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-500 rounded-lg">
              <p className="text-base text-green-700 dark:text-green-300 text-center">{successMessage}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`${commonButtonBaseStyle} bg-[#ea580c] hover:bg-[#c2410c] text-white focus:ring-[#ea580c] disabled:opacity-60`}
            >
              {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Send size={20} className="mr-2" />
              )}
              Send Reset Link
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-lg text-gray-600 dark:text-slate-300">
          Remembered your password?{' '}
          <Link to={PATHS.LOGIN} className="font-semibold text-[#0077cc] dark:text-[#00aaff] hover:text-[#0055aa] dark:hover:text-[#0077cc] transition-colors flex items-center justify-center gap-1">
            <ArrowLeft size={20} /> Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

// Main App Component to render the ForgotPasswordPage
export default function App() {
  useEffect(() => {
    const applyThemeFromBody = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.body.classList.add('dark:bg-slate-900', 'dark:text-slate-100');
        document.body.classList.remove('bg-[#F8F9FA]', 'text-gray-900');
      } else {
        document.body.classList.add('bg-[#F8F9FA]', 'text-gray-900');
        document.body.classList.remove('dark:bg-slate-900', 'dark:text-slate-100');
      }
    };
    applyThemeFromBody();
    const observer = new MutationObserver(applyThemeFromBody);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return <ForgotPasswordPage />;
}
