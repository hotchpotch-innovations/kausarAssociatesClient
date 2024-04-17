import React from "react";
import ServiceCard from "../services/ServiceCard";
import { servicesData } from "../services/servicesData";
import {
  largeDevicesRightBorderElements,
  largeDevicesTopBorderElements,
  mediumDevicesRightBorderElements,
  mediumDevicesTopBorderElements,
} from "@/components/common/storageVariables";
import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";

const Licensing = ({isBg}) => {

  return (
    <section>
      <div
        className={`h-full ${isBg ? 'bg-cover bg-center' : "bg-none"}`}
      >
        <div className={`w-full ${isBg ? 'bg-primary md:bg-gradient-to-l lg:bg-gradient-to-l' : 'bg-none'} from-blue-600/70 via-blue-600/70 to-blue-600/70 bg-cover`}>
          <div className={`${isBg ? 'bg-primary md:bg-transparent lg:bg-transparent' : "bg-none"}`}>
            <div className="content-container">
              <AbsoluteText
                text={"LICENSING"}
                isTextWhite={isBg ? true : false}
              ></AbsoluteText>
              <div className="content-container text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-0 lg:gap-0">
                  {servicesData.map((service) => {
                    const index = servicesData.indexOf(service);
                    return (
                      <ServiceCard
                        key={service?._id}
                        title={service?.title}
                        body={service?.body}
                        isTextWhite={isBg ? true : false}
                        largeRight={
                          largeDevicesRightBorderElements.includes(index)
                            ? true
                            : false
                        }
                        mediumRight={
                          mediumDevicesRightBorderElements.includes(index)
                            ? true
                            : false
                        }
                        largeTop={
                          largeDevicesTopBorderElements.includes(index)
                            ? true
                            : false
                        }
                        mediumTop={
                          mediumDevicesTopBorderElements.includes(index)
                            ? true
                            : false
                        }
                        mediumBottom={
                          index == servicesData.length - 2 ? true : false
                        }
                      ></ServiceCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Licensing;
