import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import Level from "./Level";

/**
 * @description Will contain each and every component for user Experience
 * @returns
 */

export default function Experience() {
  return (
    <>
      {/* Perfromance Monitor Added */}
      <Perf position="top-left" />
      <OrbitControls />
      {/* Physics Added */}
      <Physics debug={true}>
        <Level />
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} castShadow />
      </Physics>
    </>
  );
}
