"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { FurnitureModel } from "./FurnitureModel";

function StudioScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const { x, y } = state.pointer;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        x * 0.08,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -y * 0.03,
        0.04
      );
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1.4, 5.2]} fov={38} />

      <ambientLight intensity={1.6} color="#ffffff" />
      <hemisphereLight args={["#ffffff", "#b0a090", 0.9]} />
      <directionalLight
        position={[3, 6, 4]}
        intensity={2.2}
        color="#fffaf5"
        castShadow
      />
      <directionalLight position={[-4, 3, 2]} intensity={0.9} color="#f5f5f5" />
      <pointLight position={[0, 3, 2]} intensity={1.2} color="#ffffff" />

      <group ref={groupRef} position={[0, -0.15, 0]}>
        <FurnitureModel
          path="/models/lounge-chair/model.gltf"
          position={[-1.05, -0.7, 0.15]}
          rotation={[0, 0.55, 0]}
          scale={1.05}
          floatSpeed={1}
          floatIntensity={0.15}
        />

        <FurnitureModel
          path="/models/lounge-chair/model.gltf"
          position={[1.05, -0.7, 0.15]}
          rotation={[0, -0.55, 0]}
          scale={1.05}
          floatSpeed={1.1}
          floatIntensity={0.15}
        />

        <FurnitureModel
          path="/models/table/model.gltf"
          position={[0, -0.72, 0.85]}
          rotation={[0, 0.3, 0]}
          scale={0.85}
          floatSpeed={0.8}
          floatIntensity={0.1}
        />
      </group>

      <ContactShadows
        position={[0, -0.88, 0]}
        opacity={0.35}
        scale={10}
        blur={3}
        far={3}
        color="#4a4a4a"
      />
    </>
  );
}

function SceneLoader() {
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      className="!w-full !h-full"
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <Suspense fallback={<SceneLoader />}>
        <StudioScene />
      </Suspense>
    </Canvas>
  );
}
