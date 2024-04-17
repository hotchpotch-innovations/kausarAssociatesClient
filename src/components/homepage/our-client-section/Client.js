import Image from "next/image";
import React from "react";

const Client = () => {
  return (
    <div className="mx-2 md:mx-3 lg:mx-4">
      <Image
        src={
          "https://st3.depositphotos.com/1356762/16620/v/450/depositphotos_166207392-stock-illustration-law-firm-logo-icon-vector.jpg"
        }
        alt=""
        width={400}
        height={200}
        className="w-56 h-28"
      ></Image>
    </div>
  );
};

export default Client;
