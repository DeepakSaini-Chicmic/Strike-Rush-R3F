import { useAnimations, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import NormalBlock from "../Blocks/NormalBlock";

export default function OneSideHammer({ position, rotation = [0, 0, 0] }) {
  const hammer = useFBX("./models/Obstacle/ArmLiverHammer.fbx");
  const hammerRef = useRef();
  const animations = hammer.animations;
  const { actions, mixer } = useAnimations(animations, hammerRef);
  useEffect(() => {
    actions.obstacles.play();
    actions.obstacles.timeScale = 0.3 + Math.random();
  });
  useFrame((state, delta) => {
    const deltaTime = delta;
    mixer.update(deltaTime);
  });
  hammer.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      console.log("shadow");
    }
  });
  return (
    <>
      <group position={position} rotation={rotation}>
        <RigidBody type="fixed" colliders="hull" position={[-2.7, 1.6, 0]}>
          <primitive ref={hammerRef} object={hammer.clone()} scale={0.005} />
        </RigidBody>
        <NormalBlock position={[0, 0, 0]} />
      </group>
    </>
  );
}
