import React from "react";

const AbsoluteText = ({ text, isTextWhite, isTextCenter, isText2, text2 }) => {
  return (
    <div className="relative h-14 md:h-16 lg:h-20">
      <div className="absolute top-0 w-full">
        <h1
          className={`text-4xl md:text-5xl lg:text-7xl font-bold ${
            isTextCenter ? "text-center" : "text-start"
          } opacity-10 ${isTextWhite ? "text-blue-200" : "text-blue-500"}`}
        >
          {text}
        </h1>
        {isText2 && (
          <h1
            className={` text-4xl md:text-5xl lg:text-7xl font-bold ${
              isTextCenter ? "text-center" : "text-start"
            } opacity-10 ${isTextWhite ? "text-blue-200" : "text-blue-500"}`}
          >
            {text2}
          </h1>
        )}
      </div>

      <div className="absolute top-1 md:top-2 lg:top-3 w-full">
        <h1
          className={`text-2xl md:text-3xl lg:text-5xl font-semibold ${
            isTextWhite ? "text-white" : "text-primary"
          } ${
            isTextCenter ? "text-center" : "text-start"
          } ml-4 md:ml-6 lg:ml-8`}
        >
          {text}
        </h1>
        {isText2 && (
          <h1
            className={`mt-3 md:mt-4 lg:mt-6 text-2xl md:text-3xl lg:text-5xl font-semibold ${
              isTextWhite ? "text-white" : "text-primary"
            } ${
              isTextCenter ? "text-center" : "text-start"
            } ml-4 md:ml-6 lg:ml-8`}
          >
            {text2}
          </h1>
        )}
      </div>
    </div>
  );
};

export default AbsoluteText;
