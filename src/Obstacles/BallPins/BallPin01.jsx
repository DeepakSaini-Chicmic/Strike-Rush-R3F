import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function BallPin({ position = [0, 0, 0] }) {
  let ballPin = useFBX("./models/Obstacle/BowlingPin.FBX");
  ballPin.children.pop();
  return (
    <>
      <RigidBody type="dynamic" colliders="hull" position={position}>
        <primitive
          object={ballPin.clone()}
          scale={0.005}
          rotation-x={-Math.PI / 2}
        />
      </RigidBody>
    </>
  );
}
