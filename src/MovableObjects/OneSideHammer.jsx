import { useAnimations, useFBX } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import NormalBlock from "../Blocks/NormalBlock";

export default function OneSideHammer({ position, rotation = [0, 0, 0] }) {
  const hammer = useFBX("./models/Obstacle/OneSideHammer.fbx");
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

    const time = state.clock.getElapsedTime(); //Elapsed time
    // const eulerRotation = new Euler(Math.PI / 2, time * speed * 2, 0); //Euler Rotation angle in x, y and z
    const quaternionRotation = hammer.quaternion; //Quaternion Rotation angle in x, y, z and w
    // quaternionRotation.setFromEuler(eulerRotation); // setting the Quaternion angle from Euler angle
    // hammerRef.current.setNextKinematicRotation(quaternionRotation);
    // console.log(hammerRef.current);
  });
  hammer.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
    }
  });
  return (
    <>
      <group position={position}>
        <RigidBody
          ref={hammerRef}
          type="kinematicPosition"
          colliders="hull"
          position={[2.7, 1.6, 0]}
          rotation={[0, -Math.PI, 0]}
        >
          <primitive object={hammer.clone()} scale={0.005} />
        </RigidBody>
        <NormalBlock position={[0, 0, 0]} />
      </group>
    </>
  );
}
