import React from "react";
import { IoArrowDown } from "react-icons/io5";

function HeroSection() {
  return (
    <div className="animateBg bg-no-repeat bg-cover">
      <div className="min-h-[60vh] flex justify-center items-center bg-[#0000007e]">
        <div className="flex flex-col items-center mt-[150px]">
          {/* <div className="h-[60px] border-[1px] w-[1px] mx-auto"></div> */}

          <p className="text-[#fff] font-[600]">Invite Ebuka Songs</p>
          <p className="lg:text-[6rem] text-[3rem] goldAnimate leading-[100%] font-[700]">
            BOOKING
          </p>
          <p className="text-[#fff] font-[600] max-w-[650px] text-center">
            To invite Ebuka Songs for your church event, concert, or worship
            night, kindly fill the form below or reach out via the official
            contact details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
