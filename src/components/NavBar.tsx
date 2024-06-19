"use client";
import Link from "next/link";
import { Languages, Menu, Volume2, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import { ScrollToHook } from "@/hooks/ScrollToHook";

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

  const navClass = navOpen
    ? " h-fit mt-7  py px-2  w-full text-black flex items-center justify-between"
    : " h-fit pt-7 pb px-2  w-full text-black flex items-center justify-between";

  const navContainerClass = navOpen
    ? "rounded-xl bg-white "
    : "rounded-b-xl bg-white ";
  return (
    <div id="nav" className="layout">
      <div className={navContainerClass}>
        <nav className={navClass}>
          <Link href="/" className="heading-text ">
            Lux Platinum
          </Link>
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
              <Link href="/article">article</Link>
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  ScrollToHook("#Testimonials");
                }}
              >
                testimonials
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  ScrollToHook("#Services");
                }}
              >
                services
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  ScrollToHook("#About");
                }}
              >
                about
              </div>
              <div
                className="hover:cursor-pointer"
                onClick={() => {
                  ScrollToHook("#Form");
                }}
              >
                contact
              </div>
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
