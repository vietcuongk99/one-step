'use client';

import {createContext, useCallback, useMemo, useState} from 'react';

export const DrawerContext = createContext({});

export default function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const setOpenDrawer = useCallback((checkOpen) => {
    setIsOpen(checkOpen)
  }, [])
  const contextValue = useMemo(() => ({
    isOpen, setOpenDrawer
  }), [isOpen, setOpenDrawer]);
  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
}
