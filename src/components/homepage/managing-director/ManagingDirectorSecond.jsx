"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { leftAnimVariant, topAnimVariant } from "./anim";
import TextRevealAnim from "./TextRevealAnim";
import useInView from "@/hooks/useInView";

const ManagingDirectorSecond = () => {
  const [ref, isInView] = useInView({
    triggerOnce: true, // to grigger the animation only once
    observerOpt: {
      threshold: 0.4, // when 0.1 -> 10% of the component is in view
    },
  });

  return (
    // <section ref={ref} className="bg-[url('/pattern.png')] bg-no-repeat bg-top">
    <section ref={ref} className="">
      <div className="container mx-auto mt-[25%] sm:mt-[13%] md:mt-[10%] 2xl:mt-[7%]">
        <div className="px-8 py-6 lg:px-12 md:py-8 xl:px-24 lg:py-16 xl:py-20 2xl:py-28">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* left side content */}
            <motion.div
              variants={leftAnimVariant}
              initial="initial"
              whileInView={"enter"}
              viewport={{
                once: true,
              }}
              className="flex-1 flex flex-col gap-3"
            >
              <div className="flex flex-col gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">
                <div>
                  <h3 className="font-questrial text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#0A0A0A]">
                    About
                  </h3>
                  {/* <h2 className="font-amaranth font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[#0A0A0A]">
                  Kauser & Associates Ltd
                </h2> */}
                  <AnimatePresence>
                    <TextRevealAnim
                      isInView={isInView}
                      texts={["Kauser", "&", "Associates", "Ltd"]}
                      textStyle="font-amaranth font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-[#0A0A0A]"
                    />
                  </AnimatePresence>
                </div>

                <div className="text-black text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-justify">
                  <p>
                    Kausar & Associates Ltd. Is a law firm located in Dhaka,
                    Bangladesh specializing in law. Our aim is to provide notch
                    consulting services that add value not only to our clients
                    but also, to the overall economy of our nation. We take
                    pride in being at the forefront of every service we offer.
                  </p>
                  <br />
                  <p>
                    Our team consists of a group of talented and highly
                    adaptable attorneys who handle domestic and international
                    corporate matters. We have expertise in Taxation and
                    Accounting Services supported by professionals. Additionally
                    we offer assistance in Company & Corporate Advisory
                    Litigation Value Added Tax (VAT) Bangladesh Investment
                    Development Authority (BIDA) ERC, IRC, Project Profile
                    Management, Outsourcing Solutions and more.
                  </p>
                  <br />
                  <p>
                    Moreover our dedicated tax lawyers stay up to date with the
                    tax laws to provide advice on maximizing tax savings for our
                    clients.
                  </p>
                </div>
              </div>
            </motion.div>
            {/* right side content */}
            <div className="flex-1 relative bg-blue-600 lg:bg-white w-full">
              <Image
                src={"/bg-image-2.png"}
                alt="background image"
                width={600}
                height={800}
                className="hidden lg:block"
              />
              <motion.div
                variants={topAnimVariant}
                initial="initial"
                whileInView={"enter"}
                viewport={{
                  once: true,
                }}
                className="static lg:absolute left-[70px] xl:left-20 2xl:left-24 top-0 z-10 h-full flex flex-col justify-center px-7 py-5 sm:px-12 sm:py-8 lg:px-0 lg:py-0 max-w-full lg:max-w-[200px] xl:max-w-[240px] 2xl:max-w-[320px] text-white"
              >
                <h2 className="font-questrial text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-[2.5rem] capitalize">
                  Let&apos;s grow <br />{" "}
                  <span className="font-amaranth font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl capitalize">
                    together
                  </span>
                </h2>
                <p className="text-sm md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-semibold mt-2 lg:mt-3 xl:mt-4 2xl:mt-5">
                  Join our award-winning team, and enjoy a creative, dynamic and
                  inclusive culture focused.
                </p>

                <div className="mt-3 lg:mt-6 xl:mt-8 2xl:mt-10">
                  <button className="py-2 px-2 md:px-4 text-white bg-black rounded-md transition-colors ease-in-out duration-300 font-medium flex items-center gap-2 group text-sm lg:text-base group">
                    Enroll Now
                    <span className="relative right-0 group-hover:-right-1 md:group-hover:-right-2 transition-all duration-300 ease-in-out">
                      <FiArrowRight size={18} color="#fff" />
                    </span>
                  </button>
                </div>
              </motion.div>
              <motion.div
                variants={topAnimVariant}
                initial="initial"
                whileInView={"enter"}
                viewport={{
                  once: true,
                }}
                className="absolute bottom-0 -right-14 xl:-right-20 2xl:-right-4 z-10 hidden lg:block"
              >
                <Image
                  src={"/director-1.webp"}
                  alt="background image"
                  width={600}
                  height={800}
                  className="max-w-[250px] xl:max-w-[300px] max-h-[360px] xl:max-h-[400px] 2xl:max-h-[450px] object-contain"
                />
              </motion.div>
            </div>
            {/* 2nd version */}
            {/* <div className="flex-1 relative bg-[#6bb943] lg:bg-white w-full">
            <Image
              src={"/BG_line-01.png"}
              alt="background image"
              width={600}
              height={800}
              className="hidden lg:block -rotate-[7deg]"
            />
            <div className="absolute right-8 top-7">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
                className="absolute top-0 right-0"
              >
                <Image
                  src={"/Line-01.png"}
                  alt="service-icon"
                  width={600}
                  height={800}
                />
              </motion.div>
              <Image
                src={"/mgd-2.webp"}
                alt="background image"
                width={600}
                height={800}
                className="hidden lg:block max-h-[400px] object-contain relative z-40"
              />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorSecond;
