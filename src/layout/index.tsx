import { ReactNode, useEffect } from 'react';
import Nav from './Nav';
import { useCatStore } from '@/stores/catStore';

const Layout = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useCatStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Nav />
      <div className="pt-28 pb-8 px-4 container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;