import React, { useState, useContext, createContext } from 'react';

// type ThemeName = 'light' | 'dark';
enum ThemeName {
  LIGHT = 'light',
  DARK = 'dark'
}

const useTheme = () => {
  // const [theme, setTheme] = useState<ThemeName>('light');
  const [theme, setTheme] = useState<ThemeName>(ThemeName.LIGHT);

  const toggleTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
    setTheme(theme === ThemeName.LIGHT ? ThemeName.DARK : ThemeName.LIGHT);
  }

  return { theme, toggleTheme };
}

type Theme = {
  theme: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme | null>(null);
ThemeContext.displayName = 'ThemeContext';

type Props = {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Remember to wrap your component in ThemeProvider');
  }

  return context;
}