import NormalBlock from "./Blocks/NormalBlock.jsx";
import TwoSideHammer from "./MovableObjects/TwoSideHammer.jsx";
import OneSideKnife from "./MovableObjects/OneSideKnife.jsx";
import OneSideHammer from "./MovableObjects/OneSideHammer.jsx";
import BallPins10 from "./BallPins/BallPin10.jsx";
import EndBlock from "./Blocks/EndBlock.jsx";
import BallPins6 from "./BallPins/BallPins06.jsx";
import BallPins3 from "./BallPins/BallPin03.jsx";
import Ball from "./Ball.jsx";
import UpDownRamp from "./Ramp/UpDownRamp.jsx";
import { useMemo } from "react";
import Gems4X4 from "./Collectibles/Gems4X4.jsx";
import WinBox from "./Winboxes/WinBox.jsx";
export default function Level({
  count = 10,
  types = [
    TwoSideHammer,
    OneSideKnife,
    OneSideHammer,
    BallPins6,
    NormalBlock,
    Gems4X4,
  ],
  seed = 0,
}) {
  const blocks = useMemo(() => {
    const blocks = [];
    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      blocks.push(type);
    }
    return blocks;
  }, [count, types, seed]);
  return (
    <>
      <Ball position={[0, 2, 0]} />
      <group>
        <NormalBlock position={[0, -0.5, 0]} />
        {blocks.map((Block, index) => (
          <Block
            key={index}
            position={[0, -0.5, -(index + 1) * 6]}
            rotation={[0, Math.PI / 180, 0]}
          />
        ))}
        <EndBlock position={[0, -0.5, -(count + 1) * 6]} />
      </group>
    </>
  );
}
