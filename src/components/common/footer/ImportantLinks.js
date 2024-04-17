import React from "react";

const ImportantLinks = () => {
  return (
    <div className="text-xs col-span-1 mt-4 md:mt-0 lg:mt-0">
      <div>
        <h1 className="text-base md:text-base lg:text-lg underline font-semibold">
          Important Links
        </h1>
      </div>
      <div className="mt-2">
        <ul>
            <li className="leading-4">National Board of Revinue</li>
            <li className="leading-4">BIDA</li>
            <li className="leading-4">BEPZA</li>
            <li className="leading-4">Dhaka Stock Exchange (DSE)</li>
            <li className="leading-4">RJSE</li>
            <li className="leading-4">Ministry of Commerce</li>
            <li className="leading-4">Kausar & Associates Ltd.</li>
        </ul>
      </div>
    </div>
  );
};

export default ImportantLinks;
