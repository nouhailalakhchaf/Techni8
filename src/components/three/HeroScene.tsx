"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function generateParticleData(count: number) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (seededRandom(i * 3) - 0.5) * 20;
    pos[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 20;
    pos[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 20;
    const isCopper = seededRandom(i * 7 + 100) > 0.85;
    col[i * 3] = isCopper ? 1.0 : 0.25;
    col[i * 3 + 1] = isCopper ? 0.48 : 0.66;
    col[i * 3 + 2] = isCopper ? 0.0 : 0.96;
  }
  return { pos, col };
}

const PARTICLE_COUNT = 600;
const PARTICLE_DATA = generateParticleData(PARTICLE_COUNT);

const NODE_COUNT = 12;
const NODES = Array.from({ length: NODE_COUNT }, (_, i) => ({
  position: [
    (seededRandom(i * 5 + 200) - 0.5) * 8,
    (seededRandom(i * 5 + 201) - 0.5) * 6,
    (seededRandom(i * 5 + 202) - 0.5) * 4,
  ] as [number, number, number],
  scale: 0.03 + seededRandom(i * 5 + 203) * 0.06,
  speed: 0.5 + seededRandom(i * 5 + 204) * 1.5,
  phase: i * 0.5,
}));

function ParticleField() {
  const mesh = useRef<THREE.Points>(null);
  const geomRef = useRef<THREE.BufferGeometry>(null);

  useEffect(() => {
    if (!geomRef.current) return;
    geomRef.current.setAttribute("position", new THREE.BufferAttribute(PARTICLE_DATA.pos, 3));
    geomRef.current.setAttribute("color", new THREE.BufferAttribute(PARTICLE_DATA.col, 3));
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry ref={geomRef} />
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const lineGeom = useMemo(() => {
    const lines: number[] = [];
    for (let i = 0; i < NODES.length; i++) {
      for (let j = i + 1; j < NODES.length; j++) {
        const dist = Math.sqrt(
          Math.pow(NODES[i].position[0] - NODES[j].position[0], 2) +
            Math.pow(NODES[i].position[1] - NODES[j].position[1], 2) +
            Math.pow(NODES[i].position[2] - NODES[j].position[2], 2)
        );
        if (dist < 5) {
          lines.push(...NODES[i].position, ...NODES[j].position);
        }
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
    return geom;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => (
        <Float key={i} speed={node.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={node.position}>
            <icosahedronGeometry args={[node.scale, 1]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#FF7A00" : "#3FA9F5"}
              emissive={i % 3 === 0 ? "#FF7A00" : "#3FA9F5"}
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </mesh>
        </Float>
      ))}
      <lineSegments geometry={lineGeom}>
        <lineBasicMaterial
          color="#3FA9F5"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function CentralStructure() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });

  return (
    <Float speed={0.4} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          resolution={256}
          transmission={0.95}
          roughness={0.1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          color="#102B46"
        />
      </mesh>
    </Float>
  );
}

function GlowRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    ringRef.current.rotation.x = Math.PI / 2 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3, 0.01, 16, 100]} />
      <meshStandardMaterial
        color="#3FA9F5"
        emissive="#3FA9F5"
        emissiveIntensity={1}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#3FA9F5" />
        <pointLight position={[-5, -3, 3]} intensity={0.3} color="#FF7A00" />
        <directionalLight position={[0, 5, 5]} intensity={0.3} color="#4CC9F0" />

        <CentralStructure />
        <NetworkNodes />
        <ParticleField />
        <GlowRing />
      </Canvas>
    </div>
  );
}
