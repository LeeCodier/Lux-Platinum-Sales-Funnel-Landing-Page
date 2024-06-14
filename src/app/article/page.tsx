import {
  ACompany,
  AHeader,
  AIssues,
  Form,
  HowItWorks,
  Parallax,
  Services,
  Testimonials,
  WhyUs,
} from "@/components";
import { a_bridges, a_issues } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <div className="column">
      <AHeader />
      <div className="body layout">{a_bridges[0]}</div>

      <div className=" layout">
        <div className=" flex p-2 rounded-xl border border-secondary gap-2 sm:gap-3 sm:p-4">
          <div className="w-full flex flex-col gap-2 ">
            <div className="heading-text">{a_issues[0].header}</div>
            <div className="body">{a_issues[0].content}</div>
          </div>
          <div className="w-full hidden sm:block max-h-[300px]">
            <Image
              src={a_issues[0].img}
              alt="Pollution and Design "
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className=" layout">
        <div className=" flex flex-row-reverse p-2 rounded-xl border border-secondary gap-2 sm:gap-3 sm:p-4">
          <div className="w-full flex flex-col gap-2 ">
            <div className="heading-text">{a_issues[1].header}</div>
            <div className="body">{a_issues[1].content}</div>
          </div>
          <div className="w-full hidden sm:block max-h-[300px]">
            <Image
              src={a_issues[1].img}
              alt="Pollution and Design "
              className=" object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="body layout">{a_bridges[1]}</div>
      <AIssues />
      <div className="body layout">{a_bridges[2]}</div>
      <ACompany />

      <WhyUs />

      <Testimonials />

      <Parallax />
      <HowItWorks />
      <Services />
      <Form />
    </div>
  );
};

export default page;
