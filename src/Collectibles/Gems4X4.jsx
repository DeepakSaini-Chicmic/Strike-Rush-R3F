import NormalBlock from "../Blocks/NormalBlock";
import Gems2X2 from "./Gems2X2";

export default function Gems4X4({ position }) {
  return (
    <>
      <group position={position}>
        <NormalBlock />
        <Gems2X2 position={[1, 0, 1]} />
        <Gems2X2 position={[1, 0, -1]} />
        <Gems2X2 position={[-1, 0, 1]} />
        <Gems2X2 position={[-1, 0, -1]} />
      </group>
    </>
  );
}
