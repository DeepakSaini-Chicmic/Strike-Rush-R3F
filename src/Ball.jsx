import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Ball({ position }) {
  const ball = useFBX("./models/Ball.fbx");
  return (
    <>
      <RigidBody
        type="dynamic"
        canSleep="false"
        colliders="ball"
        mass={30}
        position={position}
      >
        <primitive object={ball.clone()} scale={0.005} />
      </RigidBody>
    </>
  );
}
