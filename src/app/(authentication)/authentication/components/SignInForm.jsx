"use client";
import Link from "next/link";
import React from "react";

const SignInForm = () => {
  return (
    <div className="w-full md:w-96 lg:w-96 h-auto p-4 bg-blue-500 text-white rounded-sm mx-4">
      <div className="mt-4 mb-2">
        <h2 className="text-center text-lg md:text-xl lg:text-xl">SIGN IN</h2>
      </div>
      <div className="py-4">
        <div className="py-2">
          <label htmlFor="userName" className="mb-2 text-sm">
            Email:
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600"
          />
        </div>
        <div className="py-2">
          <label htmlFor="password" className="mb-2 text-sm">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600"
          />
        </div>
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center">
          <div>
            <input type="checkbox" name="remember" id="" />
            <label htmlFor="" className="text-xs inline mx-2">
              Remember me
            </label>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-xs inline mx-2 cursor-pointer hover:underline hover:text-blue-500 duration-500"
            >
              Forget Password?
            </label>
          </div>
        </div>
      </div>
      <div className="my-4">
        <input
          type="button"
          value="SIGN IN"
          className="w-full cursor-pointer text-white bg-blue-300 hover:bg-blue-500 duration-500 py-2 text-center"
        />
      </div>
      <div className="my-4">
        <p className="text-xs">
          You have not an account? Please
          <span className="text-xs italic underline cursor-pointer text-blue-100 hover:text-blue-200 duration-500 mx-2">
            <Link href={"/authentication/sign-up"}>Sign Up Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
