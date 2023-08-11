import { useAnimations, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import NormalBlock from "../Blocks/NormalBlock";

export default function OneSideKnife({ position }) {
  const knifeRef = useRef();
  const knife = useFBX("./models/Obstacle/OneSideKnife.fbx");
  const animations = knife.animations;
  const { actions, mixer } = useAnimations(animations, knifeRef);
  useEffect(() => {
    actions.obstacles.play();
    actions.obstacles.timeScale = 0.3 + Math.random();
  });
  useFrame((state, delta) => {
    const deltaTime = delta;
    mixer.update(deltaTime);
  });
  knife.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  });
  return (
    <>
      <group position={position}>
        <RigidBody
          type="kinematicPosition"
          colliders="hull"
          position={[-2.7, 1.6, 0]}
        >
          <primitive ref={knifeRef} object={knife.clone()} scale={0.005} />
        </RigidBody>
        <NormalBlock position={[0, 0, 0]} />
      </group>
    </>
  );
}
