import React from "react";
import InfoPart from "./InfoPart";
import ContactUsPart from "./ContactUsPart";
import ImportantLinks from "./ImportantLinks";
import FirmLInks from "./FirmLInks";
import ExploreUs from "./ExploreUs";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div>
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-5 items-center">
            <InfoPart></InfoPart>
            <ContactUsPart></ContactUsPart>
            <ImportantLinks></ImportantLinks>
            <FirmLInks></FirmLInks>
            {/* <ExploreUs></ExploreUs> */}
          </div>
        </div>
        <hr className="mt-3 mx-1"></hr>
        <div className="px-8 md:px-12 lg:px-24 py-6">
          <div className="w-full flex-none md:flex lg:flex justify-between items-start text-center md:text-start lg:text-start">
            <div>
              <p className="text-xs">
                Copyright
                <span>
                  <AiOutlineCopyright className="inline text-sm mx-2 " />
                </span>
                2023 Kausar and Associates Ltd. All right reserved
              </p>
            </div>
            <div>
              <p className="text-xs">
                Design and Developed by{" "}
                <span className="hover:text-blue-200 hover:underline cursor-pointer underline">
                  HotchPotch Innovations Ltd.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
