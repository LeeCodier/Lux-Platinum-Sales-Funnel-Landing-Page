import Link from "next/link";
import { ScrollToHook } from "@/hooks/ScrollToHook";
import {
  Facebook,
  Instagram,
  Languages,
  Linkedin,
  Twitter,
  Volume2,
  X,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

const NavMenu = () => {
  return (
    <div className="flex flex-col text-black  pt-7 pb-2 px-2  w-full  items-left justify-center gap-2.5 ">
      <div className=" text-[24px]  leading-tight flex-col items-center justify-center font-heading gap-2">
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
      <div className="flex items-center justify-between">
        <div className="flex-center gap-2.5">
          <Facebook
            size={24}
            strokeWidth={1.25}
            className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
          />
          <Twitter
            size={24}
            strokeWidth={1.25}
            className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
          />
          <Instagram
            size={24}
            strokeWidth={1.25}
            className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
          />

          <Youtube
            size={28}
            strokeWidth={1.25}
            className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
          />
          <Linkedin
            size={24}
            strokeWidth={1.25}
            className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
          />
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
    </div>
  );
};

export default NavMenu;
