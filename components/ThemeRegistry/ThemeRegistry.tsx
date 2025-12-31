'use client';

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider, useTheme } from '@/contexts/ThemeContext';

function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedMode } = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedMode,
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
        },
      }),
    [resolvedMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeContextProvider>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </ThemeContextProvider>
    </AppRouterCacheProvider>
  );
}
