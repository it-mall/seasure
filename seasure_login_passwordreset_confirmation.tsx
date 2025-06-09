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
const CheckCircle = (props) => <IconPlaceholder name="CheckCircle" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></IconPlaceholder>;
const LogIn = (props) => <IconPlaceholder name="LogIn" {...props}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></IconPlaceholder>;


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

// PasswordResetConfirmationPage Component
const PasswordResetConfirmationPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

      <div className="w-full max-w-md bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300 text-center">
        <div className="flex flex-col items-center mb-8">
          <Link to={PATHS.HOME} className="flex items-center space-x-2.5 mb-6">
            <LifeBuoy size={48} className="text-[#1B365D] dark:text-sky-400" />
            <h1 className="text-4xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1>
          </Link>
          <CheckCircle size={64} className="text-green-500 dark:text-green-400 mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-slate-100 mb-3">Password Reset Successful!</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-8">
            Your password has been updated. You can now use your new password to sign in to your account.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <Link
              to={PATHS.LOGIN}
              className={`${commonButtonBaseStyle} bg-[#ea580c] hover:bg-[#c2410c] text-white focus:ring-[#ea580c]`}
            >
              <LogIn size={20} className="mr-2" />
              Proceed to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component to render the PasswordResetConfirmationPage
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

  return <PasswordResetConfirmationPage />;
}
