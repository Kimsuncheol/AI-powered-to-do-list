'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';
type ResolvedThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedMode: ResolvedThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  mode: 'system',
  resolvedMode: 'light',
  setMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  // Initialize with system preference or saved preference
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode') as ThemeMode;
      return savedMode || 'system';
    }
    return 'system';
  });

  const [resolvedMode, setResolvedMode] = useState<ResolvedThemeMode>('light');

  // Resolve the actual theme based on mode
  useEffect(() => {
    const getResolvedMode = (): ResolvedThemeMode => {
      if (mode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return mode;
    };

    setResolvedMode(getResolvedMode());

    // Listen for system theme changes
    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setResolvedMode(e.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [mode]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, resolvedMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
