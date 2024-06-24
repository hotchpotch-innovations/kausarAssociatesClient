const ServicesCardLoader = () => {
  return (
    <div className="py-10 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 content-container mx-auto max-w-screen-2xl flex flex-col gap-4 md:gap-6 xl:gap-8">
      {/* text */}
      <div className="mb-3 mt-5 md:mb-4 md:mt-6 lg:mb-6 lg:mt-8 xl:mb-8 xl:mt-12 2xl:mb-8 2xl:mt-7 flex flex-col items-center gap-1">
        <div className="w-full max-w-[100px] md:max-w-[140px] xl:max-w-[180px] h-4 md:h-5 xl:h-6 bg-gray-200 rounded-lg" />
        <div className="w-full max-w-[200px] md:max-w-[290px] xl:max-w-[330px] h-6 md:h-7 xl:h-8 bg-gray-200 rounded-lg" />
      </div>

      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-16 2xl:px-20 max-w-screen-2xl mx-auto">
        <div className="w-[290px] h-[180px] md:w-[320px] md:h-[240px] lg:w-[270px] lg:h-[190px] xl:w-[320px] xl:h-[250px] 2xl:w-[380px] 2xl:h-[290px] bg-slate-100 rounded-t-full" />
        <div className="w-[290px] h-[180px] md:w-[320px] md:h-[240px] lg:w-[270px] lg:h-[190px] xl:w-[320px] xl:h-[250px] 2xl:w-[380px] 2xl:h-[290px] bg-slate-100 rounded-t-full" />
        <div className="w-[290px] h-[180px] md:w-[320px] md:h-[240px] lg:w-[270px] lg:h-[190px] xl:w-[320px] xl:h-[250px] 2xl:w-[380px] 2xl:h-[290px] bg-slate-100 rounded-t-full" />
        {/* //////////////////// */}
      </div>
    </div>
  );
};

export default ServicesCardLoader;
