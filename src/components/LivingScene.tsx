"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────────
   LivingScene — a single, persistent, scroll-driven 3D scene that lives
   behind the entire page. The particle cloud reshapes itself as you
   scroll, forming representations of each department/case/value.

   Scroll-driven states:
     00 Hero           → loose organic cloud
     01 Stats          → 4 dense clusters (one per stat)
     02 Tagline        → tight unified knot (six expertises become one)
     03–08 Departments → 6 distinct icons (brackets, server, shield, atom, cloud, chip)
     09–12 Cases       → 4 architecture schematics (flow, cross, columns, book)
     13 Values         → 3 vertical pillars
     14 CTA            → singularity convergence

   Each transition is a smooth lerp. The points are also wired with
   nearest-neighbour signal lines that flow continuously.
   ───────────────────────────────────────────────────────────────────── */

const N = 280; // particle count — denser for crisper shapes
const LINE_REBUILD_INTERVAL = 3; // rebuild line connections every 3 frames (perf)

// ── Shape utilities ──────────────────────────────────────────────────
function rand(min: number, max: number) { return Math.random() * (max - min) + min; }

// Distribute n points along a parametric path (path takes t∈[0,1] → [x,y,z])
function alongPath(
  arr: Float32Array,
  start: number,
  count: number,
  path: (t: number) => [number, number, number],
  jitter = 0.04
) {
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(1, count - 1);
    const [x, y, z] = path(t);
    const idx = (start + i) * 3;
    arr[idx + 0] = x + (Math.random() - 0.5) * jitter;
    arr[idx + 1] = y + (Math.random() - 0.5) * jitter;
    arr[idx + 2] = z + (Math.random() - 0.5) * jitter;
  }
}

// Distribute n points along a polyline (flat path of [x,y] points, z=zPlane)
function alongPolyline(
  arr: Float32Array,
  start: number,
  count: number,
  pts: [number, number][],
  zPlane = 0,
  jitter = 0.04
) {
  // Compute cumulative segment lengths for even distribution
  const lengths: number[] = [0];
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dy = pts[i][1] - pts[i - 1][1];
    lengths.push(lengths[i - 1] + Math.sqrt(dx * dx + dy * dy));
  }
  const total = lengths[lengths.length - 1] || 1;
  for (let i = 0; i < count; i++) {
    const u = (i / Math.max(1, count - 1)) * total;
    let seg = 1;
    while (seg < pts.length - 1 && lengths[seg] < u) seg++;
    const segStart = lengths[seg - 1];
    const segLen = lengths[seg] - segStart || 1;
    const t = (u - segStart) / segLen;
    const x = pts[seg - 1][0] + t * (pts[seg][0] - pts[seg - 1][0]);
    const y = pts[seg - 1][1] + t * (pts[seg][1] - pts[seg - 1][1]);
    const idx = (start + i) * 3;
    arr[idx + 0] = x + (Math.random() - 0.5) * jitter;
    arr[idx + 1] = y + (Math.random() - 0.5) * jitter;
    arr[idx + 2] = zPlane + (Math.random() - 0.5) * jitter;
  }
}

// ── Shape generators (each returns Float32Array of N*3) ──────────────

function shapeOrganicCloud(): Float32Array {
  const arr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = rand(1.5, 2.6);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.85;
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

function shapeStatClusters(): Float32Array {
  const arr = new Float32Array(N * 3);
  const centers: [number, number, number][] = [
    [-2.4, 0.4, 0], [-0.8, 0.4, 0], [0.8, 0.4, 0], [2.4, 0.4, 0],
  ];
  for (let i = 0; i < N; i++) {
    const c = centers[i % 4];
    const r = Math.random() * 0.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3 + 0] = c[0] + r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = c[1] + r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = c[2] + r * Math.cos(phi);
  }
  return arr;
}

function shapeUnityKnot(): Float32Array {
  // Trefoil-ish knot — symbolizes "six become one"
  const arr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    const u = t * 3;
    const r = 1.2;
    arr[i * 3 + 0] = (Math.sin(u) + 2 * Math.sin(2 * u)) * 0.4 * r;
    arr[i * 3 + 1] = (Math.cos(u) - 2 * Math.cos(2 * u)) * 0.4 * r;
    arr[i * 3 + 2] = -Math.sin(3 * u) * 0.4 * r;
  }
  return arr;
}

// ── DEPARTMENT shapes ────────────────────────────────────────────────

function shapeBrackets(): Float32Array {
  // < / >  — code brackets, with a slash and dots
  const arr = new Float32Array(N * 3);
  // Outer < bracket (40%)
  alongPolyline(arr, 0, Math.floor(N * 0.20), [
    [-0.3, 1.4], [-1.5, 0], [-0.3, -1.4],
  ], 0, 0.03);
  // Outer > bracket (40%)
  alongPolyline(arr, Math.floor(N * 0.20), Math.floor(N * 0.20), [
    [0.3, 1.4], [1.5, 0], [0.3, -1.4],
  ], 0, 0.03);
  // Inner < bracket (depth)
  alongPolyline(arr, Math.floor(N * 0.40), Math.floor(N * 0.15), [
    [-0.3, 1.0], [-1.1, 0], [-0.3, -1.0],
  ], 0.18, 0.03);
  // Inner > bracket (depth)
  alongPolyline(arr, Math.floor(N * 0.55), Math.floor(N * 0.15), [
    [0.3, 1.0], [1.1, 0], [0.3, -1.0],
  ], 0.18, 0.03);
  // Forward slash /
  alongPolyline(arr, Math.floor(N * 0.70), Math.floor(N * 0.20), [
    [-0.5, -1.0], [0.5, 1.0],
  ], 0, 0.03);
  // Cursor blocks
  alongPolyline(arr, Math.floor(N * 0.90), Math.floor(N * 0.05), [
    [-1.7, -1.6], [-1.4, -1.6],
  ], 0.15, 0.02);
  alongPolyline(arr, Math.floor(N * 0.95), N - Math.floor(N * 0.95), [
    [1.4, -1.6], [1.7, -1.6],
  ], 0.15, 0.02);
  return arr;
}

function shapeServer(): Float32Array {
  // Server rack: 4 stacked units, each with LED indicators on the right
  const arr = new Float32Array(N * 3);
  const rectsCount = 4;
  const perUnit = Math.floor(N / rectsCount);
  for (let r = 0; r < rectsCount; r++) {
    const y = 1.4 - r * 0.85;
    const startIdx = r * perUnit;
    const count = r === rectsCount - 1 ? N - startIdx : perUnit;
    // Outline of the unit (60% of unit's points)
    const outlineCount = Math.floor(count * 0.6);
    alongPolyline(arr, startIdx, outlineCount, [
      [-1.5, y + 0.3], [1.5, y + 0.3], [1.5, y - 0.3],
      [-1.5, y - 0.3], [-1.5, y + 0.3],
    ], 0, 0.025);
    // Front-panel slits (interior horizontal lines)
    const slitCount = Math.floor(count * 0.25);
    alongPolyline(arr, startIdx + outlineCount, slitCount, [
      [-1.2, y], [0.8, y],
    ], 0, 0.02);
    // LED indicators (right side, 3 dots)
    const ledCount = count - outlineCount - slitCount;
    for (let i = 0; i < ledCount; i++) {
      const which = i % 3;
      const idx = (startIdx + outlineCount + slitCount + i) * 3;
      arr[idx + 0] = 1.1 + which * 0.12 + (Math.random() - 0.5) * 0.04;
      arr[idx + 1] = y + (Math.random() - 0.5) * 0.05;
      arr[idx + 2] = 0.18 + (Math.random() - 0.5) * 0.05;
    }
  }
  return arr;
}

function shapeShield(): Float32Array {
  // Heraldic shield: outline → V bottom + curved top + lock at center
  const arr = new Float32Array(N * 3);
  // Shield outline: rounded top, V at bottom
  const outlinePts: [number, number][] = [
    [-1.3, 1.0], [-1.3, -0.1], [-1.0, -0.7], [-0.5, -1.2],
    [0, -1.5], [0.5, -1.2], [1.0, -0.7], [1.3, -0.1],
    [1.3, 1.0], [-1.3, 1.0],
  ];
  alongPolyline(arr, 0, Math.floor(N * 0.5), outlinePts, 0, 0.03);
  // Inner shield (depth)
  const innerPts: [number, number][] = [
    [-0.85, 0.65], [-0.85, -0.05], [-0.7, -0.45], [-0.35, -0.85],
    [0, -1.05], [0.35, -0.85], [0.7, -0.45], [0.85, -0.05],
    [0.85, 0.65], [-0.85, 0.65],
  ];
  alongPolyline(arr, Math.floor(N * 0.5), Math.floor(N * 0.20), innerPts, 0.15, 0.025);
  // Vertical bar of cross
  alongPolyline(arr, Math.floor(N * 0.70), Math.floor(N * 0.12),
    [[0, 0.5], [0, -0.7]], 0.3, 0.02);
  // Horizontal bar of cross
  alongPolyline(arr, Math.floor(N * 0.82), Math.floor(N * 0.10),
    [[-0.5, -0.05], [0.5, -0.05]], 0.3, 0.02);
  // Keyhole/lock dot at center
  for (let i = Math.floor(N * 0.92); i < N; i++) {
    const idx = i * 3;
    arr[idx + 0] = (Math.random() - 0.5) * 0.18;
    arr[idx + 1] = -0.05 + (Math.random() - 0.5) * 0.18;
    arr[idx + 2] = 0.4 + (Math.random() - 0.5) * 0.05;
  }
  return arr;
}

function shapeAtom(): Float32Array {
  // 3 ellipses crossing at center + nucleus
  const arr = new Float32Array(N * 3);
  const ellipseCount = 3;
  const perEllipse = Math.floor((N - 20) / ellipseCount);
  const tilts: [number, number, number][] = [
    [0, 0, 0],
    [0, 0, Math.PI / 3],
    [0, 0, -Math.PI / 3],
  ];
  for (let e = 0; e < ellipseCount; e++) {
    const tilt = tilts[e];
    const start = e * perEllipse;
    for (let i = 0; i < perEllipse; i++) {
      const t = (i / perEllipse) * Math.PI * 2;
      const x0 = Math.cos(t) * 1.6;
      const y0 = Math.sin(t) * 0.55;
      const z0 = 0;
      // rotate by tilt[2] around z
      const cz = Math.cos(tilt[2]);
      const sz = Math.sin(tilt[2]);
      const x = x0 * cz - y0 * sz;
      const y = x0 * sz + y0 * cz;
      const idx = (start + i) * 3;
      arr[idx + 0] = x + (Math.random() - 0.5) * 0.04;
      arr[idx + 1] = y + (Math.random() - 0.5) * 0.04;
      arr[idx + 2] = z0 + (Math.random() - 0.5) * 0.04;
    }
  }
  // Nucleus (last ~20 points)
  const nucleusStart = ellipseCount * perEllipse;
  for (let i = nucleusStart; i < N; i++) {
    const r = Math.random() * 0.18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

function shapeCloud(): Float32Array {
  // Cloud silhouette (organic blob with peaks)
  const arr = new Float32Array(N * 3);
  const pts: [number, number][] = [
    [-1.6, -0.3], [-1.6, 0.1], [-1.3, 0.4], [-0.9, 0.3], [-0.7, 0.7],
    [-0.2, 0.9], [0.3, 0.9], [0.7, 0.7], [1.0, 0.3], [1.3, 0.4],
    [1.6, 0.1], [1.6, -0.3], [-1.6, -0.3],
  ];
  alongPolyline(arr, 0, Math.floor(N * 0.7), pts, 0, 0.05);
  // Internal data lines (cloud→clients)
  alongPolyline(arr, Math.floor(N * 0.7), Math.floor(N * 0.1),
    [[-0.8, -0.6], [-0.8, -1.2]], 0, 0.04);
  alongPolyline(arr, Math.floor(N * 0.8), Math.floor(N * 0.1),
    [[0, -0.6], [0, -1.2]], 0, 0.04);
  alongPolyline(arr, Math.floor(N * 0.9), N - Math.floor(N * 0.9),
    [[0.8, -0.6], [0.8, -1.2]], 0, 0.04);
  return arr;
}

function shapeChip(): Float32Array {
  // Microchip — square IC body + pins + interior trace lines + center dot
  const arr = new Float32Array(N * 3);
  let idx = 0;

  // Outer square outline (25%)
  const sq: [number, number][] = [
    [-0.85, 0.85], [0.85, 0.85], [0.85, -0.85], [-0.85, -0.85], [-0.85, 0.85],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.25), sq, 0, 0.025);
  idx += Math.floor(N * 0.25);

  // Pin notch (small circle at top, 5%)
  for (let i = 0; i < Math.floor(N * 0.05); i++) {
    const a = Math.PI + (i / Math.floor(N * 0.05)) * Math.PI;
    arr[(idx + i) * 3 + 0] = Math.cos(a) * 0.12;
    arr[(idx + i) * 3 + 1] = 0.85 + Math.sin(a) * 0.12;
    arr[(idx + i) * 3 + 2] = 0;
  }
  idx += Math.floor(N * 0.05);

  // Pins (16 total: 4 per side, ~30% of N)
  const pinsPerSide = 4;
  const pinLen = 0.4;
  const totalPinsCount = Math.floor(N * 0.30);
  const pointsPerPin = Math.floor(totalPinsCount / (pinsPerSide * 4));
  // Top
  for (let i = 0; i < pinsPerSide; i++) {
    const x = -0.55 + i * 0.37;
    alongPolyline(arr, idx, pointsPerPin, [[x, 0.85], [x, 0.85 + pinLen]], 0, 0.02);
    idx += pointsPerPin;
  }
  // Bottom
  for (let i = 0; i < pinsPerSide; i++) {
    const x = -0.55 + i * 0.37;
    alongPolyline(arr, idx, pointsPerPin, [[x, -0.85], [x, -0.85 - pinLen]], 0, 0.02);
    idx += pointsPerPin;
  }
  // Left
  for (let i = 0; i < pinsPerSide; i++) {
    const y = -0.55 + i * 0.37;
    alongPolyline(arr, idx, pointsPerPin, [[-0.85, y], [-0.85 - pinLen, y]], 0, 0.02);
    idx += pointsPerPin;
  }
  // Right
  for (let i = 0; i < pinsPerSide; i++) {
    const y = -0.55 + i * 0.37;
    alongPolyline(arr, idx, pointsPerPin, [[0.85, y], [0.85 + pinLen, y]], 0, 0.02);
    idx += pointsPerPin;
  }

  // Interior PCB trace lines (15%)
  const traceCount = Math.floor(N * 0.15);
  alongPolyline(arr, idx, Math.floor(traceCount * 0.4),
    [[-0.6, 0.4], [-0.2, 0.4], [-0.2, -0.2], [0.4, -0.2]], 0.12, 0.02);
  idx += Math.floor(traceCount * 0.4);
  alongPolyline(arr, idx, traceCount - Math.floor(traceCount * 0.4),
    [[0.5, 0.5], [0.5, 0]], 0.12, 0.02);
  idx += traceCount - Math.floor(traceCount * 0.4);

  // Center brand dot (remainder)
  for (; idx < N; idx++) {
    const i3 = idx * 3;
    const r = Math.random() * 0.16;
    const a = Math.random() * Math.PI * 2;
    arr[i3 + 0] = Math.cos(a) * r;
    arr[i3 + 1] = Math.sin(a) * r;
    arr[i3 + 2] = 0.05 + (Math.random() - 0.5) * 0.05;
  }
  return arr;
}

// ── CASE STUDY shapes ────────────────────────────────────────────────

function shapeBankingFlow(): Float32Array {
  // Horizontal flow of transactions — multiple parallel sine waves
  const arr = new Float32Array(N * 3);
  const layers = 5;
  const perLayer = Math.floor(N / layers);
  for (let l = 0; l < layers; l++) {
    const yOffset = -1.2 + l * 0.6;
    const start = l * perLayer;
    const count = l === layers - 1 ? N - start : perLayer;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const x = -2.5 + t * 5;
      const y = yOffset + Math.sin(t * Math.PI * 4 + l) * 0.18;
      const idx = (start + i) * 3;
      arr[idx + 0] = x;
      arr[idx + 1] = y;
      arr[idx + 2] = (Math.random() - 0.5) * 0.1;
    }
  }
  return arr;
}

function shapeMedicalCross(): Float32Array {
  // Plus sign with surrounding network nodes
  const arr = new Float32Array(N * 3);
  // Cross (60% of points)
  alongPolyline(arr, 0, Math.floor(N * 0.3),
    [[0, 1.4], [0, -1.4]], 0, 0.05);
  alongPolyline(arr, Math.floor(N * 0.3), Math.floor(N * 0.3),
    [[-1.4, 0], [1.4, 0]], 0, 0.05);
  // Network nodes around (40%) on a circle
  const networkCount = N - Math.floor(N * 0.6);
  for (let i = 0; i < networkCount; i++) {
    const a = (i / networkCount) * Math.PI * 2;
    const r = 1.9 + Math.random() * 0.3;
    const idx = (Math.floor(N * 0.6) + i) * 3;
    arr[idx + 0] = Math.cos(a) * r;
    arr[idx + 1] = Math.sin(a) * r * 0.85;
    arr[idx + 2] = (Math.random() - 0.5) * 0.2;
  }
  return arr;
}

function shapeColumns(): Float32Array {
  // 4 government columns (Greek temple)
  const arr = new Float32Array(N * 3);
  const cols = 4;
  const perCol = Math.floor((N - 30) / cols);
  for (let c = 0; c < cols; c++) {
    const x = -1.8 + c * 1.2;
    const start = c * perCol;
    const count = c === cols - 1 ? N - 30 - start : perCol;
    // Vertical strip
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const idx = (start + i) * 3;
      arr[idx + 0] = x + (Math.random() - 0.5) * 0.18;
      arr[idx + 1] = -1.2 + t * 2.4;
      arr[idx + 2] = (Math.random() - 0.5) * 0.12;
    }
  }
  // Roof line (last 30 points)
  for (let i = 0; i < 30; i++) {
    const t = i / 30;
    const idx = (cols * perCol + i) * 3;
    arr[idx + 0] = -2.2 + t * 4.4;
    arr[idx + 1] = 1.4;
    arr[idx + 2] = (Math.random() - 0.5) * 0.1;
  }
  return arr;
}

function shapeBook(): Float32Array {
  // Open book — 2 trapezoids meeting at center
  const arr = new Float32Array(N * 3);
  // Left page
  const leftPts: [number, number][] = [
    [0, 1.0], [-1.8, 0.6], [-1.8, -0.6], [0, -1.0], [0, 1.0],
  ];
  alongPolyline(arr, 0, Math.floor(N / 2), leftPts, 0, 0.04);
  // Right page
  const rightPts: [number, number][] = [
    [0, 1.0], [1.8, 0.6], [1.8, -0.6], [0, -1.0], [0, 1.0],
  ];
  alongPolyline(arr, Math.floor(N / 2), N - Math.floor(N / 2), rightPts, 0, 0.04);
  return arr;
}

// ── Other states ─────────────────────────────────────────────────────

function shapeValuesPillars(): Float32Array {
  const arr = new Float32Array(N * 3);
  const xs = [-1.6, 0, 1.6];
  for (let i = 0; i < N; i++) {
    const c = xs[i % 3];
    arr[i * 3 + 0] = c + (Math.random() - 0.5) * 0.22;
    arr[i * 3 + 1] = (Math.random() - 0.5) * 3.0;
    arr[i * 3 + 2] = (Math.random() - 0.5) * 0.22;
  }
  return arr;
}

function shapeSingularity(): Float32Array {
  const arr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = Math.random() * 0.18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

// ── Build all states + breakpoints ───────────────────────────────────

function buildStates(): { states: Float32Array[]; breakpoints: number[] } {
  const states: Float32Array[] = [
    shapeOrganicCloud(),     // 0  hero
    shapeStatClusters(),     // 1  stats
    shapeUnityKnot(),        // 2  tagline
    shapeBrackets(),         // 3  dept 01 — software
    shapeServer(),           // 4  dept 02 — infra
    shapeShield(),           // 5  dept 03 — security
    shapeAtom(),             // 6  dept 04 — R&D
    shapeCloud(),            // 7  dept 05 — SaaS
    shapeChip(),             // 8  dept 06 — hardware
    shapeBankingFlow(),      // 9  case banking
    shapeMedicalCross(),     // 10 case healthcare
    shapeColumns(),          // 11 case gov
    shapeBook(),             // 12 case education
    shapeValuesPillars(),    // 13 values
    shapeSingularity(),      // 14 cta
  ];

  // Scroll progress breakpoints — give each shape ~5-7% of scroll so users
  // have time to see them. Transitions fill ~half each segment.
  const breakpoints = [
    0.00, // 0  hero
    0.10, // 1  stats
    0.20, // 2  tagline
    0.27, // 3  dept brackets
    0.34, // 4  dept server
    0.41, // 5  dept shield
    0.48, // 6  dept atom
    0.55, // 7  dept cloud
    0.62, // 8  dept chip
    0.69, // 9  case banking
    0.76, // 10 case healthcare
    0.82, // 11 case gov
    0.88, // 12 case education
    0.94, // 13 values
    1.00, // 14 cta
  ];

  return { states, breakpoints };
}

function getSceneState(progress: number, states: Float32Array[], breakpoints: number[]) {
  let idx = 0;
  for (let i = 0; i < breakpoints.length - 1; i++) {
    if (progress >= breakpoints[i] && progress <= breakpoints[i + 1]) {
      idx = i;
      break;
    }
  }
  if (progress >= 1) idx = breakpoints.length - 2;
  const span = breakpoints[idx + 1] - breakpoints[idx];
  const t = Math.max(0, Math.min(1, (progress - breakpoints[idx]) / (span || 1)));
  const ts = t * t * (3 - 2 * t); // smoothstep
  return { from: states[idx], to: states[idx + 1], t: ts, idx };
}

function ParticleCloud({
  scrollRef,
  mouseRef,
}: {
  scrollRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { states, breakpoints } = useMemo(() => buildStates(), []);

  const positions = useMemo(() => new Float32Array(N * 3), []);
  const phases = useMemo(() => {
    const arr = new Float32Array(N);
    for (let i = 0; i < N; i++) arr[i] = Math.random() * Math.PI * 2;
    return arr;
  }, []);
  useEffect(() => {
    for (let i = 0; i < positions.length; i++) {
      positions[i] = states[0][i];
    }
  }, [positions, states]);

  const MAX_CONNS = N * 2;
  const linePositions = useMemo(() => new Float32Array(MAX_CONNS * 6), [MAX_CONNS]);
  const lineColors = useMemo(() => new Float32Array(MAX_CONNS * 6), [MAX_CONNS]);
  const frameCounter = useRef(0);

  useFrame((state, delta) => {
    frameCounter.current++;
    const progress = scrollRef.current;
    const { from, to, t, idx } = getSceneState(progress, states, breakpoints);
    const time = state.clock.elapsedTime;

    // Lerp positions with subtle jitter
    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const jx = Math.sin(time * 0.7 + phases[i]) * 0.035;
      const jy = Math.cos(time * 0.6 + phases[i] * 1.3) * 0.035;
      const jz = Math.sin(time * 0.8 + phases[i] * 0.9) * 0.035;
      positions[i3 + 0] = from[i3 + 0] * (1 - t) + to[i3 + 0] * t + jx;
      positions[i3 + 1] = from[i3 + 1] * (1 - t) + to[i3 + 1] * t + jy;
      positions[i3 + 2] = from[i3 + 2] * (1 - t) + to[i3 + 2] * t + jz;
    }

    if (pointsRef.current) {
      const geom = pointsRef.current.geometry as THREE.BufferGeometry;
      const attr = geom.getAttribute("position") as THREE.BufferAttribute;
      attr.array = positions;
      attr.needsUpdate = true;
    }

    // Build connections only every N frames for perf
    if (frameCounter.current % LINE_REBUILD_INTERVAL === 0) {
      const RADIUS = 0.95;
      const RADIUS_SQ = RADIUS * RADIUS;
      let segCount = 0;
      // Sample 4 neighbours per particle (down from 6) for perf
      for (let i = 0; i < N && segCount < MAX_CONNS; i++) {
        for (let s = 0; s < 4 && segCount < MAX_CONNS; s++) {
          const j = (i + 1 + ((Math.random() * (N - 1)) | 0)) % N;
          if (j === i) continue;
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < RADIUS_SQ) {
            const k = segCount * 6;
            linePositions[k + 0] = positions[i * 3 + 0];
            linePositions[k + 1] = positions[i * 3 + 1];
            linePositions[k + 2] = positions[i * 3 + 2];
            linePositions[k + 3] = positions[j * 3 + 0];
            linePositions[k + 4] = positions[j * 3 + 1];
            linePositions[k + 5] = positions[j * 3 + 2];
            const ratio = Math.sqrt(d2) / RADIUS;
            const baseAlpha = 1 - ratio;
            lineColors[k + 0] = 0.0;
            lineColors[k + 1] = 0.4 * baseAlpha;
            lineColors[k + 2] = 1.0 * baseAlpha;
            lineColors[k + 3] = 0.0;
            lineColors[k + 4] = 1.0 * baseAlpha;
            lineColors[k + 5] = 0.7 * baseAlpha;
            segCount++;
          }
        }
      }
      for (let s = segCount; s < MAX_CONNS; s++) {
        const k = s * 6;
        linePositions[k + 0] = 0; linePositions[k + 1] = 0; linePositions[k + 2] = 0;
        linePositions[k + 3] = 0; linePositions[k + 4] = 0; linePositions[k + 5] = 0;
      }
      if (lineRef.current) {
        const geom = lineRef.current.geometry as THREE.BufferGeometry;
        const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;
        const colAttr = geom.getAttribute("color") as THREE.BufferAttribute;
        if (posAttr) { posAttr.array = linePositions; posAttr.needsUpdate = true; }
        if (colAttr) { colAttr.array = lineColors; colAttr.needsUpdate = true; }
      }
    }

    // Rotation speeds per state
    const rotSpeeds = [0.06, 0.04, 0.18, 0.04, 0.04, 0.04, 0.05, 0.04, 0.04, 0.05, 0.05, 0.04, 0.04, 0.03, 0.0];
    const rotSpeed = rotSpeeds[idx] * (1 - t) + rotSpeeds[Math.min(idx + 1, rotSpeeds.length - 1)] * t;
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotSpeed;
      const targetTilt = mouseRef.current.y * 0.18;
      groupRef.current.rotation.x += (targetTilt - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={N}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#F5F5F0"
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_CONNS * 2}
            array={linePositions}
            itemSize={3}
            args={[linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={MAX_CONNS * 2}
            array={lineColors}
            itemSize={3}
            args={[lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function CameraRig({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();
  useFrame(() => {
    const targetX = mouseRef.current.x * 0.4;
    const targetY = -mouseRef.current.y * 0.25;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function LivingScene() {
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      scrollRef.current = Math.max(0, Math.min(1, window.scrollY / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.6]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 4, 3]} intensity={0.6} color="#0066FF" />
        <pointLight position={[-4, -2, -3]} intensity={0.3} color="#00FFB2" />
        <Suspense fallback={null}>
          <CameraRig mouseRef={mouseRef} />
          <ParticleCloud scrollRef={scrollRef} mouseRef={mouseRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
