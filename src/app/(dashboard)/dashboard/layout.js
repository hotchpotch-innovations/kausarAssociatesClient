import "../../globals.css";
import Header from "./partials/Header";
import DashboardProvider from "./DashboardProvider";
import DashboardSidebar from "./partials/dashboard-sidebar/DashboardSidebar";
// import { Toaster } from "react-hot-toast";
import Providers from "@/components/providers/TanstackProvider";

export default function DashboardLayout({ children }) {
  return (
    <Providers>
      <DashboardProvider>
        <div>
          <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
            <DashboardSidebar />
            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {/* Top-Right Site header */}
              <Header />

              <main>
                <div>
                  <div className=" min-h-[90vh] px-4 lg:px-8 w-full">
                    {children}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </DashboardProvider>
      {/* <Toaster /> */}
    </Providers>
  );
}
