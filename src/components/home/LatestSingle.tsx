import React from "react";
import Container from "../../ui/Container";
import { useQuery } from "@tanstack/react-query";
import { getLatestSingle } from "../../api/apis";
import { Link } from "react-router-dom";

function LatestSingle({ scrollRef }) {
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
              src={`https://ebukabackend-cq9d.onrender.com/api/latestSingle/image/${latestSingleQuery?.data[0].id}`}
              className="lg:max-w-[400px] object-cover"
            />

            <div className="max-w-[450px] flex flex-col justify-between py-[100px] px-[24px]">
              <p className="text-center text-[2.5rem] font-[700]">
                Latest <span className="text-[#a2af9b]">Single</span>
              </p>
              <p>{latestSingleQuery?.data[0].content}</p>
              <button className="btnGradient text-[#fff] mt-[20px]">
                <Link
                  // to={latestSingleQuery?.data[0].link}
                  to="https://linktr.ee/mercychinwoblessed"
                  target="_blank"
                  className="text-[#fff]"
                >
                  Download/Stream: {latestSingleQuery?.data[0].title}
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
