import { a_solutions } from "@/constants";

export const AIssues = () => {
  return (
    <div className="layout">
      <div className=" p-2 sm:p-4  flex flex-col gap-2 sm:gap-6 rounded-xl border border-secondary  bg-primary ">
        {a_solutions.map(({ id, Component, header, content }) => (
          <div className="">
            <div key={id} className="flex gap-2 ">
              <div className="flex flex-col gap-2 h-fit w-full">
                <div className="heading-text"> {header}</div>
                <div className="body">{content}</div>
              </div>
              <Component />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
