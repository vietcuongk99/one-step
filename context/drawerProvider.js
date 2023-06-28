'use client';

import {createContext, useCallback, useMemo, useState} from 'react';

export const DrawerContext = createContext({});

export default function DrawerProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoadingRoute, setIsLoadingRoute] = useState(true)
  const setOpenDrawer = useCallback((checkOpen) => {
    setIsOpen(checkOpen)
  }, [])
  const setLoadingRoute = useCallback((loading) => {
    setLoadingRoute(loading)
  }, [])
  const contextValue = useMemo(() => ({
    isOpen, setOpenDrawer, isLoadingRoute, setLoadingRoute
  }), [isOpen, setOpenDrawer, isLoadingRoute, setLoadingRoute]);
  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
}
