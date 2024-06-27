import FaqList from "@/components/about-us/faq/FaqList";
import { SectionTitle } from "@/components/common/section-title/SectionTitle";
import Image from "next/image";
import { faqData } from "../../../../public/fake-data/faq-data/faqFakeData";

const FaqPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-8 sm:px-10 md:px-12 lg:px-20 xl:px-44 2xl:px-0 py-7 sm:py-9 md:py-12 lg:py-14 xl:py-16 2xl:py-20">
      <div className="flex flex-col-reverse md:flex-row gap-8 justify-between ">
        {/* left section */}
        <div className="flex-1">
          <SectionTitle
            titleLabel="Check out our FAQ list to see how everything work"
            subtitleLabel="Our best services"
            containerStyle="mt-0"
            contentCenter={false}
          />
          {/* faq */}
          <FaqList faqs={faqData} />
        </div>
        {/* right section */}
        <div className="flex-1">
          <Image
            src={
              "https://www.mmoser.com/wp-content/uploads/2022/02/law-firm-london-office-open-plan-desks-1-1200x675.jpg"
            }
            alt=""
            width={900}
            height={600}
            className="object-contain max-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
