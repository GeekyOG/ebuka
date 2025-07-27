import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getTrendingVideos } from "../../api/apis";

function Gallery() {
  const videosQuery = useQuery({
    queryKey: ["trending-videos"],
    queryFn: getTrendingVideos,
  });

  return (
    <div className="flex justify-center gap-[24px] py-[50px] bg-[#fff] flex-wrap max-w-[1080px] mx-auto px-[24px] ">
      {videosQuery?.data &&
        videosQuery?.isSuccess &&
        videosQuery?.data.map((item, i) => (
          <div className="w-[100%] md:w-[calc((100%/2)-30px)] lg:w-[calc((100%/3)-30px)] bg-[url('/latest.png')] h-[250px]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${item.link}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
    </div>
  );
}

export default Gallery;
