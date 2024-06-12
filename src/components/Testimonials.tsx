import Image from "next/image";
import { testimonials } from "@/constants";
import { Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <div className="layout">
      <div className=" w-full flex  flex-wrap gap-y-6 justify-between">
        {testimonials.map((t, index) => {
          return (
            <div
              key={index}
              className="flex  h-max sm:max-w-[340px] lg:max-w-[360px] flex-col p-2 gap-y-2 rounded-xl border border-secondary"
            >
              <div className="heading-text">{t.header}</div>
              <div className="body">{t.content}</div>
              <div className="flex w-full justify-between ">
                <Image alt="reviewer name" src={t.cimg} />
                <div className="flex flex-col">
                  <div className="text-[16px] text-text_gray">{t.cname}</div>
                  <div className="flex just  text-yellow-400">
                    <Star width={16} height={16} strokeWidth={2} />
                    <Star width={16} height={16} strokeWidth={2} />
                    <Star width={16} height={16} strokeWidth={2} />
                    <Star width={16} height={16} strokeWidth={2} />
                    <Star width={16} height={16} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
