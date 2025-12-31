'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { isAndroid, isIOS, isMobile, isTablet, isDesktop, isMacOs, isWindows } from 'react-device-detect';

interface DeviceContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isAndroid: boolean;
  isIOS: boolean;
  isMacOs: boolean;
  isWindows: boolean;
}

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  isAndroid: false,
  isIOS: false,
  isMacOs: false,
  isWindows: false,
});

export const useDevice = () => useContext(DeviceContext);

export function DeviceProvider({ children }: { children: React.ReactNode }) {
  const [deviceInfo, setDeviceInfo] = useState<DeviceContextType>({
    isMobile: false,
    isTablet: false,
    isDesktop: true, // Default to desktop for SSR/initial render
    isAndroid: false,
    isIOS: false,
    isMacOs: false,
    isWindows: false,
  });

  useEffect(() => {
    // Update state only on client side to avoid hydration mismatch
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setDeviceInfo({
      isMobile,
      isTablet,
      isDesktop,
      isAndroid,
      isIOS,
      isMacOs,
      isWindows,
    });
  }, []);

  return (
    <DeviceContext.Provider value={deviceInfo}>
      {children}
    </DeviceContext.Provider>
  );
}
