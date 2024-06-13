import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function TeamBanner() {
  return (
    <div className="flex justify-center items-center relative">
      {/* overlay element */}
      <div className="bg-gradient-to-b  from-blue-400/30 to-blue-400/30 w-full h-full z-10 absolute" />
      <Image
        src="https://ddpalaw.com/wp-content/uploads/2023/07/Di-Pietro-Partners-staff1.jpg"
        alt="people of kauser & associates"
        width={2400}
        height={1600}
        className=" h-[200px] lg:h-[350px] 2xl:h-[450px] object-cover bg-left-top"
      />

      <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-7 absolute z-20">
        <h1 className="text-white text-6xl font-bold">Our Team</h1>
        {/* <div className="flex flex-col sm:flex-row items-center gap-3 py-2 md:py-3 lg:py-4 xl:py-5 2xl:py-6 px-4 md:px-5 lg:px-7 xl:px-8 2xl:px-10 text-2xl bg-blue-500 text-white font-bold rounded-full">
          <Link
            href="/"
            className="opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <div>
            <FiArrowRight size={18} color="#fff" className="rotate-180" />
          </div>
          <p className="cursor-text">Team</p>
        </div> */}
      </div>
    </div>
  );
}
