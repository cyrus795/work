/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: efrenr (https://sketchfab.com/efrenr)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/f7-orbital-1809ca8292a8469296a21bc54a45ecdd
title: f7 Orbital
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/chem_f5/scene.gltf");
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

useGLTF.preload("/chem_f5/scene.gltf");
