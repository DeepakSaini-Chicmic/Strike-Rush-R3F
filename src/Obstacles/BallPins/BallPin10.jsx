import BallPin from "./BallPin01";
import NormalBlock from "../../Blocks/NormalBlock.jsx";
import BallPins6 from "./BallPins06";

export default function BallPins10({ position = [0, 0, 0] }) {
  return (
    <>
      <group position={position}>
        <BallPins6 position={[0, 0, 0]} />
        <BallPin position={[-1.5, 0.7, -1]} />
        <BallPin position={[-0.5, 0.7, -1]} />
        <BallPin position={[0.5, 0.7, -1]} />
        <BallPin position={[1.5, 0.7, -1]} />
      </group>
    </>
  );
}
