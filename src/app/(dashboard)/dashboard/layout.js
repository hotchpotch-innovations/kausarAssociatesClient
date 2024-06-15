import "../../globals.css";
import Header from "../../../components/dashboard/shared/Header";
import DashboardSidebar from "../../../components/dashboard/shared/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <DashboardSidebar />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Top-Right Site header */}
        <Header />

        <main>
          <div>
            <div className=" min-h-[90vh] px-4 lg:px-8 w-full">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
