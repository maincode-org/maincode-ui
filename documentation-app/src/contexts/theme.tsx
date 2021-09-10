import React, { createContext, useEffect, useState } from 'react';

export enum EThemeModes {
  'light' = 'light',
  'dark' = 'dark',
}

type IThemeContext = { themeName: EThemeModes; toggleTheme: () => void };

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState(EThemeModes.dark);

  useEffect(() => {
    const isDark = localStorage.getItem('themeName') === EThemeModes.light;
    if (isDark) setThemeName(EThemeModes.dark);
  }, []);

  const toggleTheme = () => {
    const name = themeName === EThemeModes.dark ? EThemeModes.light : EThemeModes.dark;
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
