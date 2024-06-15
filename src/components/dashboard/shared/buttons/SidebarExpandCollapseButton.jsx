import React from "react";

const SidebarExpandCollapseButton = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto bg-slate-400">
      <div className="px-3 py-2">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span className="sr-only text-white">Expand / collapse sidebar</span>
          <svg
            className={`w-6 h-6 fill-current ${
              sidebarOpen
                ? "rotate-180 transition-transform duration-500"
                : "rotate-0 transition-transform duration-500"
            }`}
            viewBox="0 0 24 24"
          >
            <path
              className="text-slate-500"
              d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
            />
            <path className="text-slate-600" d="M3 23H1V1h2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SidebarExpandCollapseButton;
