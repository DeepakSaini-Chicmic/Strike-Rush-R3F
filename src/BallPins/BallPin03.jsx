import BallPin from "./BallPin01";
import NormalBlock from "../Blocks/NormalBlock.jsx";

export default function BallPins3({ position = [0, 0, 0] }) {
  return (
    <>
      <group position={position}>
        <NormalBlock />
        <BallPin position={[0, 0.7, 0.5]} />
        <BallPin position={[-0.5, 0.7, 0]} />
        <BallPin position={[0.5, 0.7, 0]} />
      </group>
    </>
  );
}
