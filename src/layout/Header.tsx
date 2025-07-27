import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import MobileNav from "./MobileNav";

export const navs = [
  { name: "Home", path: "/" },
  { name: "Biography", path: "/biography" },
  // { name: "Discography", path: "/Discography" },
  { name: "Videos", path: "/videos" },
  { name: "Events / Ministration", path: "/tours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Bookings", path: "/bookings" },
];

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  window.addEventListener("scroll", () => {
    const scrollDistance = window.scrollY;

    if (scrollDistance > 100) {
      headerRef.current?.classList.add("bg-[#333]");
    } else {
      headerRef.current?.classList.remove("bg-[#333]");
    }
  });

  return (
    <header
      className="fixed  top-0 right-0 left-0 py-5 z-[100]"
      ref={headerRef}
    >
      <div className="xl:hidden w-[100%]">
        <MobileNav />
      </div>
      <Container className="xl:flex gap-[150px] items-center hidden">
        <Link to="/">
          <p className="text-[2.25rem] font-[700] text-[#fff]">Ebuka Songs</p>
        </Link>

        <div className="flex gap-[25px]">
          {navs.map((nav) => (
            <Link
              to={nav.path}
              className={cn(
                "text-[#fff] font-[500] text-[0.865rem] transition-all duration-200 ease-in-out",
                location.pathname == nav.path && "goldAnimate"
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  );
}

export default Header;
