import { easing } from "maath";
import React, { useRef } from "react";
import state from "../store";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";

const CameraRig = ({ children }) => {
  const cameraRef = useRef();

  const { intro } = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition = [-0.4, 0, 2];

    if (intro) {
      if (isBreakpoint) targetPosition = [0, 0, 2];
      if (isMobile) targetPosition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    easing.dampE(
      cameraRef.current.rotation,
      [state.pointer.y / 10, state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={cameraRef}>{children}</group>;
};

export default CameraRig;
