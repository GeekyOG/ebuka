import React from "react";
import { IoArrowDown } from "react-icons/io5";

function HeroSection({ scrollRef }: { scrollRef: any }) {
  const scrollToLatestSingle = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the top of the section
      });
    }
  };

  return (
    <div className="bg-[url('/hero.webp')] bg-no-repeat bg-cover bg-top">
      <div className="min-h-[100vh] flex justify-center items-center bg-[#0000007e]">
        <div className="flex flex-col items-center">
          <p className="montserrat lg:text-[5rem] text-center text-[2.5rem] goldAnimate leading-[100%] font-[900]">
            Pride of Heaven
          </p>
          <p className="lg:text-[1.5rem] text-[1rem]  md:font-[700] max-w-[700px] text-center px-[24px]">
            A Jesus Tribe, Sponsored by the Spirit, One with God, and Great
            Nation of Revivalists
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
