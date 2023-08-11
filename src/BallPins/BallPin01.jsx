import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function BallPin({ position = [0, 0, 0] }) {
  let ballPin = useFBX("./models/Obstacle/BallPin.fbx");
  return (
    <>
      <RigidBody
        type="dynamic"
        colliders="hull"
        canSleep={false}
        position={position}
      >
        <primitive object={ballPin.clone()} scale={0.005} />
      </RigidBody>
    </>
  );
}
