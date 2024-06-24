"use client";
import React, { Suspense, useRef } from "react";
import { lp_services } from "@/constants";
import { CTA } from "@/components";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import P1 from "../../public/P1";

export const Product1 = () => {
  return (
    <div className="layout">
      <div className="w-full h-[525px]  md:h-[370px] flex flex-col md:flex-row flex-center gap-y-2  rounded-xl border border-secondary">
        <div className="md:w-1/2 h-1/2 md:gap-y-4 md:h-fit  w-full flex p-2 gap-y-2 flex-col items-start  ">
          <div className="heading-text"> {lp_services.product1.header}</div>
          <div className="body">{lp_services.product1.content}</div>
          <CTA />
        </div>
        <div className="md:w-1/2 flex h-1/2 md:h-full flex-col flex-center">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <PerspectiveCamera />
            <ambientLight />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <OrbitControls
              enableDamping={false}
              enableRotate={false}
              enablePan={false}
              enableZoom={false}
              autoRotate
            />
            <Suspense fallback={null}>
              <P1 rotation={[-0.5 * Math.PI, 0, 0]} />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>
      </div>
    </div>
  );
};
