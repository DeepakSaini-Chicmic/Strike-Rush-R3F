import { Html, Text } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function WinBox({ position = [0, 0, 0], color, text }) {
  return (
    <>
      <group position={position}>
        <RigidBody type="fixed" colliders="cuboid">
          <mesh position={[0, 0.8, 0]}>
            <boxGeometry args={[4, 2.5, 3]} />
            <meshBasicMaterial color={color} />
          </mesh>
        </RigidBody>
        <Text position={[0, 1, 1.7]}>{text}</Text>
      </group>
    </>
  );
}
