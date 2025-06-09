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
const MailCheck = (props) => <IconPlaceholder name="MailCheck" {...props}><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><polyline points="22 7 13.03 12.7"/><path d="m22 19-4.5 4.5L15 21"/></IconPlaceholder>;
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
  DASHBOARD: '/dashboard', // Example path after successful verification
};

// EmailVerificationPage Component
// Props could include the user's email, but for this mock, we'll use a placeholder.
const EmailVerificationPage = ({ userEmail = "your.email@example.com" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [resendError, setResendError] = useState('');
  const [resendSuccessMessage, setResendSuccessMessage] = useState('');

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

  const handleResendVerificationEmail = async () => {
    setResendError('');
    setResendSuccessMessage('');
    setLoadingResend(true);

    // Mock API call for resending verification email
    console.log('Resending verification email to:', userEmail);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    setLoadingResend(false);
    // Example:
    // const success = Math.random() > 0.3; // Simulate success/failure
    // if (success) {
    //   setResendSuccessMessage("A new verification email has been sent. Please check your inbox (and spam folder).");
    // } else {
    //   setResendError("Failed to resend verification email. Please try again or contact support.");
    // }
    setResendSuccessMessage("Mock: A new verification email has been sent. Please check your inbox (and spam folder).");
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

      <div className="w-full max-w-lg bg-white dark:bg-slate-800 shadow-xl rounded-2xl p-8 md:p-10 transform transition-all duration-300 text-center">
        <div className="flex flex-col items-center mb-8">
          <Link to={PATHS.HOME} className="flex items-center space-x-2.5 mb-6">
            <LifeBuoy size={48} className="text-[#1B365D] dark:text-sky-400" />
            <h1 className="text-4xl font-bold text-[#1B365D] dark:text-sky-400">SeaSure</h1>
          </Link>
          <MailCheck size={64} className="text-green-500 dark:text-green-400 mb-6" />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-slate-100 mb-3">Verify Your Email Address</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 mb-2">
            We've sent a verification link to:
          </p>
          <p className="text-xl font-medium text-[#1B365D] dark:text-sky-400 mb-6 break-all">
            {userEmail}
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300">
            Please check your inbox (and spam folder) and click the link to activate your account.
          </p>
        </div>

        <div className="space-y-5">
          {resendError && (
            <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-600 rounded-lg">
              <p className="text-base text-red-700 dark:text-red-300 text-center">{resendError}</p>
            </div>
          )}

          {resendSuccessMessage && (
            <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-500 rounded-lg">
              <p className="text-base text-green-700 dark:text-green-300 text-center">{resendSuccessMessage}</p>
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={handleResendVerificationEmail}
              disabled={loadingResend}
              className={`${commonButtonBaseStyle} bg-[#0077cc] hover:bg-[#0055aa] dark:bg-[#00aaff] dark:hover:bg-[#0077cc] text-white focus:ring-[#0077cc] dark:focus:ring-[#00aaff] disabled:opacity-60`}
            >
              {loadingResend ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Send size={20} className="mr-2" />
              )}
              Resend Verification Email
            </button>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 pt-2">
            Once verified, you can{' '}
            <Link to={PATHS.LOGIN} className="font-semibold text-[#0077cc] dark:text-[#00aaff] hover:text-[#0055aa] dark:hover:text-[#0077cc] transition-colors">
              Sign In
            </Link>
            .
          </p>
          <p className="text-sm text-gray-500 dark:text-slate-500">
            If you encounter any issues, please contact our support team.
          </p>
        </div>

        <div className="mt-10">
          <Link 
            to={PATHS.LOGIN} 
            className={`${commonButtonBaseStyle} bg-transparent hover:bg-gray-100 dark:hover:bg-slate-700 text-[#1B365D] dark:text-sky-400 border border-[#1B365D] dark:border-sky-500 focus:ring-[#1B365D] dark:focus:ring-sky-500`}
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

// Main App Component to render the EmailVerificationPage
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

  // Example usage: You might get the user's email from router state or context in a real app
  return <EmailVerificationPage userEmail="captain.hook@example.com" />;
}
