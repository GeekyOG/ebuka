import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../api/apis";
import { Link } from "react-router-dom";

function ImageSwiper() {
  const imagesQuery = useQuery({
    queryKey: ["images"],
    queryFn: getImages,
  });

  return (
    <div>
      <div className="py-[40px]">
        {imagesQuery.data && imagesQuery.isSuccess && (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            autoplay={true}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
          >
            {imagesQuery.data.map((item: any, index) => (
              <SwiperSlide key={index} className="shadow-0">
                <div
                  className="h-[400px] bg-center-top bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url('https://ebukabackend-cq9d.onrender.com/api/images/image/${item.id}')`,
                  }}
                ></div>
                {/* <img key={index} src={item} className=" object-cover" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className="flex justify-center">
          <Link to="/gallery">
            <button className="btnGradient text-[#fff] mt-[20px]">
              View Gallery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageSwiper;
