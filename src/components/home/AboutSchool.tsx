import React from "react";
import { Link, useLocation } from "react-router-dom";
import JoinUsForm from "../bio/JoinUsForm";

function AboutSection({ scrollRef }: { scrollRef?: any }) {
  const location = useLocation();
  return (
    <div className="px-[24px] py-[24px]" ref={scrollRef}>
      <div className="flex gap-[32px] justify-between  items-center lg:flex-row flex-col flex-wrap">
        <div className="lg:max-w-[650px] flex flex-col justify-between py-[20px] lg:ml-[120px]">
          <p className="text-center lg:text-[2.5rem] text-[1.5rem] font-[700] ">
            School
            <span className="text-[#D2C1B6]"> Of The Spirit</span>
          </p>
          <div className="space-y-4">
            <p className="text-[1rem] font-[700]">
              A Generation Yielded. A Mandate Burning. A School of Fire.
            </p>

            <p className="text-[0.865rem] text-neutral-400">
              School of the Spirit is not a church. It is not an event. It is a
              move of God, a praying army, a womb for revival.
            </p>

            <p className="text-[0.865rem] text-neutral-400">
              Founded under the covering of Pride of Heaven, School of the
              Spirit is the ministry expression of what happens when men choose
              to live yielded, consecrated, and aligned. It is a school not
              built with walls, but with altars, where the curriculum is prayer,
              intimacy, brokenness, and the leading of the Holy Spirit.
            </p>

            <p className="text-[1rem] font-[700]">Our Vision</p>
            <p className="text-[0.865rem] text-neutral-400">
              To raise a generation of revivalists whose lives are built in the
              secret place and poured out in obedience to Jesus, priests and
              kings who live by the voice of the Spirit of God, not the voice of
              the crowd.
            </p>

            <p className="text-[1rem] font-[700]">What We Do</p>
            <p className="text-[0.865rem] text-neutral-400">
              <span className="font-[700]">Intercessory Prayer Gatherings</span>
              <br />
              We host territorial prayer rooms, vigils, and altar nights where
              incense rises and the heavens respond. These aren’t just meetings,
              they are divine assignments.
            </p>
            <p className="text-[0.865rem] text-neutral-400">
              <span className="font-[700]">Impartation & Discipleship</span>
              <br />
              We raise men and women in the knowledge of the Spirit, not through
              theory, but by encounter. Through teachings, fasting retreats, and
              word immersions, we train lives that burn.
            </p>
            <p className="text-[0.865rem] text-neutral-400">
              <span className="font-[700]">Worship & Travail Nights</span>
              <br />
              Sounds are birthed, destinies are unlocked, and people are
              baptized in hunger. The atmosphere shifts when yielded vessels
              gather.
            </p>
            <p className="text-[0.865rem] text-neutral-400">
              <span className="font-[700]">Nationwide Movements</span>
              <br />
              From university campuses to cities across Nigeria, Kenya, South
              Africa, USA, UK, Canada and around the world, School of the Spirit
              is mobilization to pray, obey, and align.
            </p>

            <p className="text-[1rem] font-[700]">Our Message is Simple:</p>
            <p className="text-[0.865rem] text-neutral-400">
              Come up higher. Go deeper. Be yielded. Be burning. Be sent.
            </p>

            <p className="text-[0.865rem] text-neutral-400">
              This is not a ministry for everyone. It is for those who have
              heard the call: “Come away with Me. Build My altar. Carry My
              fire.”
            </p>

            <p className="text-[1rem] font-[700]">Join the Family</p>
            <p className="text-[0.865rem] text-neutral-400">
              If you feel a stirring to pray, a desire to know the Holy Spirit,
              or a longing to be part of something deeper than routine
              Christianity, this is for you.
            </p>

            <p className="text-[0.865rem] text-neutral-400">
              Not events, but altars.
              <br />
              Not hype, but hunger.
              <br />
              Not performance, but presence.
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
        <JoinUsForm />{" "}
      </div>
    </div>
  );
}

export default AboutSection;
