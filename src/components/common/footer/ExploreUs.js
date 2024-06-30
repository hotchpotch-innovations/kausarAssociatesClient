import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const ExploreUs = () => {
  return (
    <div className="col-span-1 mt-4 md:mt-0 lg:mt-0">
      <div className="text-xs">
        <div>
          <h1 className="text-base md:text-base lg:text-lg font-semibold uppercase text-primary">
            Get us
          </h1>
        </div>

        <div className="my-2 text-xs">
          <ul>
            <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
              <Link href={"/"}>Web mail</Link>
            </li>
            <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
              <Link href={"/"}>WhatsApp</Link>
            </li>
            <li className="leading-5 hover:text-blue-400 transition-all duration-300 ease-in-out cursor-pointer">
              <Link href={"/"}>Messenger</Link>
            </li>
          </ul>
        </div>
        {/* <div className='w-32 h-32 border'></div> */}
        <div className="mt-2">
          <p>Explore Us more in social-</p>
        </div>
        <div className="mt-2">
          <Link href="/" className="group">
            <FaFacebookF className="inline ml-2 lg:ml-4 text-sm lg:text-base group-hover:text-blue-500 transition duration-300 ease-in" />
          </Link>
          <Link href="/" className="group">
            <FaTwitter className="inline ml-2 lg:ml-4 text-base lg:text-lg group-hover:text-blue-500 transition duration-300 ease-in" />
          </Link>
          <Link href="/" className="group">
            <FaYoutube className="inline ml-2 lg:ml-4 text-base lg:text-lg group-hover:text-blue-500 transition duration-300 ease-in" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreUs;
