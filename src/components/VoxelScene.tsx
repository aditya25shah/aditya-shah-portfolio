import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

// Professional voxel palette — stone, slate, parchment, muted bronze
const PALETTE = {
  stoneDark: "#2a2e36",
  stone: "#454a55",
  stoneLight: "#6b7280",
  slate: "#5a6478",
  parchment: "#d8cfb8",
  bronze: "#b8864a",
  shadow: "#1a1c22",
};

type Block = { x: number; y: number; z: number; color: string };

// Build a small isometric voxel landscape — terraced stone plateau with a few accents
function buildScene(): Block[] {
  const blocks: Block[] = [];
  const size = 9;

  // Base plateau (3 layers, stepped)
  for (let x = -size; x <= size; x++) {
    for (let z = -size; z <= size; z++) {
      const d = Math.max(Math.abs(x), Math.abs(z));
      // pseudo height map — terraced
      let h = 0;
      if (d <= 3) h = 3;
      else if (d <= 5) h = 2;
      else if (d <= 7) h = 1;
      else h = 0;

      for (let y = 0; y < h; y++) {
        const top = y === h - 1;
        const isEdge = d === 3 || d === 5 || d === 7;
        let color = PALETTE.stone;
        if (top && d <= 3) color = PALETTE.stoneLight;
        else if (top) color = PALETTE.stone;
        else color = PALETTE.stoneDark;
        if (top && isEdge) color = PALETTE.slate;
        blocks.push({ x, y, z, color });
      }
    }
  }

  // Central monolith (parchment column)
  for (let y = 3; y < 7; y++) {
    blocks.push({ x: 0, y, z: 0, color: y === 6 ? PALETTE.bronze : PALETTE.parchment });
  }

  // Side pillars
  const pillars: [number, number][] = [
    [-2, -2], [2, -2], [-2, 2], [2, 2],
  ];
  pillars.forEach(([x, z]) => {
    for (let y = 3; y < 5; y++) {
      blocks.push({ x, y, z, color: PALETTE.slate });
    }
    blocks.push({ x, y: 5, z, color: PALETTE.bronze });
  });

  return blocks;
}

function Voxels() {
  const blocks = useMemo(() => buildScene(), []);
  const group = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    mouse.current.x = state.pointer.x;
    mouse.current.y = state.pointer.y;
    // Slow rotation + subtle parallax
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.35 + mouse.current.y * 0.08,
      0.05
    );
  });

  // Use instanced meshes per color for perf
  const byColor = useMemo(() => {
    const map = new Map<string, Block[]>();
    blocks.forEach((b) => {
      const arr = map.get(b.color) ?? [];
      arr.push(b);
      map.set(b.color, arr);
    });
    return Array.from(map.entries());
  }, [blocks]);

  return (
    <group ref={group} position={[0, -1.5, 0]}>
      {byColor.map(([color, list]) => (
        <InstancedBlocks key={color} color={color} blocks={list} />
      ))}
    </group>
  );
}

function InstancedBlocks({ color, blocks }: { color: string; blocks: Block[] }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useMemo(() => {
    if (!ref.current) return;
    blocks.forEach((b, i) => {
      dummy.position.set(b.x, b.y, b.z);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
  }, [blocks, dummy]);

  // Re-apply on mount
  useFrame(() => {
    if (!ref.current) return;
    if ((ref.current as any).__init) return;
    blocks.forEach((b, i) => {
      dummy.position.set(b.x, b.y, b.z);
      dummy.updateMatrix();
      ref.current!.setMatrixAt(i, dummy.matrix);
    });
    ref.current.instanceMatrix.needsUpdate = true;
    (ref.current as any).__init = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, blocks.length]} castShadow receiveShadow>
      <boxGeometry args={[0.98, 0.98, 0.98]} />
      <meshStandardMaterial color={color} flatShading roughness={0.95} metalness={0.05} />
    </instancedMesh>
  );
}

export function VoxelScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        shadows
        orthographic
        camera={{ position: [14, 12, 14], zoom: 38, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <color attach="background" args={["#1d2027"]} />
          <fog attach="fog" args={["#1d2027", 18, 38]} />
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[10, 14, 6]}
            intensity={1.2}
            color="#f4ead6"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-8, 4, -6]} intensity={0.35} color="#6b7da0" />
          <Voxels />
        </Suspense>
      </Canvas>
    </div>
  );
}
