export const SectionTitle = ({
  iconColor = "bg-blue-500",
  subtitleColor = "text-blue-600",
  subtitleLabel,
  titleLabel,
}) => {
  return (
    <div className="mb-3 mt-5 md:mb-4 md:mt-6 lg:mb-6 lg:mt-8 xl:mb-8 xl:mt-12 2xl:mb-8 2xl:mt-7 flex flex-col items-center gap-1">
      <div className="flex items-center gap-1 2xl:gap-3">
        <div className="relative flex justify-center items-center">
          <div className={`w-4 h-4 rounded-full absolute ${iconColor}`} />
          <div className=" w-4 h-4 border-2 border-black rounded-full absolute ml-3" />
        </div>

        <h2
          className={`text-xs md:text-sm xl:text-base 2xl:text-lg font-bold ml-4 2xl:ml-6 ${subtitleColor}`}
        >
          {subtitleLabel}
        </h2>
      </div>
      <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
        {titleLabel}
      </h1>
    </div>
  );
};
