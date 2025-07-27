import React, { useEffect, useRef } from "react";
import HeroSection from "../components/bio/HeroSection";
import AboutSection from "../components/home/AboutSection";
import Update from "../components/home/Update";
import Awards from "../components/bio/Awards";
import AwardsContent from "../components/bio/AwardsContent";
import Gallery from "../components/home/Gallery";

function BioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <HeroSection scrollRef={scrollRef} />
      <AboutSection scrollRef={scrollRef} />
      <Gallery />
      {/* <Awards /> */}
      {/* <AwardsContent /> */}
      <Update />
    </div>
  );
}

export default BioPage;
