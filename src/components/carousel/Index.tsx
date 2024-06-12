"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { ProductCarousel } from "@/constants";

const OPTIONS: EmblaOptionsType = { align: "start", loop: true };

export const Index = () => {
  return (
    <div className="test">
      <EmblaCarousel slides={ProductCarousel} options={OPTIONS} />
    </div>
  );
};
