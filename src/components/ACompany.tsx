import React from "react";
import { a_company } from "@/constants";
import { CTA } from "./CTA";

export const ACompany = () => {
  return (
    <div className="layout">
      <div className=" p-2 sm:p-4  flex flex-col sm:flex-row  gap-4 sm:gap-6 rounded-xl border border-secondary  bg-primary ">
        <div className="flex flex-col gap-5 w-full">
          <div className="heading-text">{a_company.header}</div>
          <div className="body">{a_company.section1}</div>
          <div className="body">{a_company.section2}</div>
          <CTA />
        </div>
        {a_company.component}
      </div>
    </div>
  );
};
