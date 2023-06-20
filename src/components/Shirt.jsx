import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Shirt = () => {
  const { logoDecal, fullDecal, isFullTexture, isLogoTexture, color } =
    useSnapshot(state);

  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  const logoTexture = useTexture(logoDecal);
  const fullTexture = useTexture(fullDecal);

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, color, 0.25, delta);
  });

  const shirtState = {
    logoDecal,
    fullDecal,
    isFullTexture,
    isLogoTexture,
    color,
  };

  const stateString = JSON.stringify(shirtState);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
            className="object-cover"
          />
        )}
        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotrapy={16}
            depthTest={false}
            depthWrite={false}
          />
        )}
      </mesh>
    </group>
  );
};

export default Shirt;
