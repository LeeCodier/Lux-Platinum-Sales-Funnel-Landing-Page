import { CTA } from "./CTA";

export const Header = () => {
  return (
    <div className="layout">
      <div className=" pl-2 h-[_clamp(187px,50vh,500px)] justify-center flex flex-col items-start w-full gap-2 rounded-xl border border-secondary">
        <div className=" font-heading text-[32px] leading-tight sm:text-[40px]">
          Lux Platinum
        </div>
        <div className="body">
          your one stop shop for jewel sourcing and <br /> manufacturing
          expertise
        </div>
        <CTA />
      </div>
    </div>
  );
};
