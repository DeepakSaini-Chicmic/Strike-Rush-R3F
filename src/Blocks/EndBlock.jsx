import { RigidBody } from "@react-three/rapier";
import NormalBlock from "./NormalBlock";
import WinBox from "../Winboxes/WinBox";
import { useFBX } from "@react-three/drei";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Euler, Quaternion } from "three";
import LastRamp from "../Ramp/LastRamp";

export default function EndBlock({ position }) {
  const spinner = useFBX("./models/Cylinder_obstacle.fbx");
  const spinnerRef = useRef();
  const [speed] = useState(
    () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
  );

  // useFrame used updating the rotation on each frame
  useFrame((state) => {
    const time = state.clock.getElapsedTime(); //Elapsed time
    const eulerRotation = new Euler(Math.PI / 2, time * speed * 2, 0); //Euler Rotation angle in x, y and z
    const quaternionRotation = new Quaternion(); //Quaternion Rotation angle in x, y, z and w
    quaternionRotation.setFromEuler(eulerRotation); // setting the Quaternion angle from Euler angle
    spinnerRef.current.setNextKinematicRotation(quaternionRotation); //setNextKinematicRotation - used for rotating the rigid body
  });
  return (
    <>
      <group position={position}>
        <LastRamp position={[0, 0, 0]} />
        <group position={[0, 0, -6]}>
          <RigidBody type="fixed" colliders="hull">
            <NormalBlock position={[0, 0, 0]} />
            <mesh position={[0, 7.5, -7]}>
              <boxGeometry args={[9, 14, 1]} />
              <meshStandardMaterial color={"yellow"} />
            </mesh>
            <mesh position={[-2.7, 10, -6]} rotation-z={(Math.PI / 180) * 60}>
              <boxGeometry args={[1, 3, 2]} />
              <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh position={[2.7, 10, -6]} rotation-z={-(Math.PI / 180) * 60}>
              <boxGeometry args={[1, 3, 2]} />
              <meshStandardMaterial color={"white"} />
            </mesh>
            <mesh position={[0, 0.5, -4.75]}>
              <boxGeometry args={[9, 0.5, 3.5]} />
              <meshStandardMaterial color={"greenyellow"} />
            </mesh>
            <mesh position={[-4, 7.5, -4.75]}>
              <boxGeometry args={[1, 13.5, 3.5]} />
              <meshStandardMaterial color={"lightblue"} />
            </mesh>
            <mesh position={[4, 7.5, -4.75]}>
              <boxGeometry args={[1, 13.5, 3.5]} />
              <meshStandardMaterial color={"lightblue"} />
            </mesh>
          </RigidBody>
          <RigidBody type={"fixed"} colliders="hull">
            <mesh position={[0, 11.5, -6]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.7, 0.7, 2, 64]} />
              <meshStandardMaterial />
            </mesh>
          </RigidBody>
          <RigidBody
            ref={spinnerRef}
            type={"kinematicPosition"}
            colliders={"trimesh"}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 6, -7.8]}
          >
            <primitive object={spinner} scale={0.011} />
          </RigidBody>
          <WinBox position={[-2, 1.5, -5]} color={"red"} text={"1X"} />
          <WinBox position={[2, 1.5, -5]} color={"limegreen"} text={"5X"} />
        </group>
      </group>
    </>
  );
}
