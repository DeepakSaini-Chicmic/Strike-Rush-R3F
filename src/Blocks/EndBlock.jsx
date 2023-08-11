import { RigidBody } from "@react-three/rapier";
import NormalBlock from "./NormalBlock";

export default function EndBlock({ position }) {
  return (
    <>
      <RigidBody type="fixed" colliders="cuboid" position={position}>
        <NormalBlock position={[0, 0, 0]} />
        <mesh position={[0, 5.25, -7]}>
          <boxGeometry args={[9, 10, 1]} />
          <meshBasicMaterial color={"yellow"} />
        </mesh>
        <mesh position={[-2.65, 7, -6]} rotation-z={(Math.PI / 180) * 45}>
          <boxGeometry args={[1, 3.5, 1]} />
          <meshBasicMaterial color={"white"} />
        </mesh>
        <mesh position={[2.65, 7, -6]} rotation-z={-(Math.PI / 180) * 45}>
          <boxGeometry args={[1, 3.5, 1]} />
          <meshBasicMaterial color={"white"} />
        </mesh>
        <mesh position={[0, 0.5, -4.75]}>
          <boxGeometry args={[9, 0.5, 3.5]} />
          <meshBasicMaterial color={"greenyellow"} />
        </mesh>
        <mesh position={[-4, 5.5, -4.75]}>
          <boxGeometry args={[1, 9.5, 3.5]} />
          <meshBasicMaterial color={"grey"} />
        </mesh>
        <mesh position={[4, 5.5, -4.75]}>
          <boxGeometry args={[1, 9.5, 3.5]} />
          <meshBasicMaterial color={"grey"} />
        </mesh>
      </RigidBody>
    </>
  );
}
