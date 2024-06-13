import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <>
      <button className=" text-xs md:text-sm lg:text-base px-4 py-1 border border-blue-500 lg:border-gray-200 lg:hover:border-transparent rounded-md hover:bg-blue-500 hover:text-white duration-500 whitespace-nowrap font-semibold">
        <Link href={"/authentication/sign-in"}> Log in </Link>
      </button>
    </>
  );
};

export default LoginButton;
