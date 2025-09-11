import React from "react";
import Container from "../../ui/Container";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaXRay,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
function Update() {
  return (
    <div className="w-[100%] py-[50px] bg-[#ff] flex flex-col justify-center  text-center">
      <div>
        {/* <div className="h-[60px] border-[1px] w-[1px] mx-auto"></div> */}

        <p className="text-[#fff] font-[600]"></p>
        <p className="lg:text-[3.5rem] font-[900] goldAnimate  text-[2rem]">
          <span className="text-[#fff]">STAY</span> UPDATED
        </p>
      </div>
      <Container className="flex xl:justify-between justify-center gap-[20px] lg:px-[150px] mt-[100px]">
        <Link
          to="https://www.instagram.com/EbukaSongs"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaInstagram className="text-[2rem] lg:text-[4rem]" />
            <p className="text-[2rem] font-[700] uppercase hidden xl:block">
              Instagram
            </p>
          </div>
        </Link>

        <Link
          to="https://web.facebook.com/EbukaSongsOfficial"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaFacebook className="text-[2rem] lg:text-[4rem]" />
            <p className="text-[2rem] font-[700] uppercase hidden xl:block">
              Facebook
            </p>
          </div>
        </Link>

        <Link
          to="https://www.youtube.com/@ebukasongs/videos"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaYoutube className="text-[2rem] lg:text-[4rem]" />
            <p className="text-[2rem] font-[700] uppercase hidden xl:block">
              Youtube
            </p>
          </div>
        </Link>
      </Container>
      <div className="flex justify-center mt-[50px]">
        <Link
          to="https://open.spotify.com/artist/1voWj2pMS3ApzUroyIcHXM"
          target="_blank"
          rel="noopener?"
        >
          <button className="btnGradient text-[#fff] w-[100%] max-w-[200px] p-4 border-[2px] border-[#fff]">
            View All Songs
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Update;
