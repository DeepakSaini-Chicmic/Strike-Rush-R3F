// CURRENTLY NOT IN USE

// import { useFBX } from "@react-three/drei";
// import { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Euler, Quaternion } from "three";
// import { RigidBody } from "@react-three/rapier";

// export default function Spinner({ position = [0, 0, 0] }) {
//   const spinner = useFBX("./models/Cylinder_obstacle.fbx");
//   console.log(spinner);
//   const spinnerRef = useRef();
//   const [speed] = useState(
//     () => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
//   );

//   // useFrame used updating the rotation on each frame
//   useFrame((state) => {
//     const time = state.clock.getElapsedTime(); //Elapsed time
//     const eulerRotation = new Euler(Math.PI / 2, time * speed * 2, 0); //Euler Rotation angle in x, y and z
//     const quaternionRotation = new Quaternion(); //Quaternion Rotation angle in x, y, z and w
//     quaternionRotation.setFromEuler(eulerRotation); // setting the Quaternion angle from Euler angle
//     spinnerRef.current.setNextKinematicRotation(quaternionRotation); //setNextKinematicRotation - used for rotating the rigid body
//   });
//   return (
//     <>
//       <RigidBody
//         ref={spinnerRef}
//         type={"kinematicPosition"}
//         colliders={"trimesh"}
//         rotation={[Math.PI / 2, 0, 0]}
//         position={position}
//       >
//         <primitive object={spinner} scale={0.011} />
//       </RigidBody>
//     </>
//   );
// }
