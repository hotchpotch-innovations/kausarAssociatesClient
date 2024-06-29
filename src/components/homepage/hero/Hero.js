import Image from "next/image";
import Slider from "./Slider";
import SliderSecond from "./SliderSecond";

const Hero = () => {
  return (
    <section className="relative">
      {/* <div className="relative z-[-2] lg:z-[0] w-full h-[40vh] md:h-[60vh] lg:h-[90vh] 2xl:h-[800px]"> */}
      <Image
        src={"/2nd-bg.png"}
        alt="background image"
        width={4000}
        height={1000}
        className="absolute top-0 left-0 h-[660px] md:h-[380px] lg:h-[125%] 2xl:h-[120%] w-full"
      />
      <div>
        {/* <Slider /> */}
        <SliderSecond />
      </div>
    </section>
  );
};

export default Hero;
