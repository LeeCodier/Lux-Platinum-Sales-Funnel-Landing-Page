import React from "react";
import { a_header } from "@/constants";

export const AHeader = () => {
  return (
    <div className="layout">
      <div className="rounded-xl drop-shadow-lg  flex gap-2 border border-secondary p-2">
        <div className="  flex flex-col w-full sm:w-[332px]">
          <div className="heading-text"> {a_header[0]}</div>
          <div className=" text-text_gray text-[24px]"> {a_header[1]}</div>
        </div>
        <div className="hidden  grow sm:flex rounded-xl bg-white"></div>
      </div>
    </div>
  );
};
