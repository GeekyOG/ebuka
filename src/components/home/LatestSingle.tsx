import React from "react";
import Container from "../../ui/Container";
import { useQuery } from "@tanstack/react-query";
import { getLatestSingle } from "../../api/apis";
import { Link } from "react-router-dom";

function LatestSingle({ scrollRef }: { scrollRef: any }) {
  const latestSingleQuery = useQuery({
    queryKey: ["latest-single"],
    queryFn: getLatestSingle,
  });

  return (
    <div
      className="py-[50px] bg-[#fff] text-[#000]"
      id="latest"
      ref={scrollRef}
    >
      {latestSingleQuery?.isSuccess && latestSingleQuery?.data && (
        <Container className="flex justify-center lg:flex-row flex-col-reverse items-center px-[24px]">
          <div className="flex lg:gap-[32px] lg:flex-row flex-col">
            <img
              src={`/Artist picture.webp`}
              className="lg:max-w-[400px] object-cover"
            />

            <div className="max-w-[450px] flex flex-col justify-between py-[100px] px-[24px]">
              <p className="text-center text-[2rem] font-[700]">
                OUR ARTIST: Ebuka Songs
              </p>
              <p>
                Ebuka Emmanuel Hillary, known as Ebuka Songs, The Apostle of
                Fire is more than a gospel singer, he is a voice birthed in the
                secret place, called to awaken a generation through songs of
                surrender, fire, and intimacy. Raised in a humble background and
                deeply rooted in Christian values, Ebuka’s life has been marked
                by a deep hunger for God from an early age. His journey into
                music was not driven by ambition, but by love forn God,
                encounters with Jesus, raw moments with the Holy Spirit that
                became the wellspring of his sound. With no desire for fame or
                applause, he began leading worship on university campuses, in
                small gatherings, and prayer meetings, carrying a presence that
                made hearts weep and spirits realign. From these rooms, his
                sounds and music has traveled far across the world.
              </p>
              <button className="btnGradient text-[#fff] mt-[20px]">
                <Link
                  // to={latestSingleQuery?.data[0].link}
                  to="https://open.spotify.com/artist/1voWj2pMS3ApzUroyIcHXM"
                  target="_blank"
                  className="text-[#fff]"
                >
                  Download/Stream
                </Link>
              </button>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default LatestSingle;
