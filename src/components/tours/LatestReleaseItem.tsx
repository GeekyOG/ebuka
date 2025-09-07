import { cn } from "../../utils/cn";
import { Link } from "react-router-dom";
import React, { useState } from "react";

interface LatestReleaseItemProps {
  title: string;
  content: string;
  img: string;
  link: string;
  id: string;
}

function LatestReleaseItem({
  title,
  content,
  link,
  img,
  id,
}: LatestReleaseItemProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-[100%]">
      <div
        className="w-[calc(100%)] md:min-w-[300px] flex-wrap h-[400px] rounded-[10px] overflow-hidden bg-no-repeat bg-cover relative hover:[&>div]:block"
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseLeave={() => setShow(false)}
        style={{
          backgroundImage: `url('https://ebukabackend-cq9d.onrender.com/api/tour/image/${id}')`,
        }}
      >
        <div
          className={cn(
            "absolute right-0 left-0 bottom-0 top-0 bg-[#000000a9] p-[16px] pt-[100px] transition-all duration-500 ease-linear",
            !show && "opacity-0"
          )}
        >
          <div className="flex justify-center items-center  h-[100%] ">
            <p className="text-neutral-50">{content}</p>
          </div>
        </div>
      </div>

      {/* <Link to={`https://www.youtube.com/watch?v=${link}`} target="_blank">
        <button className="border-[1px]  mx-auto px-[50px] block mt-[20px] py-[20px] rounded-[10px] font-[600]">
          <p className="text-neutral-50">View More</p>
        </button>
      </Link> */}
    </div>
  );
}

export default LatestReleaseItem;
