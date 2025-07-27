import React from "react";
import { getDiscography } from "../../api/apis";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function Gallery({ scrollRef }) {
  const discographyQuery = useQuery({
    queryKey: ["discography"],
    queryFn: getDiscography,
  });
  return (
    <div className="bg-[#fff]" ref={scrollRef}>
      <div className="flex justify-center flex-wrap gap-[24px] py-[50px]  px-[24px] max-w-[1080px] mx-auto">
        {discographyQuery.data &&
          discographyQuery.isSuccess &&
          discographyQuery.data.map((item, i) => (
            <Link
              to={item.link}
              target="_blank"
              key={i}
              className="w-[100%] md:w-[calc((100%/2)-30px)] lg:w-[calc((100%/3)-30px)]  h-[400px] bg-no-repeat bg-cover hover:scale-[0.8] transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('https://zerosixapi.aoudit.com/api/discography/image/${item.id}')`,
              }}
            ></Link>
          ))}
      </div>
    </div>
  );
}

export default Gallery;
