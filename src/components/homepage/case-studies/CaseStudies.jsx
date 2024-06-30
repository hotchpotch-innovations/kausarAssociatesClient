import { SectionTitle } from "@/components/common/section-title/SectionTitle";
import CaseStudiesCard from "./CaseStudiesCard";

const CaseStudies = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-8">
      <SectionTitle
        titleLabel={"Case Studies"}
        subtitleLabel={"Law firm and company"}
      />

      {/* content */}
      <CaseStudiesCard />
    </section>
  );
};

export default CaseStudies;
