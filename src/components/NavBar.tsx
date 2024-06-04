"use client";

import { Languages, Menu, Volume2, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav") as HTMLDivElement;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const navbreakpointreached = entry.contentRect.width >= 950;
        if (navbreakpointreached) {
          setNavOpen(false);
        }
      });
    });
    observer.observe(nav);
  });

  return (
    <div id="nav" className="layout">
      <div className="rounded-b-xl bg-white ">
        <nav className=" h-fit pt-7 pb px-2  w-full text-black flex items-center justify-between">
          <div className="heading-text ">Lux Platinum</div>
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="navbreakpoint:hidden hover:cursor-pointer"
          >
            {navOpen ? (
              <X size={32} strokeWidth={1.25} />
            ) : (
              <Menu size={32} strokeWidth={1.25} />
            )}
          </div>

          <div className=" items-center justify-center gap-5 hidden navbreakpoint:flex">
            <div className=" text-[24px]  leading-tight flex-center font-heading gap-2 xl:gap-4">
              <div>article</div>
              <div>testimonials</div>
              <div>services</div>
              <div>about</div>
              <div>contact</div>
            </div>
            <div className="flex-center gap-2 ">
              <Languages
                size={32}
                strokeWidth={1.25}
                className="hover:cursor-pointer hover:scale-105  duration-75 hover:-translate-y-1"
              />
              <Volume2
                size={32}
                strokeWidth={1.25}
                className="hover:cursor-pointer hover:scale-105  duration-75 hover:-translate-y-1"
              />
            </div>
          </div>
        </nav>
        {navOpen && <NavMenu />}
      </div>
    </div>
  );
};

export default NavBar;