import React from "react";

function WelcomeBanner() {
  return (
    <div className="relative bg-transparent p-4 sm:p-6 rounded-sm overflow-hidden">
      {/* Background illustration */}
      <div
        className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-base md:text-lg text-white dark:text-slate-100 font-bold mb-1">
          Welcome, Kausar Associates Limited 👋
        </h1>
        <p className="dark:text-indigo-200 text-xs md:text-sm">
          You are entering our universe!
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
