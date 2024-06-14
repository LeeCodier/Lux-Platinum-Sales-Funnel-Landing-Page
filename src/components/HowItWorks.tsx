import { how_it_works } from "@/constants";
export const HowItWorks = () => {
  return (
    <div className="layout">
      <div className=" p-2 gap-y-2 bg-primary rounded-xl flex-center  flex-col">
        <div className=" heading-text">How it works?</div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 flex-col lg:justify-between gap-y-2">
          {how_it_works.map((b) => (
            <div key={b.content} className="flex-center  flex-col  gap-y-2">
              <div>{b.icon}</div>{" "}
              <div className="text-[20px] leading-normal">{b.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
