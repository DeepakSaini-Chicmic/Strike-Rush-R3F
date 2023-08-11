import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import NormalBlock from "../Blocks/NormalBlock";

export default function LastRamp({ position = [0, 0, 0] }) {
  const ramp = useFBX("./models/Ramps/Ramp2.fbx");
  return (
    <>
      <group position={position}>
        <NormalBlock />
        <RigidBody type="fixed" colliders="hull" position={[0, -1.3, -0.2]}>
          <primitive
            object={ramp}
            scale={0.0155}
            position={[0, 2, 0]}
            rotation={[0, Math.PI, 0]}
          />
        </RigidBody>
      </group>
    </>
  );
}
