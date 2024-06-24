import { serviceCardBgColor } from "@/data/service-api";
import Image from "next/image";
import Link from "next/link";

const ServiceCatCard = ({ card, idx }) => {
  return (
    <div
      className="text-black w-[290px] h-[180px] md:w-[320px] md:h-[240px] lg:w-[270px] lg:h-[190px] xl:w-[320px] xl:h-[250px] 2xl:w-[380px] 2xl:h-[290px] rounded-t-full relative service-cat-card transition-all ease-in-out duration-500 mx-auto"
      style={{
        backgroundColor: `${serviceCardBgColor[idx]}`,
      }}
    >
      <div className="flex justify-center">
        <Image
          src={card.icon ? card.icon : "/employee-benefit.png"}
          alt="employee benifit"
          width={100}
          height={100}
          className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 bg-white p-1 xl:p-3 rounded-full -mt-6 xl:-mt-8 transition-all ease-in-out duration-500"
        />
      </div>

      {/* title & btn */}
      <div className="flex flex-col items-center gap-3 xl:gap-4 2xl:gap-5 max-w-[230px] 2xl:max-w-[320px] mx-auto mt-4 2xl:mt-7">
        {/* TODO: When making data dynamic -> title is max 23 character long */}
        <Link
          href={`/services/${card._id}`}
          className="font-bold text-base md:text-lg lg:text-base xl:text-lg 2xl:text-2xl text-center text-black/80"
        >
          {card.title}
        </Link>
        {/* TODO: When making data dynamic -> text desc will be max 100 character long */}
        <p className="text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-base text-slate-600 text-center">
          {card.description[0].slice(0, 111)}...
        </p>

        <div className="absolute -bottom-3 lg:-bottom-4 2xl:-bottom-5">
          <button className=" text-xs md:text-sm 2xl:text-base px-7 py-[6px] xl:px-8 xl:py-2 border border-blue-500 hover:border-transparent rounded-full hover:bg-blue-500 hover:text-white duration-500 whitespace-nowrap font-semibold">
            <Link href={`/services/${card._id}`}>See more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCatCard;
