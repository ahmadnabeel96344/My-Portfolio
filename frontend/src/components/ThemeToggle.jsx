import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react'; // Icons for light and dark modes

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 shadow-md 
                hover:bg-gray-100 dark:hover:bg-gray-800 transition z-20"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
    </button>
  );
};

export default ThemeToggle;
