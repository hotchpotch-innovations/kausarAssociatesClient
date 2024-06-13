"use client";

import Image from "next/image";
import logo from "./logo/KA_LOGO-01.png";
import FooterCarousel from "./FooterCarousel";
import { TfiGallery } from "react-icons/tfi";

export default function FooterTop() {
  return (
    <>
      <div className=" pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-14 2xl:pb-16">
        <div className="flex flex-col sm:flex-row lg:gap-7 justify-between">
          <div className="max-w-[130px]">
            <Image src={logo} alt="" width={150} height={120} className="" />
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <TfiGallery size={64} color="#4169e1" className="w-14 h-14 hidden sm:block" />
              <p className="font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                Our <br /> Memories
              </p>
            </div>
            {/* for carousel */}
            <FooterCarousel />

            {/* for static images */}
            {/* <div className="flex items-center gap-1 2xl:gap-3">
              {images?.slice(0, 7).map((data) => (
                <div key={data._id}>
                  <Image
                    src={data.url}
                    alt=""
                    width={120}
                    height={170}
                    className="rounded aspect-square lg:aspect-auto lg:w-16 lg:h-12 xl:w-20 xl:h-16 2xl:w-28 2xl:h-24"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-[1.2px] mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-14 2xl:mb-16" />
    </>
  );
}
