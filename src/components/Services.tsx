import { services } from "@/constants";

export const Services = () => {
  return (
    <div className="layout flex items-center flex-col gap-y-6 sm:gap-y-8 md:gap-y-10   xl:gap-y-14 ">
      <div className="heading-text text-center">our services</div>
      <div className=" max-w-[864px] grid grid-cols-1 sm:grid-cols-2 gap-x-9 gap-y-8 md:gap-y-10">
        {services.map((s, index) => {
          return (
            <div
              className="p-2 rounded-xl border-secondary border bg-primary"
              key={index}
            >
              <div className="heading-text">{s.header}</div>
              <div className="body">{s.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
