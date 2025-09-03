import React from "react";
import Container from "../../ui/Container";
import { getTrendingVideos } from "../../api/apis";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Video() {
  const videosQuery = useQuery({
    queryKey: ["trending-videos"],
    queryFn: getTrendingVideos,
  });

  return (
    <div className="w-[100%] py-[50px] bg-[#ff] flex-col flex justify-center animateBg text-center">
      <div>
        {/* <div className="h-[60px] border-[1px] w-[1px] mx-auto"></div> */}

        <p className="text-[#fff] font-[600]"></p>
        <p className="lg:text-[3.5rem] font-[900] goldAnimate  text-[2rem]">
          <span className="text-[#fff]">LATEST</span> VIDEO
        </p>
      </div>
      {videosQuery?.data && videosQuery?.isSuccess && (
        <Container className="flex justify-center mt-[50px] ">
          <div className="flex gap-[32px] lg:flex-row flex-col items-center w-[100%]">
            <div className="max-w-[650px] w-[100%] h-[350px] object-fill bg-[#000]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videosQuery?.data[0]?.link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            <div className="lg:max-w-[450px] flex flex-col justify-between lg:ml-[100px] py-[100px]">
              <Link to="https://www.youtube.com/@ebukasongs" target="_blank">
                <button className="border-2 border-[#fff] text-[#fff] p-6">
                  See All Videos
                </button>
              </Link>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Video;
