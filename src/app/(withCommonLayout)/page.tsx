"use client";
import AboutSection from "../components/HomePage/AboutSection";
import FAQSection from "../components/HomePage/FAQSection";
import HeroSection from "../components/HomePage/HeroSection";
import ResearchCaseStudies from "../components/HomePage/ResearchCaseStudies";
import StatsSection from "../components/HomePage/StatsSection";
import TalkProjectSection from "../components/HomePage/TalkProjectSection";
import WhyChooseUs from "../components/HomePage/WhyChooseUs";

export default function Home() {
  return (
    <div>
      {" "}
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <WhyChooseUs />
      <TalkProjectSection />
      <ResearchCaseStudies />
      <FAQSection />
    </div>
  );
}
