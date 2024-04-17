"use client";
import React from "react";
import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";
import {
  largeDevicesRightBorderElements,
  largeDevicesTopBorderElements,
  mediumDevicesRightBorderElements,
  mediumDevicesTopBorderElements,
} from "@/components/common/storageVariables";
import AbsoluteText from "@/components/common/absoluteText/AbsoluteText";

const Services = ({isBg}) => {
  return (
    <section className={`${isBg ? 'bg-primary' : "bg-none"}`}>
      <div className="content-container mx-auto">
       
          <AbsoluteText text={"SERVICES"} isTextWhite={isBg ? true : false}></AbsoluteText>
          <div className="content-container w-full text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-0 lg:gap-0">
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
    </section>
  );
};

export default Services;
