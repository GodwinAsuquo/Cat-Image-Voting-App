import { useNavigate, useLocation } from 'react-router-dom';
import { Cat, Heart, Moon, Sun } from 'lucide-react';
import { useCatStore } from '@/stores/catStore';
import { PATHS } from '@/utils/enum';
import { FaCat } from 'react-icons/fa6';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useCatStore();

  return (
    <nav className="bg-white dark:bg-gray-800 py-2 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate(PATHS.ROOT)}>
              {/* <Cat /> */}
              <FaCat className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl dark:text-white hidden md:block">VoteMyCats</span>
            </div>

            <div className="flex space-x-6">
              <button
                onClick={() => navigate(PATHS.ROOT)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                  location.pathname === PATHS.ROOT
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Cat size={20} />
                <span>Gallery</span>
              </button>

              <button
                onClick={() => navigate(PATHS.MY_VOTES)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-colors cursor-pointer ${
                  location.pathname === PATHS.MY_VOTES
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Heart size={20} />
                <span>My Votes</span>
              </button>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-700" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
