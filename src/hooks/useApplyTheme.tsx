import { useEffect } from 'react';

export const useApplyTheme = () => {
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

    applyThemeFromBody(); // Apply on mount

    // Optional: Observe changes to documentElement class list if theme can be changed by other means
    const observer = new MutationObserver(applyThemeFromBody);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect(); // Cleanup observer
  }, []);
};
