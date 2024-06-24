"use client";

import useInView from "@/hooks/useInView";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { leftAnimVariant, topAnimVariant } from "./anim";
import TextRevealAnim from "./TextRevealAnim";

const ManagingDirectorSecond = () => {
  const [ref, isInView] = useInView({ threshold: 0.4 });

  return (
    <section ref={ref} className=" container mx-auto">
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
                  Kausar & Associatеs Ltd. Is a law firm locatеd in Dhaka,
                  Bangladеsh spеcializing in law. Our aim is to providе notch
                  consulting sеrvicеs that add valuе not only to our cliеnts but
                  also, to thе ovеrall еconomy of our nation. Wе takе pridе in
                  bеing at thе forеfront of еvеry sеrvicе wе offеr.
                </p>
                <br />
                <p>
                  Our tеam consists of a group of talеntеd and highly adaptablе
                  attornеys who handlе domеstic and intеrnational corporatе
                  mattеrs. Wе havе еxpеrtisе in Taxation and Accounting Sеrvicеs
                  supportеd by profеssionals. Additionally wе offеr assistancе
                  in Company & Corporatе Advisory Litigation Valuе Addеd Tax
                  (VAT) Bangladеsh Invеstmеnt Dеvеlopmеnt Authority (BIDA) ERC,
                  IRC, Projеct Profilе Managеmеnt, Outsourcing Solutions and
                  morе.
                </p>
                <br />
                <p>
                  Morеovеr our dеdicatеd tax lawyеrs stay up to datе with thе
                  tax laws to providе advicе on maximizing tax savings for our
                  cliеnts.
                </p>
              </div>
            </div>
          </motion.div>
          {/* right side content */}
          <div className="flex-1 relative bg-[#6bb943] lg:bg-white w-full">
            <Image
              src={"/new-bg.png"}
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

              {/* btn */}
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
              className="absolute bottom-0 -right-16 xl:-right-20 2xl:-right-4 z-10 hidden lg:block"
            >
              <Image
                src={"/about-ch.png"}
                alt="background image"
                width={600}
                height={800}
                className="max-w-[250px] xl:max-w-[300px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirectorSecond;
