import React, { useEffect, useRef } from "react";
import HeroSection from "../components/home/Herosection";
import LatestSingle from "../components/home/LatestSingle";
import AboutSection from "../components/home/AboutSection";
import LatestAlbum from "../components/home/LatestAlbum";
import AlbumCover from "../components/home/AlbumCover";
import Video from "../components/home/Video";
import Update from "../components/home/Update";
import Gallery from "../components/home/Gallery";
import ArtistAlbums from "../ui/Albums";
import ImageSwiper from "../components/gallery/ImageSwiper";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const latestSingleRef = useRef<HTMLDivElement>(null);
  return (
    <div className="">
      <HeroSection scrollRef={latestSingleRef} />
      <AboutSection />
      <LatestSingle scrollRef={latestSingleRef} />
      <LatestAlbum />
      <AlbumCover />
      <Video />
      <Update />
      <Gallery />
      <ImageSwiper />
      {/* <ArtistAlbums /> */}
    </div>
  );
}

export default HomePage;
