import React, { useEffect } from "react";
import AboutSection from "../components/home/AboutSection";
import BookingForm from "../components/bookings/BookingForm";
import HeroSection from "../components/bookings/HeroSection";

function Booings() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <div className="bg-[#fff] py-[30px]">
        <BookingForm />
      </div>
      <AboutSection />
    </div>
  );
}

export default Booings;
