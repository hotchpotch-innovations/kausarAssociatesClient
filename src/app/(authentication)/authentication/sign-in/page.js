import React from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import Link from "next/link";
import SignInForm from "../components/SignInForm";

const page = () => {
  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center">
        {/* Log In Form  */}
        <SignInForm />
        <BackToHomeButton />
      </div>
    </section>
  );
};

export default page;
