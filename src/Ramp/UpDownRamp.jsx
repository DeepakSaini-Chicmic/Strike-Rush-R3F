import { useFBX } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import NormalBlock from "../Blocks/NormalBlock";

export default function UpDownRamp({ position = [0, 0, 0] }) {
  const ramp = useFBX("./models/Ramps/Ramp1.fbx");
  return (
    <>
      <group position={position}>
        <NormalBlock />
        <RigidBody type="fixed" colliders="hull">
          <primitive
            object={ramp.clone()}
            scale={[0.015, 0.02, 0.02]}
            position={[-1.3, 0.7, -2]}
            rotation-y={Math.PI}
          />
          <mesh position={[-1.3, 1.45, -6]}>
            <boxGeometry args={[3.25, 2.5, 8]} />
            <meshStandardMaterial color={"lightgrey"} />
          </mesh>
          <primitive
            object={ramp.clone()}
            scale={[0.015, 0.02, 0.02]}
            position={[-1.3, 0.7, -10]}
          />
        </RigidBody>
        <NormalBlock position={[0, 0, -6]} />
        <NormalBlock position={[0, 0, -12]} />
      </group>
    </>
  );
}
