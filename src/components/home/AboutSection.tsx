import React from "react";
import { Link, useLocation } from "react-router-dom";

function AboutSection({ scrollRef }: { scrollRef?: any }) {
  const location = useLocation();
  return (
    <div className="px-[24px] py-[24px]" ref={scrollRef}>
      <div className="flex gap-[32px] justify-between  items-center lg:flex-row flex-col flex-wrap">
        <div className="lg:max-w-[650px] flex flex-col justify-between py-[20px] lg:ml-[120px]">
          <p className="text-center lg:text-[2.5rem] text-[1.5rem] font-[700] ">
            ABOUT <span className="text-[#D2C1B6]"> PRIDE OF HEAVEN</span>
          </p>
          <div className="flex flex-col gap-4 text-[0.895rem] mt-6">
            <p>
              Pride of Heaven is not just a record label, We are a prophetic
              movement. Founded to birth heaven’s sound on earth, we are a
              consecrated house raising voices that don’t just sing, they
              intercede, ignite, and awaken. Every project, every release, every
              gathering is Spirit-sponsored and birthed in the place of prayer.
              We are a tribe of Jesus-lovers, sold out to His will, committed to
              building altars that host His presence. In music, media, and
              ministry, our passion is to glorify the One who sent us. Through
              our expression, we are building a great nation of revivalists, men
              and women set apart to carry fire, truth, and intimacy into every
              city, every sound wave, and every soul. As the official home of
              Ebuka Songs and the governing body over the praying ministry
              School of the Spirit , Pride of Heaven stands at the intersection
              of worship and intimacy, of sound and surrender.
            </p>
          </div>
        </div>

        <img src="/pride of heaven.webp" className="lg:max-w-[500px] mx-auto" />
      </div>
    </div>
  );
}

export default AboutSection;
