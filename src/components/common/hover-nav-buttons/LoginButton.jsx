import Link from "next/link";
import React from "react";

const LoginButton = () => {
  return (
    <button className="text-xs md:text-sm lg:text-base px-4 py-1 border-2 hover:bg-blue-500 hover:text-white duration-500">
     <Link href={'/authentication/sign-in'}> Log in </Link>
    </button>
  );
};

export default LoginButton;
