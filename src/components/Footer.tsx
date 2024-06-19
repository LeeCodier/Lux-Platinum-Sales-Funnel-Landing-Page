import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <div className="layout pb-7 justify-between gap-y-10 flex flex-wrap">
      <div className="w-[260px]">
        <div className="font-heading text-[30px]">Lux Platinum</div>
        <div className="body">
          {" "}
          Jewellery manufacturing and source company that is committed to
          helping you source quality, custom Jewellery for your company
        </div>
      </div>
      <div className="w-fit">
        <div className="font-heading font-medium text-[30px]">Links</div>
        <div className="font-heading  text-[30px]">
          <div className="hover:font-medium hover:cursor-pointer">article</div>
          <div className="hover:font-medium hover:cursor-pointer">
            testimonials
          </div>
          <div className="hover:font-medium hover:cursor-pointer">services</div>
          <div className="hover:font-medium hover:cursor-pointer">about</div>
        </div>
      </div>
      <div className="w-fit">
        <div className="font-heading font-medium text-[30px]">Contact</div>
        <div className="body flex flex-col gap-2  text-[30px]">
          <div className="flex gap-x-2.5">
            <MapPin width={32} height={32} /> 692 Polsdev Street
          </div>
          <div className="flex gap-x-2.5">
            <Mail width={32} height={32} /> info@luxeplatinum.com
          </div>

          <div className="flex gap-x-2.5">
            <Phone width={32} height={32} />
            +22 235 3302{" "}
          </div>
          <div className="flex items-center justify-left gap-2.5">
            <Facebook
              size={32}
              strokeWidth={1.25}
              className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
            />
            <Twitter
              size={32}
              strokeWidth={1.25}
              className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
            />
            <Instagram
              size={32}
              strokeWidth={1.25}
              className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
            />

            <Youtube
              size={32}
              strokeWidth={1.25}
              className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
            />
            <Linkedin
              size={32}
              strokeWidth={1.25}
              className="hover:cursor-pointer hover:scale-125  duration-75  hover:drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
