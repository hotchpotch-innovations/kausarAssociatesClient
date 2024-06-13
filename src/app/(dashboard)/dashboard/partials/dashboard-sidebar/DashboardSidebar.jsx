"use client";
import { useState } from "react";
import SidebarCloseButton from "./components/buttons/SidebarCloseButton";
import SidebarHeader from "./components/SidebarHeader";
import SidebarExpandCollapseButton from "./components/buttons/SidebarExpandCollapseButton";
import ServiceManagementRoutes from "./components/managements/Services";
import WebsiteManagementRoutes from "./components/managements/WebsiteManagement";
import CategoryManagementRoutes from "./components/managements/Categories";
import IncorporationManagementRoutes from "./components/managements/Incorporations";
import LicensingManagementRoutes from "./components/managements/Licensing";
import CompanyNewsManagementRoutes from "./components/managements/CompanyNews";
import BlogRoutes from "./components/managements/Blogs";
import ResourcePortalRoutes from "./components/managements/ResourcePortal";
import FormRoutes from "./components/managements/Forms";

const DashboardSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="custom-scrollbar">
      <div
        className={`static flex flex-col z-40 left-0 top-0 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "h-auto" : "h-16"
        }  lg:h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar ${
          sidebarOpen ? "w-screen lg:w-64" : "w-screen lg:w-20"
        } shrink-0 bg-slate-800 p-4 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-0"
        } custom-scrollbar`}
      >
        <div className="flex justify-between items-start mb-10 pr-3 sm:px-2">
          {/* Close Button  */}
          <SidebarCloseButton
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
        </div>

        <div className="custom-scrollbar">
          {/* Sidebar Header */}
          <SidebarHeader sidebarOpen={sidebarOpen} />
          <div
            className={`custom-scrollbar space-y-3 text-white max-h-[70vh] overflow-y-auto overflow-x-hidden ${
              sidebarOpen
                ? "block lg:block duration-500"
                : "hidden lg:block duration-500"
            }`}
          >
            {/* Website content editable routes */}
            <WebsiteManagementRoutes sidebarOpen={sidebarOpen} />
            <CategoryManagementRoutes sidebarOpen={sidebarOpen} />
            <ServiceManagementRoutes sidebarOpen={sidebarOpen} />
            <IncorporationManagementRoutes sidebarOpen={sidebarOpen} />
            <LicensingManagementRoutes sidebarOpen={sidebarOpen} />
            <CompanyNewsManagementRoutes sidebarOpen={sidebarOpen} />
            <BlogRoutes sidebarOpen={sidebarOpen} />
            <ResourcePortalRoutes sidebarOpen={sidebarOpen} />
            <FormRoutes sidebarOpen={sidebarOpen} />
          </div>
        </div>

        {/* Expand / collapse button */}
        <SidebarExpandCollapseButton
          setSidebarOpen={setSidebarOpen}
          sidebarOpen={sidebarOpen}
        />
      </div>
    </div>
  );
};

export default DashboardSidebar;
