import React from "react";
import Accordion from "./Accordion";
import { faqData } from "../../../../public/fake-data/faq-data/faqFakeData";

const FAQ = () => {
  return (
    <section>
      <div className="content-container">
        <div>
          <h1 className="text-primary text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
            FAQ
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center my-4">
            Check out our FAQ list to get a better understanding of how
            everything work
          </h1>
          <div className="h-[1px] w-full bg-black"></div>
          {/* <div className="my-4 text-xs md:text-sm lg:text-sm">
            <p className="mb-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div> */}
        </div>

        <div className="mt-12">
          {faqData.map((data) => {
            return (
              <Accordion
                key={data?._id}
                title={data?.title}
                content={data?.content}
              ></Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
