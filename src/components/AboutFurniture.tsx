"use client";

import { Suspense, useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  RoundedBox,
} from "@react-three/drei";
import * as THREE from "three";

type Props = {
  progressRef: RefObject<number>;
  interactive?: boolean;
};

function useWoodMaterial() {
  return useMemo(() => {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return new THREE.MeshPhysicalMaterial({
        color: "#5c3d2e",
        roughness: 0.42,
        clearcoat: 0.22,
      });
    }

    ctx.fillStyle = "#5a3828";
    ctx.fillRect(0, 0, size, size);

    const wash = ctx.createLinearGradient(0, 0, size, 0);
    wash.addColorStop(0, "rgba(32,16,10,0.38)");
    wash.addColorStop(0.45, "rgba(168,112,68,0.16)");
    wash.addColorStop(1, "rgba(28,14,8,0.34)");
    ctx.fillStyle = wash;
    ctx.fillRect(0, 0, size, size);

    for (let i = 0; i < 140; i++) {
      const nx = (i / 140) * size;
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${28 + ((i * 17) % 55)}, ${14 + ((i * 9) % 28)}, 8, ${0.05 + (i % 6) * 0.03})`;
      ctx.lineWidth = 0.7 + (i % 4) * 0.55;
      for (let y = 0; y <= size; y += 5) {
        const x =
          nx +
          Math.sin(y * 0.032 + i * 0.37) * 11 +
          Math.sin(y * 0.011 + i) * 4.5;
        if (y === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    const map = new THREE.CanvasTexture(canvas);
    map.colorSpace = THREE.SRGBColorSpace;
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    map.anisotropy = 8;
    map.repeat.set(1.6, 1.6);

    return new THREE.MeshPhysicalMaterial({
      map,
      color: "#c9a07a",
      roughness: 0.38,
      metalness: 0.04,
      clearcoat: 0.28,
      clearcoatRoughness: 0.38,
      sheen: 0.18,
      sheenColor: new THREE.Color("#8a5a38"),
      envMapIntensity: 0.95,
    });
  }, []);
}

function WoodBar({
  position,
  size,
  material,
}: {
  position: [number, number, number];
  size: [number, number, number];
  material: THREE.Material;
}) {
  return (
    <mesh position={position} material={material} castShadow>
      <boxGeometry args={size} />
    </mesh>
  );
}

function Chair({ progressRef }: Props) {
  const group = useRef<THREE.Group>(null);
  const wood = useWoodMaterial();

  const legX = 0.2;
  const frontZ = 0.185;
  const backZ = -0.185;
  const seatY = 0.45;
  const backY = 0.94;
  const lowY = 0.13;
  const midBackY = 0.54;
  const width = legX * 2;
  const depth = frontZ - backZ;
  const overlap = 0.05;

  useFrame((state) => {
    if (!group.current) return;
    const scroll = progressRef.current ?? 0;
    group.current.rotation.y =
      0.35 + scroll * 0.45 + state.clock.elapsedTime * 0.12;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.025;
  });

  return (
    <group ref={group} scale={0.78}>
      <Center>
        <group>
          <mesh material={wood} position={[-legX, seatY / 2, frontZ]} castShadow>
            <cylinderGeometry args={[0.016, 0.022, seatY, 22]} />
          </mesh>
          <mesh material={wood} position={[legX, seatY / 2, frontZ]} castShadow>
            <cylinderGeometry args={[0.016, 0.022, seatY, 22]} />
          </mesh>
          <mesh material={wood} position={[-legX, backY / 2, backZ]} castShadow>
            <cylinderGeometry args={[0.015, 0.022, backY, 22]} />
          </mesh>
          <mesh material={wood} position={[legX, backY / 2, backZ]} castShadow>
            <cylinderGeometry args={[0.015, 0.022, backY, 22]} />
          </mesh>

          <WoodBar
            material={wood}
            position={[0, lowY, frontZ]}
            size={[width + overlap, 0.024, 0.024]}
          />
          <WoodBar
            material={wood}
            position={[0, lowY, backZ]}
            size={[width + overlap, 0.024, 0.024]}
          />
          <WoodBar
            material={wood}
            position={[-legX, lowY, 0]}
            size={[0.024, 0.024, depth + overlap]}
          />
          <WoodBar
            material={wood}
            position={[legX, lowY, 0]}
            size={[0.024, 0.024, depth + overlap]}
          />

          <WoodBar
            material={wood}
            position={[0, seatY - 0.02, frontZ]}
            size={[width + overlap, 0.04, 0.03]}
          />
          <WoodBar
            material={wood}
            position={[0, seatY - 0.02, backZ]}
            size={[width + overlap, 0.04, 0.03]}
          />
          <WoodBar
            material={wood}
            position={[-legX, seatY - 0.02, 0]}
            size={[0.03, 0.04, depth + overlap]}
          />
          <WoodBar
            material={wood}
            position={[legX, seatY - 0.02, 0]}
            size={[0.03, 0.04, depth + overlap]}
          />

          <RoundedBox
            args={[width + 0.1, 0.04, depth + 0.08]}
            radius={0.012}
            smoothness={4}
            position={[0, seatY + 0.012, 0]}
            castShadow
          >
            <primitive object={wood} attach="material" />
          </RoundedBox>
          <RoundedBox
            args={[width + 0.04, 0.05, depth + 0.02]}
            radius={0.018}
            smoothness={4}
            position={[0, seatY + 0.052, 0]}
            castShadow
          >
            <meshPhysicalMaterial
              color="#e8d8c4"
              roughness={0.88}
              sheen={0.45}
              sheenColor="#d2b48c"
            />
          </RoundedBox>

          <WoodBar
            material={wood}
            position={[0, midBackY, backZ]}
            size={[width + overlap, 0.028, 0.026]}
          />
          <WoodBar
            material={wood}
            position={[0, backY - 0.016, backZ]}
            size={[width + overlap, 0.032, 0.032]}
          />

          {[-0.12, -0.04, 0.04, 0.12].map((x) => (
            <WoodBar
              key={x}
              material={wood}
              position={[x, (midBackY + backY - 0.016) / 2, backZ]}
              size={[0.026, backY - 0.016 - midBackY + 0.04, 0.016]}
            />
          ))}
        </group>
      </Center>
    </group>
  );
}

export default function AboutFurniture({ progressRef, interactive = false }: Props) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.6]}
      camera={{ position: [2.6, 1.15, 4.8], fov: 36 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.32} />
      <spotLight
        position={[4, 7, 3]}
        intensity={2.4}
        angle={0.42}
        penumbra={1}
        color="#fff1dc"
      />
      <spotLight
        position={[-4, 3, -2]}
        intensity={0.85}
        angle={0.6}
        penumbra={1}
        color="#c48a5c"
      />
      <directionalLight position={[1, 4, 2]} intensity={0.55} color="#f4ead8" />
      <Bounds fit margin={1.55}>
        {interactive ? (
          <PresentationControls
            global
            snap
            speed={1.2}
            polar={[-0.15, 0.35]}
            azimuth={[-0.8, 0.8]}
          >
            <Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.35}>
              <Chair progressRef={progressRef} />
            </Float>
          </PresentationControls>
        ) : (
          <Chair progressRef={progressRef} />
        )}
      </Bounds>
      <ContactShadows
        position={[0, -0.42, 0]}
        opacity={0.45}
        scale={6}
        blur={2.4}
        far={3.5}
        color="#070707"
      />
      <Suspense fallback={null}>
        <Environment preset="warehouse" environmentIntensity={0.55} />
      </Suspense>
    </Canvas>
  );
}
