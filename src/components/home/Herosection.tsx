import React from "react";
import { IoArrowDown } from "react-icons/io5";

function HeroSection({ scrollRef }) {
  const scrollToLatestSingle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the top of the section
      });
    }
  };

  return (
    <div className=" bg-[url('/hero.png')] bg-no-repeat bg-cover bg-top">
      <div className="min-h-[100vh] flex justify-center items-center bg-[#0000007e]">
        <div className="flex flex-col items-center">
          <p className="montserrat lg:text-[5rem] text-[3rem] goldAnimate leading-[100%] font-[900]">
            Ebuka Songs
          </p>
          <p className="lg:text-[1.5rem] text-[1rem] font-[700] max-w-[700px] text-center px-[24px]">
            Worship that <span className="goldAnimate">breaks yokes.</span> A
            voice that stirs hunger for{" "}
            <span className="goldAnimate">Jesus</span>.
          </p>

          <button
            onClick={scrollToLatestSingle}
            className="text-[#fff] border-[2px] rounded-[20px] border-[#fff] flex gap-[30px] items-center mt-[15px] "
          >
            <p> Explore</p>
            <div className="p-[4px] rounded-[50%] border-[2px]">
              <IoArrowDown size={10} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
