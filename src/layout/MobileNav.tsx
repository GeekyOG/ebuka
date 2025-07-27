/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";

import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
const NavOptions = [
  { name: "Home", path: "/" },
  { name: "Biography", path: "/biography" },
  // { name: "Discography", path: "/Discography" },
  { name: "Videos", path: "/videos" },
  { name: "Events / Ministration", path: "/tours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Bookings", path: "/bookings" },
];
function MobileNav({ activeNav }: { activeNav?: string }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClose = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    event.preventDefault();
    handleClose();
    navigate(url);
  };

  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center w-[100%]">
        <p className="text-[1.25rem] font-[700]">Ebuka</p>

        <CiMenuFries
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          size={24}
          fontWeight={900}
          stroke="3px solid #Fff"
          className="text-[#fff]"
        />

        <div
          className={clsx(
            "fixed right-0 left-0 top-0 bottom-0 bg-[#FFFFFF4E]",
            showMobileMenu ? "" : ""
          )}
          style={{
            zIndex: 100,
            position: "fixed",
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
            transform: `translateX(${showMobileMenu ? "0" : "-130vw"})`,
            transition: "all 0.5s ease-in-out ",
          }}
        >
          <div
            className={clsx(
              "z-40 flex flex-col bg-[#000] w-[60%] border-r-[2px] border-secondary"
            )}
            style={{
              zIndex: 100,
              position: "fixed",
              right: 0,
              left: 0,
              bottom: 0,
              top: 0,
              transform: `translateX(${showMobileMenu ? "0" : "-130vh"})`,
              transition: "all 0.5s ease-in-out ",
              animationDelay: "2s",
            }}
          >
            <div className="flex justify-between px-[20px] py-[20px]">
              <div onClick={handleClose}>
                <IoArrowBackSharp className="text-[30px] text-[#fff]" />
              </div>
            </div>
            <div className="flex-col  items-start mt-[32px]">
              {NavOptions.map((option, index) => (
                <div
                  key={index}
                  className={clsx(
                    "text-[#fff] font-[600] py-[16px] px-[28px]",
                    option.path == location.pathname &&
                      "text-secondary_dark bg-secondary border-r-[8px] border-primary_dark goldAnimate"
                  )}
                  onClick={(e) => handleClick(e, option.path)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
