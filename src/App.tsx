import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PageLoadingSpinner } from './components/shared/LoadingSpinner';
import { useApplyTheme } from './hooks/useApplyTheme';
import { TestPage } from './pages/TestPage';
// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const LoginPage = lazy(() => import('./pages/auth/Login'));
const RegistrationPage = lazy(() => import('./pages/auth/Register'));
const ForgotPasswordPage = lazy(() => import('./pages/auth/ForgotPwd'));
const ResetPasswordPage = lazy(() => import('./pages/auth/ResetPwd'));
const EmailVerificationPage = lazy(() => import('./pages/auth/EmailVerification'));
const OnboardingPage = lazy(() => import('./pages/onboarding/OnboardingPage'));


function App() {
  useApplyTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <AuthProvider>
            <Suspense fallback={<PageLoadingSpinner />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/onboarding" element={<OnboardingPage />} />
                <Route path="/test" element={<TestPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/email-verification" element={<EmailVerificationPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
