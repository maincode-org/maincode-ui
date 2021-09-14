import React, { createContext, useEffect, useState } from 'react';

export enum EThemeModes {
  'light' = 'light',
  'dark' = 'dark',
}

export type IThemeContext = { themeName: EThemeModes; toggleTheme: () => void };

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeProvider: React.FC = ({ children }) => {
  const isDark = (): boolean => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage.getItem('themeName') === EThemeModes.dark;

  const [themeName, setThemeName] = useState(isDark() ? EThemeModes.dark : EThemeModes.light);

  useEffect(() => {
    if (isDark()) setThemeName(EThemeModes.dark);
    document.body.classList.toggle(isDark() ? EThemeModes.dark : EThemeModes.light, true);
  }, []);

  const toggleTheme = () => {
    const name = themeName === EThemeModes.dark ? EThemeModes.light : EThemeModes.dark;
    localStorage.setItem('themeName', name);
    document.body.classList.toggle(EThemeModes.light);
    document.body.classList.toggle(EThemeModes.dark);
    setThemeName(name);
  };

  return <ThemeContext.Provider value={{ themeName, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
