import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useThemeToggle = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeToggle must be used within a context');
  }
  return context;
};

export default useThemeToggle;


