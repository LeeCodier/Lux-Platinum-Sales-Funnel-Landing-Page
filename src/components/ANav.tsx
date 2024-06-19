"use client";
import { ScrollToHook } from "@/hooks/ScrollToHook";

export const ANav = () => {
  return (
    <div className="layout">
      <div className=" border border-secondary rounded-xl p-2">
        <div className=" text-2xl">In this article</div>
        <div className="body my-2">Issues</div>
        <ul className=" body pl-6 list-disc">
          <li
            onClick={() => {
              ScrollToHook("#issue1");
            }}
            className="hover:underline  hover:cursor-pointer"
          >
            Environmental impact
          </li>
          <li
            onClick={() => {
              ScrollToHook("#issue2");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Design inaccuracies
          </li>
        </ul>
        <div className="body my-2">Solutions</div>
        <ul className="body pl-6 list-disc">
          <li
            onClick={() => {
              ScrollToHook("#EthicalSourcing");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Ethical sourcing{" "}
          </li>
          <li
            onClick={() => {
              ScrollToHook("#SupplyChainTransparency");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Supply chain transparency
          </li>

          <li
            onClick={() => {
              ScrollToHook("#MetalPriceVolatilityManagement");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Metal price volatility management
          </li>
          <li
            onClick={() => {
              ScrollToHook("#QualityControl");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Quality Control
          </li>
          <li
            onClick={() => {
              ScrollToHook("#LeadTimeManagement");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Lead time management
          </li>
        </ul>
        <ul className=" mt-5 body pl-6 list-disc">
          <li
            onClick={() => {
              ScrollToHook("#About");
            }}
            className=" hover:underline hover:cursor-pointer"
          >
            We are Lux Platinum{" "}
          </li>
          <li
            onClick={() => {
              ScrollToHook("#Testimonials");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Testimonials
          </li>
          <li
            onClick={() => {
              ScrollToHook("#Services");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Our Services{" "}
          </li>
          <li
            onClick={() => {
              ScrollToHook("#Form");
            }}
            className="hover:underline hover:cursor-pointer"
          >
            Get in touch
          </li>
        </ul>
      </div>
    </div>
  );
};
