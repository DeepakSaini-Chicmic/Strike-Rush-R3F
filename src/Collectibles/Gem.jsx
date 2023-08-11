import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Gem({ position }) {
  const gem = useFBX("./models/Gem.fbx");
  return (
    <>
      <RigidBody type="fixed" colliders="hull" position={position}>
        <primitive object={gem.clone()} scale={0.005} position={[0, 1, 0]} />
      </RigidBody>
    </>
  );
}
