"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import ArrowUp from "../../public/icons/ArrowUp.png";
import { ScrollToHook } from "@/hooks/ScrollToHook";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const BackToTop = () => {
  let pathname = usePathname();

  pathname == "/" ? (pathname = "#Product2") : (pathname = "#Aissues");

  useGSAP(() => {
    gsap.from("#ToTop", {
      opacity: 0,
      height: 0,
      duration: 1,
      scrollTrigger: { trigger: pathname, start: "top center" },
    });
  });

  return (
    <div
      id="ToTop"
      onClick={() => {
        ScrollToHook("#Window");
      }}
      className=" fixed right-[16px] sm:right-[32px] md:right-10 top-3/4 rounded-xl items-center text-lg bg-white flex p-2 w-max flex-col gap-y-2"
    >
      <Image src={ArrowUp} alt="ArrowUp" />
      <div className="text-black">Top</div>
    </div>
  );
};
