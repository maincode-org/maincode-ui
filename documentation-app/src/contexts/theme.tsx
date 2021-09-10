import React, { createContext, useEffect, useState } from 'react';

type IThemeContext = { themeName: string; toggleTheme: () => void };

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const isDark = localStorage.getItem('themeName') === 'dark';
    if (isDark) setThemeName('dark');
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
