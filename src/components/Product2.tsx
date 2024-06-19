import { lp_services } from "@/constants";
import { CTA } from "@/components";
export const Product2 = () => {
  return (
    <div id="Product2" className="layout">
      <div className="w-full h-[525px]  md:h-[370px] flex flex-col md:flex-row-reverse  flex-center gap-y-2  rounded-xl border border-secondary">
        <div className="md:w-1/2 h-1/2 md:gap-y-4 md:h-fit  w-full flex p-2 gap-y-2 flex-col items-start  ">
          <div className="heading-text"> {lp_services.product2.header}</div>
          <div className="body">{lp_services.product2.content}</div>
          <CTA />
        </div>
        <div className="md:w-1/2 flex h-1/2 md:h-full flex-col flex-center">
          {lp_services.product2.graphic}
        </div>
      </div>
    </div>
  );
};
