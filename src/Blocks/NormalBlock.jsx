import { RigidBody } from "@react-three/rapier";

export default function NormalBlock({ position = [0, 0, 0] }) {
  return (
    <>
      <RigidBody
        position={position}
        type="fixed"
        friction={1}
        restitution={0.2}
      >
        <mesh position={[-1.5, 0.5, -1.5]} receiveShadow>
          <boxGeometry args={[3, 0.5, 3]} />
          <meshStandardMaterial color={"grey"} />
        </mesh>
        <mesh position={[1.5, 0.5, -1.5]} receiveShadow>
          <boxGeometry args={[3, 0.5, 3]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
        <mesh position={[-1.5, 0.5, 1.5]} receiveShadow>
          <boxGeometry args={[3, 0.5, 3]} />
          <meshStandardMaterial color={"white"} />
        </mesh>
        <mesh position={[1.5, 0.5, 1.5]} receiveShadow>
          <boxGeometry args={[3, 0.5, 3]} />
          <meshStandardMaterial color={"grey"} />
        </mesh>
        <mesh position={[-3.25, 1.25, 0]} receiveShadow>
          <boxGeometry args={[0.5, 2, 6]} />
          <meshStandardMaterial color={"lightblue"} />
        </mesh>
        <mesh position={[3.25, 1.25, 0]} receiveShadow>
          <boxGeometry args={[0.5, 2, 6]} />
          <meshStandardMaterial color={"lightblue"} />
        </mesh>
      </RigidBody>
    </>
  );
}
