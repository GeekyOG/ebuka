import React, { useEffect } from "react";
import Update from "../components/home/Update";
import HeroSection from "../components/gallery/HeroSection";
import GalleryImages from "../components/gallery/Gallery";

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <GalleryImages />
      <Update />
    </div>
  );
}

export default Gallery;
