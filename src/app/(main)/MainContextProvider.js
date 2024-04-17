"use client";
import { createContext } from "react";
export const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const contextInfo = {};

  return (
    <MainContext.Provider value={contextInfo}>{children}</MainContext.Provider>
  );
};

export default MainContextProvider;
