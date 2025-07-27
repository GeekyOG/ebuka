import React, { useEffect } from "react";
import HeroSection from "../components/tours/HeroSection";
import Update from "../components/home/Update";
import UpcomingTour from "../components/tours/UpcominTour";

function Tours() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <UpcomingTour />
      <Update />
    </div>
  );
}

export default Tours;
