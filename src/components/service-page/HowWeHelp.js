import Image from "next/image";
import React from "react";

const HowWeHelp = ({ data }) => {
  console.log(data, "1a");
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="content-container">
        {data.extra &&
          data.extra.list.map((list, idx) => {
            console.log(list, "list");
            return (
              <div key={idx} className="mb-6 md:mb-8 xl:mb-10">
                <div className="mb-4">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                    {list?.extraTitle}
                  </h2>
                  {list.extraDesc && (
                    <p className="text-black/80 mt-1">{list?.extraDesc}</p>
                  )}
                </div>
                <div className="flex-none md:flex lg:flex justify-between">
                  <div className="w-full md:w-1/2 lg:w-1/2  mb-6 md:mb-0 lg:mb-0">
                    <ul className="list-disc mx-8 text-sm lg:text-base 2xl:text-lg">
                      {list.extraList.map((exList, idx) => (
                        <li key={idx} className="mb-2 text-gray-600">
                          {exList}
                        </li>
                      ))}
                      {/* <li className="mb-2 text-gray-600">
                      Preparation and Submission of Income Tax Returns for Local
                      and Expat Individuals
                    </li>
                    <li className="mb-2 text-gray-600">
                      Preparation and Submission of Income Tax Returns for Local
                      and Expat Individuals
                    </li>
                    <li className="mb-2 text-gray-600">
                      Preparation and Submission of Income Tax Returns for Local
                      and Expat Individuals
                    </li>
                    <li className="mb-2 text-gray-600">
                      Preparation and Submission of Income Tax Returns for Local
                      and Expat Individuals
                    </li> */}
                    </ul>
                  </div>
                  {/* image */}
                  {idx === 0 && (
                    <div className="w-full md:w-1/2 lg:w-1/2 mb-6 md:mb-0 lg:mb-0">
                      <Image
                        src={
                          "https://png.pngtree.com/png-clipart/20230825/original/pngtree-provide-legal-advice-isolated-concept-vector-illustration-picture-image_8699191.png"
                        }
                        alt=""
                        width={1200}
                        height={1200}
                        className="w-3/5 h-auto mx-auto"
                      ></Image>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        {data.extra?.pricingTitle && (
          <div>
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                {data.extra?.pricingTitle}
              </h2>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-2 text-justify">{data.extra?.pricingDesc}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowWeHelp;
