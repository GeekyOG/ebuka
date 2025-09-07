import React from "react";
import Container from "../ui/Container";
import {
  FaAmazon,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="w-[100%] py-[50px] flex flex-col justify-center bg-[#000]  text-center">
      <div>
        {/* <div className="h-[60px] border-[1px] w-[1px] mx-auto"></div> */}

        <p className="text-[1.5rem] font-[900] goldAnimate">Pride of Heaven.</p>
      </div>
      <Container className="flex justify-center gap-6 lg:px-[150px] mt-[10px]">
        <Link
          to="https://www.instagram.com/EbukaSongs"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaInstagram size={32} />
          </div>
        </Link>

        <Link
          to="https://web.facebook.com/EbukaSongsOfficial"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaFacebook size={32} />
          </div>
        </Link>

        <Link
          to="https://www.youtube.com/Ebuka Songs Channel"
          target="_blank"
          className="text-[#fff]"
        >
          <div className="flex items-center gap-[10px]">
            <FaYoutube size={32} />
          </div>
        </Link>
      </Container>

      <p className="mt-[20px]">
        © {year} Pride of Heaven. All rights reserved.
        {/* <Link
          to="https://www.linkedin.com/in/onojuvwevwo-oghomena-984654207/"
          target="_blank"
        >
          {" "}
          GeekyOgee
        </Link> */}
        .
      </p>
    </div>
  );
}

export default Footer;
