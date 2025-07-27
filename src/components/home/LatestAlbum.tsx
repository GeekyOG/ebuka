import React from "react";

function LatestAlbum() {
  return (
    <div className="w-[100%] py-[50px] bg-[#ff] flex justify-center animateBg text-center">
      <div>
        {/*       <div className="h-[60px] border-[1px] w-[1px] mx-auto"></div> */}

        <p className="text-[#fff] font-[600]"></p>
        <p className="lg:text-[3.5rem] font-[900] goldAnimate  text-[2rem]">
          <span className="text-[#fff]">LATEST</span> ALBUM
        </p>
      </div>
    </div>
  );
}

export default LatestAlbum;
