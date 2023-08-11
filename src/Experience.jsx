import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { OrbitControls } from "@react-three/drei";
import Level from "./Level";
import TwoSideHammer from "./MovableObjects/TwoSideHammer";
import OneSideKnife from "./MovableObjects/OneSideKnife";
import OneSideHammer from "./MovableObjects/OneSideHammer";
import BallPins6 from "./BallPins/BallPins06";
import BallPins3 from "./BallPins/BallPin03";
import BallPins10 from "./BallPins/BallPin10";
import NormalBlock from "./Blocks/NormalBlock";
import Gems4X4 from "./Collectibles/Gems4X4";
import Gems2X2 from "./Collectibles/Gems2X2";

/**
 * @description Will contain each and every component for user Experience
 * @returns
 */

export default function Experience() {
  const blocksCount = 15;
  return (
    <>
      {/* Perfromance Monitor Added */}
      <Perf position="top-left" />
      <OrbitControls />
      {/* Physics Added */}
      <Physics debug={true}>
        <Level
          count={blocksCount}
          types={[
            TwoSideHammer,
            OneSideKnife,
            OneSideHammer,
            BallPins6,
            NormalBlock,
            Gems4X4,
            // BallPins3,
            // BallPins10,
          ]}
          seed={0}
        />
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} castShadow />
      </Physics>
    </>
  );
}
