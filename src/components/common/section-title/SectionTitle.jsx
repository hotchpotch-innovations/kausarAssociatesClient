/*
 * @params iconColor -> used to change subtitle icon color ===> type: string
 * @params subtitleColor -> used to change subtitle text color ===> type: string
 * @paramas containerStyle -> main purpus is to give container margin top but can be used to give other styles. Landing pages require margin top so change it carefully ===> type: string
 * @params contentCenter -> used to make the component data align center or start ===> type: boolean
 * @params subtitleLabel -> is the content text of the subtitle ===> type: string
 * @parmas titleLabel -> is the content text of the title ===> type: string
 */

export const SectionTitle = ({
  iconColor = "bg-blue-500",
  subtitleColor = "text-blue-600",
  containerStyle = "mt-5 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-7",
  contentCenter = true,
  subtitleLabel,
  titleLabel,
}) => {
  return (
    <div
      className={`mb-3 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-8 flex flex-col gap-1 ${
        contentCenter ? "items-center" : "items-start"
      } ${containerStyle}`}
    >
      <div className="flex items-center gap-1 2xl:gap-3">
        <div className="relative flex justify-center items-center ml-3">
          <div className={`w-4 h-4 rounded-full absolute ${iconColor}`} />
          <div className=" w-4 h-4 border-2 border-black rounded-full absolute ml-3" />
        </div>

        <h2
          className={`text-xs lg:text-sm 2xl:text-base font-bold ml-4 2xl:ml-6 ${subtitleColor}`}
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
