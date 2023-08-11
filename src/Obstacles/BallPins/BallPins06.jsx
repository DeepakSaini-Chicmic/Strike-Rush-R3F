import BallPin from "./BallPin01";
import NormalBlock from "../../Blocks/NormalBlock.jsx";
import BallPins3 from "./BallPin03";

export default function BallPins6({ position = [0, 0, 0] }) {
  return (
    <>
      <group position={position}>
        <BallPins3 position={[0, 0, 0]} />;
        <BallPin position={[-1, 0.7, -0.5]} />
        <BallPin position={[0, 0.7, -0.5]} />
        <BallPin position={[1, 0.7, -0.5]} />
      </group>
    </>
  );
}
