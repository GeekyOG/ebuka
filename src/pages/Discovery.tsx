import React, { useEffect, useRef } from "react";

import AboutSection from "../components/home/AboutSection";
import Update from "../components/home/Update";
import HeroSection from "../components/discovery/HeroSection";
import Gallery from "../components/discovery/Gallery";

function Discovery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <HeroSection scrollRef={scrollRef} />
      <Gallery scrollRef={scrollRef} />

      <Update />
    </div>
  );
}

export default Discovery;
