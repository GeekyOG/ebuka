import React from "react";
import { IoArrowDown } from "react-icons/io5";

function HeroSection({ scrollRef }) {
  const scrollTo = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the top of the section
      });
    }
  };

  return (
    <div className=" bg-[url('/hero.png')] bg-no-repeat bg-cover">
      <div className="min-h-[100vh] flex justify-center items-center bg-[#0000007e]">
        <div className="flex flex-col items-center">
          <p className=" lg:text-[6rem] text-[3rem] goldAnimate leading-[100%] font-[700]">
            Biography
          </p>
          <p className="lg:text-[1rem] text-[0.75rem] text-center font-[600]">
            Multi-award-winning gospel singer, songwriter, and
            music/video production
          </p>
          <button
            onClick={scrollTo}
            className="text-[#fff] border-[2px] rounded-[20px] border-[#fff] flex gap-[30px] items-center mt-[15px] "
          >
            <p> Scroll</p>
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
