import React from "react";
import Container from "../../ui/Container";
import { useQuery } from "@tanstack/react-query";
import { getTour } from "../../api/apis";
import { Link } from "react-router-dom";

function UpcomingTour() {
  const tourQuery = useQuery({
    queryKey: ["tour"],
    queryFn: getTour,
  });

  return (
    <div className="px-[24px] py-[50px] bg-white text-[#000]">
      {tourQuery.data && tourQuery.isSuccess && (
        <Container className="flex gap-[32px] justify-center flex-col lg:flex-row">
          <div className="lg:w-[50%] flex flex-col gap-[24px] py-[100px] lg:ml-[120px]">
            <p className="text-center text-[1.8rem] font-[700]">
              Upcoming Events /
              <span className="goldAnimate"> Ministration</span>
            </p>
            <p>{tourQuery.data[0].content}</p>
          </div>

          <img
            src={`https://ebukabackend-cq9d.onrender.com/api/tour/image/${tourQuery.data[0].id}`}
            className="lg:w-[50%]"
          />
        </Container>
      )}
    </div>
  );
}

export default UpcomingTour;
