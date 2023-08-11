import Gem from "./Gem";

export default function Gems2X2({ position }) {
  return (
    <>
      <group position={position}>
        <Gem position={[0.5, 0, 0.5]} />
        <Gem position={[0.5, 0, -0.5]} />
        <Gem position={[-0.5, 0, 0.5]} />
        <Gem position={[-0.5, 0, -0.5]} />
      </group>
    </>
  );
}
