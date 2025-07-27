import React from "react";
import { Link, useLocation } from "react-router-dom";

function AboutSection({ scrollRef }: { scrollRef?: any }) {
  const location = useLocation();
  return (
    <div className="px-[24px] py-[24px]" ref={scrollRef}>
      <div className="flex gap-[32px] justify-between  items-center lg:flex-row flex-col flex-wrap">
        <div className="lg:max-w-[650px] flex flex-col justify-between py-[20px] lg:ml-[120px]">
          <p className="text-center lg:text-[2.5rem] text-[1.5rem] font-[700] ">
            About
            <span className="text-[#D2C1B6]"> Ebuka Blessed</span>
          </p>
          <div className="flex flex-col gap-4 text-[0.895rem]">
            <p>Who Is Ebuka Songs?</p>
            <p>
              Ebuka Songs is a gospel music minister whose unique sound is
              igniting revival in hearts around the world. His music is more
              than melody — it’s an altar.
            </p>
            <p>
              With soul-lifting songs like “David’s Cry,” he ministers from a
              place of brokenness, healing, and passion for God. His ministry
              emphasizes repentance, intimacy, and the saving grace of Jesus
              Christ.
            </p>
            <p>
              From street corners to global platforms, Ebuka’s journey reflects
              one truth: Only Jesus can save.
            </p>
          </div>
          {location.pathname !== "/biography" && (
            <Link to="/biography">
              <button className="btnGradient w-[100%] rounded-[20px] max-w-[250px] mx-auto border-[2px] border-[#fff] mt-[20px] text-[#fff]">
                Biography
              </button>
            </Link>
          )}
        </div>

        <img src="/4.jpeg" className="lg:max-w-[500px] mx-auto" />
      </div>
    </div>
  );
}

export default AboutSection;
