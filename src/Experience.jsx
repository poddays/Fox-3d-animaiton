import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Placeholder from "./Placeholder.jsx";
import Fox from "./Fox.jsx";
export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} shadow-normalBias = {0.04} />
      <ambientLight intensity={0.5} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback= { <Placeholder position-y={0.5} scale={[3, 1.5, 4]}/> } >
        <Fox scale={0.04} position={[0, -1, 0]} />
      </Suspense>
    </>
  );
}
