import React from "react";


const PresidentMessage = () => {
  return (
    <section>
      <div className="content-container">
        <div className="w-full flex justify-between items-end mb-6">
          <div className="w-36 h-44 border"></div>
          <div className="text-base md:text-lg text-gray-600 font-medium">
            PRESIDENT MESSAGE
          </div>
        </div>
        <div className="text-xs md:text-sm lg:text-sm text-gray-500 text-justify mb-8">
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </div>
        <div className="text-gray-500 text-start">
            <p className="text-lg md:text-xl lg:text-xl text-black">Md Kausar Hossain</p>
            <p className="text-xs md:text-sm lg:text-sm">Managing Director</p>
            <p className="text-xs md:text-sm lg:text-sm">Kausar & Associates Ltd</p>
        </div>
      </div>
    </section>
  );
};

export default PresidentMessage;
