import React, { useEffect, useRef } from "react";
import HeroSection from "../components/videos/HeroSection";
import Update from "../components/home/Update";
import Gallery from "../components/videos/Gallery";

function Videos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <HeroSection scrollRef={scrollRef} />
      <div className="bg-[#fff]" ref={scrollRef}>
        <Gallery />
      </div>

      <Update />
    </div>
  );
}

export default Videos;
