import React from "react";

const ImportantLinks = () => {
  return (
    <div className="text-xs col-span-1 mt-4 md:mt-0 lg:mt-0">
      <div>
        <h1 className="text-base md:text-base lg:text-lg font-semibold uppercase text-primary">
          Links
        </h1>
      </div>
      <div className="mt-2">
        <ul>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
            National Board of Revinue
          </li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">BIDA</li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">BEPZA</li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">Dhaka Stock Exchange (DSE)</li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">RJSE</li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">Ministry of Commerce</li>
          <li className="leading-4 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">Kausar & Associates Ltd.</li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantLinks;
