import Image from "next/image";
import React from "react";

const RecentBlogCard = () => {
  const title = "The Procedures of VAT Registration Cancellation in Bangladesh";
  const body =
    "BIDA is the zenith Investment Promotion Agency (IPA) in Bangladesh. BIDA provides a wide range of services to foreign investors. BIDA provides a wide range of services to foreign investors.";



  return (
    <div className="flex justify-start w-full mx-auto h-24 md:h-24 lg:h-16 mt-4 md:mt-4 lg:pb-2 border border-dotted">
      <div className="mr-2 w-1/3">
        <Image
          src={
            "https://revenueaid.com.bd/assets/images/blogfeatureimage/the-procedures-of-vat-registration-cancellation-in-bangladesh-63934d1c0855b.png"
          }
          className="rounded-sm w-full h-full"
          width={1200}
          height={1200}
          alt=""
        />
      </div>
      <div className="w-full md:w-full lg:w-2/3">
        {/* Title  */}
        <div className="w-full hidden md:hidden lg:block">
          <h1 className="text-base md:text-base lg:text-xs font-medium">
            {title.length > 100 ? title.slice(0, 99) + "..." : title}
          </h1>
        </div>
        <div className="block md:block lg:hidden">
          <h1 className="text-sm md:text-base lg:text-xs font-medium">
            {title.length > 100 ? title.slice(0, 99) + "..." : title}
          </h1>
        </div>
        {/* Body  */}
        <div className="block md:hidden lg:hidden">
          <p className="text-gray-400 text-xs font-medium">
            {body.length > 100 ? body.slice(0, 99) + "..." : body}
          </p>
        </div>
        <div className="hidden md:block lg:hidden">
          <p className="text-gray-400 text-xs font-medium">
            {body.length > 200 ? body.slice(0, 199) + "..." : body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogCard;
