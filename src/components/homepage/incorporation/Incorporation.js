import React from "react";
import ServiceCard from "../services/ServiceCard";
import {
  largeDevicesRightBorderElements,
  largeDevicesTopBorderElements,
  mediumDevicesRightBorderElements,
  mediumDevicesTopBorderElements,
} from "@/components/common/storageVariables";
import { servicesData } from "../services/servicesData";
import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";

const Incorporation = ({isBg}) => {
  return (
    <section>
      <div className="content-container">
        <div>
          <AbsoluteText
            text={"INCORPORATION"}
            isTextWhite={false}
          ></AbsoluteText>
          <div className="content-container mx-auto">
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
    </section>
  );
};

export default Incorporation;
