"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface FurnitureModelProps {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  floatSpeed?: number;
  floatIntensity?: number;
}

export function FurnitureModel({
  path,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  floatSpeed = 1.5,
  floatIntensity = 0.5,
}: FurnitureModelProps) {
  const { scene } = useGLTF(path);
  const groupRef = useRef<THREE.Group>(null);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y +=
        Math.sin(state.clock.elapsedTime * 0.2) * 0.001;
    }
  });

  return (
    <Float
      speed={floatSpeed}
      rotationIntensity={0.15}
      floatIntensity={floatIntensity}
    >
      <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
        <Center disableY>
          <primitive object={clonedScene} />
        </Center>
      </group>
    </Float>
  );
}

useGLTF.preload("/models/lounge-chair/model.gltf");
useGLTF.preload("/models/table/model.gltf");
