"use client";
import { createContext, useState } from "react";
export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [modalData, setModalData] = useState();

  const dashboardInfo = {
    modalData,
    setModalData,
  };

  return (
    <DashboardContext.Provider value={dashboardInfo}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
