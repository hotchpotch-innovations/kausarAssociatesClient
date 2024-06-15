"use client";
import { useState } from "react";
import SidebarCloseButton from "./buttons/SidebarCloseButton";
import SidebarHeader from "./SidebarHeader";
import SidebarExpandCollapseButton from "./buttons/SidebarExpandCollapseButton";
import ServiceManagementRoutes from "./managements/Services";
import WebsiteManagementRoutes from "./managements/WebsiteManagement";
import CategoryManagementRoutes from "./managements/Categories";
import IncorporationManagementRoutes from "./managements/Incorporations";
import LicensingManagementRoutes from "./managements/Licensing";
import CompanyNewsManagementRoutes from "./managements/CompanyNews";
import BlogRoutes from "./managements/Blogs";
import ResourcePortalRoutes from "./managements/ResourcePortal";
import FormRoutes from "./managements/Forms";

const DashboardSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
      <div
        className={`static flex flex-col z-40 left-0 top-0 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "h-auto" : "h-16"
        }  lg:h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar ${
          sidebarOpen ? "w-screen lg:w-64" : "w-screen lg:w-20"
        } shrink-0 bg-slate-800 p-4 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-0"
        }`}
      >
        <div className="flex justify-between items-start mb-10 pr-3 sm:px-2">
          {/* Close Button  */}
          <SidebarCloseButton
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
        </div>

        <div className="">
          {/* Sidebar Header */}
          <SidebarHeader sidebarOpen={sidebarOpen} />
          <div
            className={`space-y-3 text-white max-h-[70vh] overflow-y-auto overflow-x-hidden ${
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
