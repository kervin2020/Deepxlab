"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, Suspense, useState } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────
   Blueprint 3D scene — abstract engineering schematic
   that draws itself in real time.
   - Wireframe geometric structures
   - Animated trace lines (signals running through)
   - Pulsing nodes (compute units / data points)
   - Subtle data particles
   No "space" feel: pure technical / lab / blueprint vibe
   ───────────────────────────────────────────────────────────── */

/* Tracer line — signal traveling along a curve */
function SignalLine({
  curve,
  color,
  speed,
  delay = 0,
}: {
  curve: THREE.CatmullRomCurve3;
  color: string;
  speed: number;
  delay?: number;
}) {
  const headRef = useRef<THREE.Mesh>(null);
  const points = useMemo(() => curve.getPoints(80), [curve]);
  const positions = useMemo(
    () => new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])),
    [points]
  );

  // Build the Line object imperatively (avoids JSX <line> typing collision with SVG)
  const lineObj = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.18,
    });
    return new THREE.Line(geom, mat);
  }, [positions, color]);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + delay;
    const u = (Math.sin(t) + 1) / 2;
    if (headRef.current) {
      const p = curve.getPoint(u);
      headRef.current.position.set(p.x, p.y, p.z);
    }
  });

  return (
    <>
      <primitive object={lineObj} />
      <mesh ref={headRef}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.95} />
      </mesh>
    </>
  );
}

/* Pulsing node */
function Node({ position, color, size = 0.06, delay = 0 }: { position: [number, number, number]; color: string; size?: number; delay?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    const s = 1 + Math.sin(t * 1.5) * 0.18;
    ref.current.scale.setScalar(s);
  });
  return (
    <group position={position}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh>
        <ringGeometry args={[size * 1.4, size * 1.55, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

/* Wireframe technical grid (floor reference plane) */
function GridFloor() {
  return (
    <gridHelper
      args={[20, 30, "#0066FF", "#0066FF"]}
      position={[0, -2.5, 0]}
      rotation={[0, 0, 0]}
    >
      <meshBasicMaterial attach="material" color="#0066FF" transparent opacity={0.08} />
    </gridHelper>
  );
}

/* Wireframe geometric structures — abstract blueprint shapes */
function BlueprintFrame({ visible }: { visible: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={groupRef}>
      {/* Central hexagonal architecture */}
      <mesh>
        <torusGeometry args={[1.6, 0.008, 8, 6]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.5 * visible} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.6, 0.008, 8, 6]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.4 * visible} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.6, 0.008, 8, 6]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.4 * visible} />
      </mesh>

      {/* Outer wireframe cube (architecture envelope) */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2.6, 2.6, 2.6)]} />
        <lineBasicMaterial color="#0066FF" transparent opacity={0.18 * visible} />
      </lineSegments>

      {/* Inner octahedron (core) */}
      <lineSegments>
        <edgesGeometry args={[new THREE.OctahedronGeometry(0.85)]} />
        <lineBasicMaterial color="#00FFB2" transparent opacity={0.5 * visible} />
      </lineSegments>

      {/* Tetrahedron rotating opposite */}
      <mesh rotation={[0.5, 0.3, 0.7]}>
        <lineSegments>
          <edgesGeometry args={[new THREE.IcosahedronGeometry(1.2, 0)]} />
          <lineBasicMaterial color="#0066FF" transparent opacity={0.25 * visible} />
        </lineSegments>
      </mesh>
    </group>
  );
}

/* Floating tech particles (data points) */
function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 280;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.014} color="#F5F5F0" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

/* The connected node system + signal traces */
function NodeNetwork() {
  // 7 nodes positioned in 3D space — like a distributed system architecture
  const nodes: { pos: [number, number, number]; main?: boolean; color?: string }[] = [
    { pos: [0, 1.2, 0.6], main: true, color: "#0066FF" },
    { pos: [-1.4, 0.3, 0.8], color: "#0066FF" },
    { pos: [1.5, 0.5, -0.4], color: "#00FFB2" },
    { pos: [-0.8, -0.7, -1.1], color: "#0066FF" },
    { pos: [1.1, -1.0, 0.6], color: "#0066FF" },
    { pos: [0.2, 0.0, 1.5], color: "#00FFB2" },
    { pos: [-1.5, -0.2, -0.6], color: "#0066FF" },
  ];

  // Define connections as pairs of node indices
  const connections: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 5],
    [1, 6], [2, 4], [3, 4], [3, 6],
    [5, 2], [5, 1],
  ];

  // Build catmull curves through space for each connection (with a slight curve)
  const curves = useMemo(() => {
    return connections.map(([a, b]) => {
      const A = new THREE.Vector3(...nodes[a].pos);
      const B = new THREE.Vector3(...nodes[b].pos);
      const mid = A.clone().add(B).multiplyScalar(0.5);
      mid.y += 0.15;
      mid.x += (Math.random() - 0.5) * 0.3;
      return new THREE.CatmullRomCurve3([A, mid, B]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <group>
      {nodes.map((n, i) => (
        <Node
          key={i}
          position={n.pos}
          color={n.color || "#0066FF"}
          size={n.main ? 0.08 : 0.05}
          delay={i * 0.3}
        />
      ))}
      {curves.map((c, i) => (
        <SignalLine
          key={i}
          curve={c}
          color={i % 3 === 0 ? "#00FFB2" : "#0066FF"}
          speed={0.4 + (i % 4) * 0.15}
          delay={i * 0.5}
        />
      ))}
    </group>
  );
}

/* Build animation — fade things in over time */
function BuildController({ children }: { children: (build: number) => React.ReactNode }) {
  const [build, setBuild] = useState(0);
  useFrame((state) => {
    const t = Math.min(state.clock.elapsedTime / 2.4, 1);
    if (Math.abs(t - build) > 0.005) setBuild(t);
  });
  return <>{children(build)}</>;
}

function CameraRig({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  useFrame(() => {
    const targetX = mouse.current.x * 0.4;
    const targetY = -mouse.current.y * 0.25;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function BlueprintScene() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="w-full h-full"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
    >
      <Canvas
        camera={{ position: [0, 0.3, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 5, 12]} />

        <ambientLight intensity={0.3} />
        <pointLight position={[3, 4, 3]} intensity={0.4} color="#0066FF" />
        <pointLight position={[-4, -2, -3]} intensity={0.2} color="#00FFB2" />

        <Suspense fallback={null}>
          <CameraRig mouse={mouse} />
          <BuildController>
            {(build) => (
              <>
                <BlueprintFrame visible={build} />
                <group>
                  <NodeNetwork />
                </group>
                <DataParticles />
                <GridFloor />
              </>
            )}
          </BuildController>
        </Suspense>
      </Canvas>
    </div>
  );
}
