"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const [image, setImage] = useState();
  // console.log(image);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleProfileImage = (e) => {
    const file = e.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader?.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader?.result);
      };
    }
  };

  const submitHandler = (data) => {
    data.profileImage = image;
    // console.log(data);
  };

  return (
    <div className="relative w-full md:w-96 lg:w-96 h-auto p-4 bg-blue-500 text-white rounded-sm mx-4">
      <div className="absolute -top-[40px] right-[42%] md:right-[152px]">
        <Image
          src={image || ""}
          alt="user"
          className="w-20 h-20  mx-auto border border-blue-400 rounded-full"
          width={400}
          height={200}
        ></Image>
      </div>

      <div className="mt-8 mb-2">
        <h2 className="text-center text-lg md:text-xl lg:text-xl">SIGN UP</h2>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="grid grid-cols-2 gap-4">
          {/* First Name Field  */}
          <div className="py-2">
            <label htmlFor="firstName" className="mb-2 text-sm">
              First Name:
            </label>
            <input
              {...register("firstName", {
                required: "User name is required",
              })}
              type="text"
              name="firstName"
              id="firstName"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.firstName?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.firstName?.message}
              </p>
            )}
          </div>

          {/* Last name field  */}
          <div className="py-2">
            <label htmlFor="lastName" className="mb-2 text-sm">
              Last Name:
            </label>
            <input
              {...register("lastName", {
                required: "User name is required",
              })}
              type="text"
              name="lastName"
              id="lastName"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.lastName?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.lastName?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>

        {/* Contact Form  */}
        <div className="grid grid-cols-2 gap-4">
          <div className="py-2">
            <label htmlFor="email" className="mb-2 text-sm">
              Email:
            </label>
            <input
              {...register("email", {
                required: "User email is required",
              })}
              type="text"
              name="email"
              id="email"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.email?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="py-2">
            <label htmlFor="phone" className="mb-2 text-sm">
              Phone:
            </label>
            <input
              {...register("phone", {
                required: "User phone is required",
              })}
              type="text"
              name="phone"
              id="phone"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.phone?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.phone?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.phone?.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="py-2">
            <label htmlFor="newPassword" className="mb-2 text-sm">
              New Password:
            </label>
            <input
              {...register("newPassword", {
                required: "User New Password is required",
              })}
              type="password"
              name="newPassword"
              id="newPassword"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.newPassword?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.newPassword?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.newPassword?.message}
              </p>
            )}
          </div>

          <div className="py-2">
            <label htmlFor="rePassword" className="mb-2 text-sm">
              Re-Password:
            </label>
            <input
              {...register("rePassword", {
                required: "User Re-Password is required",
              })}
              type="password"
              name="rePassword"
              id="rePassword"
              className={`w-full py-2 px-2 text-xs md:text-sm border rounded-md text-gray-600 ${
                errors.rePassword?.type === "required"
                  ? "border-red-400"
                  : "border-gray-200"
              }`}
            />
            {errors.rePassword?.type === "required" && (
              <p role="alert" className="text-xs text-red-500 italic">
                {errors.rePassword?.message}
              </p>
            )}
          </div>
        </div>

        <div className="my-2">
          <label
            className={`mx-auto flex flex-col justify-center items-center border ${
              image ? "border-blue-500" : "border-red-400"
            } text-gray-300 hover:text-gray-100 duration-500 rounded-md w-44 h-10 md:w-56 md:h-12 text-center cursor-pointer text-base md:text-xl font-medium`}
          >
            Select profile Photo
            <br />
            <input
              type="file"
              onChange={handleProfileImage}
              name="profileImage"
              accept="image/png , image/jpeg, image/webp"
              className="hidden"
            />
          </label>
        </div>

        {/* Submit Button  */}
        <div className="my-4">
          <input
            type="submit"
            value="SIGN IN"
            className="w-full cursor-pointer text-white bg-blue-300 hover:bg-blue-500 duration-500 py-2 text-center"
          />
        </div>
      </form>

      <div className="my-4">
        <p className="text-xs">
          You have an account? Please
          <span className="text-xs italic underline cursor-pointer text-blue-100 hover:text-blue-300 duration-500 mx-2">
            <Link href={"/authentication/sign-in"}>Sign In Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
