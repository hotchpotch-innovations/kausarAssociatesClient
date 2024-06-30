import BanglaArticlesSection from "@/components/homepage/bangla-articles-section/BanglaArticlesSection";
import BottomSection from "@/components/homepage/bottom-section/BottomSection";
import CaseStudies from "@/components/homepage/case-studies/CaseStudies";
import GallerySection from "@/components/homepage/gallery-section/GallerySection";
import Hero from "@/components/homepage/hero/Hero";
import HubSection from "@/components/homepage/hub-section/HubSection";
import Incorporation from "@/components/homepage/incorporation/Incorporation";
import Licensing from "@/components/homepage/licensing/Licensing";
import ManagingDirector from "@/components/homepage/managing-director/ManagingDirector";
import ManagingDirectorSecond from "@/components/homepage/managing-director/ManagingDirectorSecond";
import NewsSection from "@/components/homepage/news-section/NewsSection";
import OurClientSection from "@/components/homepage/our-client-section/OurClientSection";
import ParticlesBackground from "@/components/homepage/particles-bg/ParticlesBackground";
import Services from "@/components/homepage/services/Services";
import SkillHubSection from "@/components/homepage/skillHub-section/SkillHubSection";
import TaxationSection from "@/components/homepage/taxation-section/TaxationSection";
import Team from "@/components/homepage/team/Team";
import VideoSection from "@/components/homepage/video-section/VideoSection";

export default function Home() {
  return (
    <main>
      {/* <ParticlesBackground /> */}
      <Hero></Hero>
      <ManagingDirectorSecond />
      {/* <ManagingDirector></ManagingDirector> */}
      <Services isBg={false}></Services>
      {/* <Incorporation isBg={false}></Incorporation> */}
      <Licensing isBg={false}></Licensing>
      <Team></Team>
      <HubSection></HubSection>
      <TaxationSection></TaxationSection>
      <CaseStudies />
      {/* <GallerySection></GallerySection> */}
      <NewsSection />
      <BanglaArticlesSection></BanglaArticlesSection>
      <VideoSection></VideoSection>
      <SkillHubSection></SkillHubSection>
      <OurClientSection></OurClientSection>
      <BottomSection></BottomSection>
    </main>
  );
}
