import NormalBlock from "./Blocks/NormalBlock.jsx";
import TwoSideHammer from "./Obstacles/TwoSideHammer.jsx";
import OneSideKnife from "./Obstacles/OneSideKnife.jsx";
import OneSideHammer from "./Obstacles/OneSideHammer.jsx";
import BallPins10 from "./Obstacles/BallPins/BallPin10.jsx";
import EndBlock from "./Blocks/EndBlock.jsx";
import BallPins6 from "./Obstacles/BallPins/BallPins06.jsx";
import BallPins3 from "./Obstacles/BallPins/BallPin03.jsx";
import Ball from "./Ball.jsx";
import UpDownRamp from "./UpDownRamp";
export default function Level() {
  return (
    <>
      <group>
        <NormalBlock position={[0, -0.5, 0]} />
        <Ball position={[0, 2, 0]} />
        <TwoSideHammer position={[0, -0.5, -6]} />
        <OneSideKnife position={[0, -0.5, -12]} />
        <TwoSideHammer position={[0, -0.5, -18]} />
        <OneSideHammer position={[0, -0.5, -24]} rotation={[0, Math.PI, 0]} />
        <OneSideHammer position={[0, -0.5, -30]} />
        <UpDownRamp position={[0, -0.5, -36]} />
        <OneSideKnife position={[0, -0.5, -54]} rotation={[0, Math.PI, 0]} />
        <BallPins3 position={[0, -0.5, -60]} />
        <BallPins6 position={[0, -0.5, -66]} />
        <EndBlock position={[0, -0.5, -72]} />
      </group>
    </>
  );
}
