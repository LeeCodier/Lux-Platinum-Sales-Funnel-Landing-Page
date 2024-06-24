/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 P1.gltf 
Author: powerdoge (https://sketchfab.com/powerdoge)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/chainmail-necklace-set-of-four-6ca824d7d9c54e1cb8938aea49bfbba9
Title: Chainmail Necklace Set Of Four
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/P1.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.012}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group position={[12.406, 29973.605, 2662.629]}>
            <mesh
              geometry={nodes.Necklace_M_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_M_Gold_0_1.geometry}
              material={materials.Gold}
            />
          </group>
          <group position={[52.348, 44999.164, 2880.598]} scale={0.5}>
            <mesh
              geometry={nodes.High_Necklace_S_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.High_Necklace_S_Gold_0_1.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.High_Necklace_S_Gold_0_2.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.High_Necklace_S_Gold_0_3.geometry}
              material={materials.Gold}
            />
          </group>
          <group
            position={[463.911, 10.314, 1739.778]}
            rotation={[-0.126, 0, 2.998]}
          >
            <mesh
              geometry={nodes.Necklace_XL_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_XL_Gold_0_1.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_XL_Gold_0_2.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_XL_Gold_0_3.geometry}
              material={materials.Gold}
            />
          </group>
          <group position={[130.894, 14969.499, 2626.832]}>
            <mesh
              geometry={nodes.Necklace_L_Gold_0.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_L_Gold_0_1.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_L_Gold_0_2.geometry}
              material={materials.Gold}
            />
            <mesh
              geometry={nodes.Necklace_L_Gold_0_3.geometry}
              material={materials.Gold}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/P1.gltf");
