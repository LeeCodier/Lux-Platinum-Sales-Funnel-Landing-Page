import React from "react";
import { benifits } from "@/constants";

export const WhyUs = () => {
  return (
    <div className="layout">
      <div className=" p-2 gap-y-2 bg-primary rounded-xl flex-center  flex-col">
        <div className=" heading-text">Why Us?</div>
        <div className="w-full flex lg:flex-row flex-col lg:justify-between gap-y-2">
          {benifits.map((b) => (
            <div key={b.content} className="flex-center  flex-col  gap-y-2">
              <div>{b.icon}</div>{" "}
              <div className="text-[22px] leading-normal">{b.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
