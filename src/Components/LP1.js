/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: efrenr (https://sketchfab.com/efrenr)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/linear-1-lp-ac2d4f9b28cf4dc79b17302d89322e80
title: Linear 1 LP
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/chem_lp1/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["lambert2SG.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/chem_lp1/scene.gltf");
