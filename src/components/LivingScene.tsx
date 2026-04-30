"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, Suspense, useEffect, useState } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────────────
   LivingScene — narrative-driven 3D scene that follows the slogan
                 FROM UNKNOWN → TO POSSIBLE
   States, with camera choreography:
     0  Hero        : UNKNOWN      — chaotic fog of points (zoom-out)
     1  Marquee     : ORDERING     — points align in horizontal flow
     2  Stats       : MEASURABLE   — 4 vertical data bars (front view)
     3  Tagline     : UNITY        — 6 streams converging into one knot
     4  Dept01 SW   : code window  — `< />` brackets + cursor
     5  Dept02 INFRA: server stack
     6  Dept03 SEC  : shield + lock
     7  Dept04 R&D  : DNA helix (orbiting)
     8  Dept05 SAAS : cloud network
     9  Dept06 HW   : microchip + PCB traces
    10  Case BANK   : transaction-flow ledger lines
    11  Case HEALTH : hospital cross + node graph
    12  Case GOV    : columned facade (temple)
    13  Case EDU    : open book + nodes
    14  Values      : 3 architectural columns
    15  CTA POSSIBLE: monogram X — the destination of the journey
   Camera:
    - Each state has a target [x, y, z, fov]
    - Smoothly interpolated for cinematic dolly/zoom feeling
   ───────────────────────────────────────────────────────────────────── */

const N = 400;
const LINE_REBUILD_INTERVAL = 3;

function rand(min: number, max: number) { return Math.random() * (max - min) + min; }

function alongPolyline(
  arr: Float32Array,
  start: number,
  count: number,
  pts: [number, number][],
  zPlane = 0,
  jitter = 0.025
) {
  if (count <= 0 || pts.length < 2) return;
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

function alongCircle(
  arr: Float32Array,
  start: number,
  count: number,
  cx: number,
  cy: number,
  r: number,
  z = 0,
  jitter = 0.02,
  arcStart = 0,
  arcEnd = Math.PI * 2
) {
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(1, count - 1);
    const a = arcStart + (arcEnd - arcStart) * t;
    const idx = (start + i) * 3;
    arr[idx + 0] = cx + Math.cos(a) * r + (Math.random() - 0.5) * jitter;
    arr[idx + 1] = cy + Math.sin(a) * r + (Math.random() - 0.5) * jitter;
    arr[idx + 2] = z + (Math.random() - 0.5) * jitter;
  }
}

// ── 0. UNKNOWN — chaotic point fog (loose 3D cloud) ──────────────────
function shapeUnknown(): Float32Array {
  const arr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    // Inverse-Gaussian-ish distribution: more points in mid-radius, fewer in center, very few at edge
    const r = 1.4 + Math.pow(Math.random(), 0.6) * 1.4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.85;
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

// ── 1. ORDERING — points align into horizontal flow lines (data starting to organize)
function shapeOrdering(): Float32Array {
  const arr = new Float32Array(N * 3);
  const lanes = 6;
  const perLane = Math.floor(N / lanes);
  for (let l = 0; l < lanes; l++) {
    const y = -1.5 + (l * 3.0) / (lanes - 1);
    const start = l * perLane;
    const count = l === lanes - 1 ? N - start : perLane;
    for (let i = 0; i < count; i++) {
      const tt = i / count;
      arr[(start + i) * 3 + 0] = -2.5 + tt * 5;
      arr[(start + i) * 3 + 1] = y + Math.sin(tt * Math.PI * 6 + l) * 0.05;
      arr[(start + i) * 3 + 2] = (Math.random() - 0.5) * 0.15;
    }
  }
  return arr;
}

// ── 2. MEASURABLE — 4 distinct vertical bars (BIG, dashboard chart)
function shapeStatBars(): Float32Array {
  const arr = new Float32Array(N * 3);
  // 4 bars, heights proportional (4M+, 800k, 120, 45 → all different)
  const bars: [number, number][] = [
    [-2.4, 1.4],   // x, height
    [-0.85, 1.6],  // tallest
    [0.85, 1.0],
    [2.4, 0.55],
  ];
  const perBar = Math.floor(N / bars.length);
  for (let b = 0; b < bars.length; b++) {
    const [bx, bh] = bars[b];
    const start = b * perBar;
    const count = b === bars.length - 1 ? N - start : perBar;
    for (let i = 0; i < count; i++) {
      const tt = i / count;
      const idx = (start + i) * 3;
      // Distribute points along outline of vertical bar (rectangle)
      const w = 0.32;
      const yBottom = -1.2;
      const yTop = yBottom + bh;
      // Sample randomly across the rectangle outline
      const side = i % 4;
      if (side === 0) { arr[idx + 0] = bx - w; arr[idx + 1] = yBottom + tt * bh; }
      else if (side === 1) { arr[idx + 0] = bx + w; arr[idx + 1] = yBottom + tt * bh; }
      else if (side === 2) { arr[idx + 0] = bx - w + tt * w * 2; arr[idx + 1] = yTop; }
      else { arr[idx + 0] = bx - w + tt * w * 2; arr[idx + 1] = yBottom; }
      arr[idx + 0] += (Math.random() - 0.5) * 0.025;
      arr[idx + 1] += (Math.random() - 0.5) * 0.025;
      arr[idx + 2] = (Math.random() - 0.5) * 0.08;
    }
  }
  return arr;
}

// ── 3. UNITY — 6 streams converging into central knot
function shapeUnityKnot(): Float32Array {
  const arr = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    const u = t * 3;
    const r = 1.2;
    arr[i * 3 + 0] = (Math.sin(u) + 2 * Math.sin(2 * u)) * 0.42 * r;
    arr[i * 3 + 1] = (Math.cos(u) - 2 * Math.cos(2 * u)) * 0.42 * r;
    arr[i * 3 + 2] = -Math.sin(3 * u) * 0.42 * r;
  }
  return arr;
}

// ── 4. SOFTWARE — code window with brackets and cursor blink
function shapeCodeWindow(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Window outline (35%)
  const win: [number, number][] = [
    [-1.9, 1.2], [1.9, 1.2], [1.9, -1.2], [-1.9, -1.2], [-1.9, 1.2],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.20), win, 0, 0.02);
  idx += Math.floor(N * 0.20);
  // Title bar separator
  alongPolyline(arr, idx, Math.floor(N * 0.06), [[-1.9, 0.85], [1.9, 0.85]], 0, 0.018);
  idx += Math.floor(N * 0.06);
  // Window dots (3 in titlebar)
  for (let d = 0; d < 3; d++) {
    const cx = -1.7 + d * 0.18;
    alongCircle(arr, idx, 8, cx, 1.02, 0.04);
    idx += 8;
  }
  // < bracket
  alongPolyline(arr, idx, Math.floor(N * 0.13),
    [[-0.9, 0.4], [-1.5, 0], [-0.9, -0.4]], 0.05, 0.02);
  idx += Math.floor(N * 0.13);
  // > bracket
  alongPolyline(arr, idx, Math.floor(N * 0.13),
    [[0.9, 0.4], [1.5, 0], [0.9, -0.4]], 0.05, 0.02);
  idx += Math.floor(N * 0.13);
  // Forward slash inside
  alongPolyline(arr, idx, Math.floor(N * 0.10),
    [[-0.4, -0.5], [0.4, 0.5]], 0.05, 0.02);
  idx += Math.floor(N * 0.10);
  // 3 lines of "code" (horizontal segments of varying length)
  const lineYs = [-0.7, -0.85, -1.0];
  const lineWidths = [1.2, 0.8, 1.0];
  const linePerLine = Math.floor((N - idx) / 3);
  for (let l = 0; l < 3; l++) {
    alongPolyline(arr, idx, linePerLine,
      [[-1.6, lineYs[l]], [-1.6 + lineWidths[l], lineYs[l]]], 0.05, 0.018);
    idx += linePerLine;
  }
  // Blinking cursor (last few points clustered)
  for (; idx < N; idx++) {
    arr[idx * 3 + 0] = 1.4 + (Math.random() - 0.5) * 0.05;
    arr[idx * 3 + 1] = -0.7 + (Math.random() - 0.5) * 0.08;
    arr[idx * 3 + 2] = 0.1;
  }
  return arr;
}

// ── 5. INFRASTRUCTURE — server rack with detailed front panels
function shapeServer(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Rack outer frame
  const frame: [number, number][] = [[-1.4, 1.6], [1.4, 1.6], [1.4, -1.6], [-1.4, -1.6], [-1.4, 1.6]];
  alongPolyline(arr, idx, Math.floor(N * 0.16), frame, 0, 0.02);
  idx += Math.floor(N * 0.16);
  // 5 server units inside
  const units = 5;
  const perUnit = Math.floor((N - idx) / units);
  const unitH = 0.55;
  for (let u = 0; u < units; u++) {
    const yc = 1.3 - u * 0.65;
    // Outline
    const rect: [number, number][] = [
      [-1.25, yc + unitH/2 - 0.05], [1.25, yc + unitH/2 - 0.05],
      [1.25, yc - unitH/2 + 0.05], [-1.25, yc - unitH/2 + 0.05],
      [-1.25, yc + unitH/2 - 0.05],
    ];
    const outlineCount = Math.floor(perUnit * 0.5);
    alongPolyline(arr, idx, outlineCount, rect, 0, 0.018);
    idx += outlineCount;
    // Front panel slits (interior horizontal)
    const slitCount = Math.floor(perUnit * 0.3);
    alongPolyline(arr, idx, slitCount, [[-1.0, yc], [0.6, yc]], 0, 0.015);
    idx += slitCount;
    // 3 LEDs on right side
    const remaining = u === units - 1 ? N - idx : perUnit - outlineCount - slitCount;
    for (let i = 0; i < remaining; i++) {
      const which = i % 3;
      const ix = idx * 3;
      arr[ix + 0] = 0.85 + which * 0.13 + (Math.random() - 0.5) * 0.025;
      arr[ix + 1] = yc + (Math.random() - 0.5) * 0.04;
      arr[ix + 2] = 0.18;
      idx++;
    }
  }
  return arr;
}

// ── 6. SECURITY — heraldic shield with cross + lock
function shapeShield(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Outer shield outline
  const outline: [number, number][] = [
    [-1.3, 1.3], [-1.3, -0.1], [-1.0, -0.7], [-0.5, -1.2], [0, -1.5],
    [0.5, -1.2], [1.0, -0.7], [1.3, -0.1], [1.3, 1.3], [-1.3, 1.3],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.30), outline, 0, 0.02);
  idx += Math.floor(N * 0.30);
  // Inner shield (depth)
  const inner: [number, number][] = [
    [-0.85, 0.85], [-0.85, -0.05], [-0.7, -0.45], [-0.35, -0.85], [0, -1.05],
    [0.35, -0.85], [0.7, -0.45], [0.85, -0.05], [0.85, 0.85], [-0.85, 0.85],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.16), inner, 0.18, 0.018);
  idx += Math.floor(N * 0.16);
  // Lock body (rounded rectangle)
  const lock: [number, number][] = [
    [-0.35, 0.2], [0.35, 0.2], [0.35, -0.5], [-0.35, -0.5], [-0.35, 0.2],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.18), lock, 0.36, 0.018);
  idx += Math.floor(N * 0.18);
  // Lock shackle (curved arc on top)
  alongCircle(arr, idx, Math.floor(N * 0.14), 0, 0.2, 0.28, 0.36, 0.015, 0, Math.PI);
  idx += Math.floor(N * 0.14);
  // Keyhole dot
  for (let i = 0; i < Math.floor(N * 0.04); i++) {
    arr[(idx + i) * 3 + 0] = (Math.random() - 0.5) * 0.07;
    arr[(idx + i) * 3 + 1] = -0.15 + (Math.random() - 0.5) * 0.07;
    arr[(idx + i) * 3 + 2] = 0.5;
  }
  idx += Math.floor(N * 0.04);
  // Outer rivets at corners
  const rivets: [number, number][] = [[-1.05, 0.95], [1.05, 0.95], [-0.4, -0.8], [0.4, -0.8]];
  const perRivet = Math.floor((N - idx) / rivets.length);
  for (let r = 0; r < rivets.length; r++) {
    const [rx, ry] = rivets[r];
    const c = r === rivets.length - 1 ? N - idx : perRivet;
    alongCircle(arr, idx, c, rx, ry, 0.05, 0, 0.015);
    idx += c;
  }
  return arr;
}

// ── 7. R&D — DNA double helix (research)
function shapeDNA(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  const perStrand = Math.floor(N * 0.35);
  // Strand 1
  for (let i = 0; i < perStrand; i++) {
    const tt = i / perStrand;
    const a = tt * Math.PI * 6;
    arr[idx * 3 + 0] = Math.cos(a) * 0.75;
    arr[idx * 3 + 1] = -1.5 + tt * 3.0;
    arr[idx * 3 + 2] = Math.sin(a) * 0.75;
    idx++;
  }
  // Strand 2 (180° offset)
  for (let i = 0; i < perStrand; i++) {
    const tt = i / perStrand;
    const a = tt * Math.PI * 6 + Math.PI;
    arr[idx * 3 + 0] = Math.cos(a) * 0.75;
    arr[idx * 3 + 1] = -1.5 + tt * 3.0;
    arr[idx * 3 + 2] = Math.sin(a) * 0.75;
    idx++;
  }
  // Cross-rungs (12 rungs)
  const rungs = 12;
  const perRung = Math.floor((N - idx) / rungs);
  for (let r = 0; r < rungs; r++) {
    const tt = r / (rungs - 1);
    const a = tt * Math.PI * 6;
    const y = -1.5 + tt * 3.0;
    const c = r === rungs - 1 ? N - idx : perRung;
    for (let i = 0; i < c; i++) {
      const u = i / Math.max(1, c - 1);
      arr[idx * 3 + 0] = Math.cos(a) * 0.75 * (1 - u) + Math.cos(a + Math.PI) * 0.75 * u;
      arr[idx * 3 + 1] = y + (Math.random() - 0.5) * 0.02;
      arr[idx * 3 + 2] = Math.sin(a) * 0.75 * (1 - u) + Math.sin(a + Math.PI) * 0.75 * u;
      idx++;
    }
  }
  return arr;
}

// ── 8. SAAS — cloud icon + connected client cards
function shapeCloud(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Cloud silhouette (top)
  const cloud: [number, number][] = [
    [-1.7, 0.2], [-1.7, 0.6], [-1.4, 0.9], [-1.0, 0.7], [-0.8, 1.0],
    [-0.4, 1.15], [0.0, 1.15], [0.4, 1.15], [0.8, 0.95], [1.0, 0.7],
    [1.4, 0.85], [1.7, 0.55], [1.7, 0.2], [1.4, 0.0], [-1.4, 0.0], [-1.7, 0.2],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.30), cloud, 0, 0.02);
  idx += Math.floor(N * 0.30);
  // 3 client cards below
  const cards = 3;
  const cardYTop = -0.4;
  const cardW = 0.6;
  const cardH = 0.55;
  for (let c = 0; c < cards; c++) {
    const cx = -1.3 + c * 1.3;
    const card: [number, number][] = [
      [cx - cardW/2, cardYTop], [cx + cardW/2, cardYTop],
      [cx + cardW/2, cardYTop - cardH], [cx - cardW/2, cardYTop - cardH],
      [cx - cardW/2, cardYTop],
    ];
    alongPolyline(arr, idx, Math.floor(N * 0.10), card, 0, 0.018);
    idx += Math.floor(N * 0.10);
  }
  // Connection lines from cloud to cards
  for (let c = 0; c < cards; c++) {
    const cx = -1.3 + c * 1.3;
    const remaining = N - idx;
    const perLine = c === cards - 1 ? remaining : Math.floor(remaining / (cards - c));
    alongPolyline(arr, idx, perLine, [[cx, 0.0], [cx, cardYTop]], 0, 0.012);
    idx += perLine;
  }
  return arr;
}

// ── 9. HARDWARE — microchip + PCB traces + pins
function shapeChip(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Outer chip square
  const sq: [number, number][] = [[-0.95, 0.95], [0.95, 0.95], [0.95, -0.95], [-0.95, -0.95], [-0.95, 0.95]];
  alongPolyline(arr, idx, Math.floor(N * 0.18), sq, 0, 0.018);
  idx += Math.floor(N * 0.18);
  // Pin notch (semicircle at top)
  alongCircle(arr, idx, Math.floor(N * 0.05), 0, 0.95, 0.10, 0, 0.015, Math.PI, Math.PI * 2);
  idx += Math.floor(N * 0.05);
  // 5 pins per side × 4 sides = 20 pins
  const pinsPerSide = 5;
  const pinLen = 0.40;
  const perPin = Math.floor((N - idx) * 0.45 / (pinsPerSide * 4));
  // Top pins
  for (let i = 0; i < pinsPerSide; i++) {
    const x = -0.7 + i * 0.35;
    alongPolyline(arr, idx, perPin, [[x, 0.95], [x, 0.95 + pinLen]], 0, 0.012);
    idx += perPin;
  }
  // Bottom
  for (let i = 0; i < pinsPerSide; i++) {
    const x = -0.7 + i * 0.35;
    alongPolyline(arr, idx, perPin, [[x, -0.95], [x, -0.95 - pinLen]], 0, 0.012);
    idx += perPin;
  }
  // Left
  for (let i = 0; i < pinsPerSide; i++) {
    const y = -0.7 + i * 0.35;
    alongPolyline(arr, idx, perPin, [[-0.95, y], [-0.95 - pinLen, y]], 0, 0.012);
    idx += perPin;
  }
  // Right
  for (let i = 0; i < pinsPerSide; i++) {
    const y = -0.7 + i * 0.35;
    alongPolyline(arr, idx, perPin, [[0.95, y], [0.95 + pinLen, y]], 0, 0.012);
    idx += perPin;
  }
  // PCB traces inside (more detail)
  alongPolyline(arr, idx, Math.floor(N * 0.10),
    [[-0.6, 0.5], [-0.2, 0.5], [-0.2, -0.1], [0.4, -0.1], [0.4, -0.5]], 0.10, 0.015);
  idx += Math.floor(N * 0.10);
  alongPolyline(arr, idx, Math.floor(N * 0.06),
    [[0.5, 0.6], [0.5, 0.1]], 0.10, 0.015);
  idx += Math.floor(N * 0.06);
  // Center brand dot
  const remaining = N - idx;
  for (let i = 0; i < remaining; i++) {
    const r = Math.random() * 0.18;
    const a = Math.random() * Math.PI * 2;
    arr[idx * 3 + 0] = Math.cos(a) * r;
    arr[idx * 3 + 1] = Math.sin(a) * r;
    arr[idx * 3 + 2] = 0.06;
    idx++;
  }
  return arr;
}

// ── 10. CASE BANKING — flowing horizontal ledger lines + currency dot
function shapeBankFlow(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // 5 horizontal flows
  const lanes = 5;
  const perLane = Math.floor((N - 80) / lanes);
  for (let l = 0; l < lanes; l++) {
    const y = -1.2 + l * 0.6;
    for (let i = 0; i < perLane; i++) {
      const tt = i / perLane;
      arr[idx * 3 + 0] = -2.5 + tt * 5;
      arr[idx * 3 + 1] = y + Math.sin(tt * Math.PI * 4 + l * 1.3) * 0.12;
      arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.10;
      idx++;
    }
  }
  // Central $ symbol (vertical bar + S curve)
  // S curve approximated
  alongPolyline(arr, idx, 30, [
    [0.3, 0.7], [-0.3, 0.5], [-0.3, 0.15], [0.3, -0.05],
    [0.3, -0.45], [-0.3, -0.65],
  ], 0.25, 0.015);
  idx += 30;
  // Vertical line through S
  alongPolyline(arr, idx, 25, [[0, 0.85], [0, -0.85]], 0.25, 0.012);
  idx += 25;
  // Filler
  for (; idx < N; idx++) {
    arr[idx * 3 + 0] = (Math.random() - 0.5) * 4;
    arr[idx * 3 + 1] = (Math.random() - 0.5) * 0.1;
    arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.1;
  }
  return arr;
}

// ── 11. CASE HEALTHCARE — medical cross + connected hospital nodes
function shapeMedNetwork(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Cross vertical
  alongPolyline(arr, idx, Math.floor(N * 0.18), [[0, 1.4], [0, -1.4]], 0, 0.025);
  idx += Math.floor(N * 0.18);
  // Cross horizontal
  alongPolyline(arr, idx, Math.floor(N * 0.18), [[-1.4, 0], [1.4, 0]], 0, 0.025);
  idx += Math.floor(N * 0.18);
  // 6 hospital nodes around at corners and sides
  const nodes: [number, number][] = [
    [-1.7, 1.3], [1.7, 1.3], [-2.0, -0.0], [2.0, 0.0], [-1.7, -1.3], [1.7, -1.3],
  ];
  const perNode = Math.floor((N - idx) * 0.6 / nodes.length);
  for (let n = 0; n < nodes.length; n++) {
    const [nx, ny] = nodes[n];
    // Small square (hospital building)
    const rect: [number, number][] = [
      [nx - 0.18, ny + 0.18], [nx + 0.18, ny + 0.18],
      [nx + 0.18, ny - 0.18], [nx - 0.18, ny - 0.18],
      [nx - 0.18, ny + 0.18],
    ];
    alongPolyline(arr, idx, perNode, rect, 0, 0.012);
    idx += perNode;
  }
  // Connection lines from each node to center
  const remaining = N - idx;
  const perLine = Math.floor(remaining / nodes.length);
  for (let n = 0; n < nodes.length; n++) {
    const [nx, ny] = nodes[n];
    const c = n === nodes.length - 1 ? N - idx : perLine;
    alongPolyline(arr, idx, c, [[nx * 0.6, ny * 0.6], [nx * 0.95, ny * 0.95]], 0, 0.012);
    idx += c;
  }
  return arr;
}

// ── 12. CASE GOVERNMENT — Greek temple façade with pediment
function shapeTemple(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // 5 columns
  const cols = 5;
  const perCol = Math.floor(N * 0.55 / cols);
  for (let c = 0; c < cols; c++) {
    const x = -2.0 + c * 1.0;
    // Column shaft (vertical strip)
    for (let i = 0; i < perCol; i++) {
      const tt = i / perCol;
      arr[idx * 3 + 0] = x + (i % 2 === 0 ? -0.18 : 0.18) + (Math.random() - 0.5) * 0.025;
      arr[idx * 3 + 1] = -1.4 + tt * 2.4;
      arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.10;
      idx++;
    }
  }
  // Pediment (triangular roof)
  const pediment: [number, number][] = [
    [-2.4, 1.0], [0, 1.7], [2.4, 1.0], [-2.4, 1.0],
  ];
  alongPolyline(arr, idx, Math.floor(N * 0.12), pediment, 0, 0.025);
  idx += Math.floor(N * 0.12);
  // Architrave (horizontal beam under pediment)
  alongPolyline(arr, idx, Math.floor(N * 0.07), [[-2.4, 1.0], [2.4, 1.0]], 0, 0.02);
  idx += Math.floor(N * 0.07);
  // Stylobate (base)
  alongPolyline(arr, idx, Math.floor(N * 0.07), [[-2.4, -1.4], [2.4, -1.4]], 0, 0.02);
  idx += Math.floor(N * 0.07);
  // Steps
  alongPolyline(arr, idx, Math.floor(N * 0.05), [[-2.6, -1.55], [2.6, -1.55]], 0, 0.02);
  idx += Math.floor(N * 0.05);
  // Filler
  for (; idx < N; idx++) {
    arr[idx * 3 + 0] = (Math.random() - 0.5) * 4;
    arr[idx * 3 + 1] = -1.5 + (Math.random() - 0.5) * 0.05;
    arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.05;
  }
  return arr;
}

// ── 13. CASE EDUCATION — open book + atom
function shapeBook(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // Left page
  alongPolyline(arr, idx, Math.floor(N * 0.18), [
    [0, 1.0], [-1.6, 0.7], [-1.6, -0.7], [0, -1.0], [0, 1.0],
  ], 0, 0.02);
  idx += Math.floor(N * 0.18);
  // Right page
  alongPolyline(arr, idx, Math.floor(N * 0.18), [
    [0, 1.0], [1.6, 0.7], [1.6, -0.7], [0, -1.0], [0, 1.0],
  ], 0, 0.02);
  idx += Math.floor(N * 0.18);
  // Page lines (3 lines per page)
  const pageLines = 3;
  for (let p = 0; p < 2; p++) {
    const sign = p === 0 ? -1 : 1;
    for (let l = 0; l < pageLines; l++) {
      const y = 0.4 - l * 0.45;
      const w = 1.1 - l * 0.15;
      alongPolyline(arr, idx, Math.floor(N * 0.05),
        [[sign * 0.15, y], [sign * (0.15 + w), y]], 0.02, 0.012);
      idx += Math.floor(N * 0.05);
    }
  }
  // Atom symbol above the book
  alongCircle(arr, idx, Math.floor(N * 0.10), 0, 1.7, 0.5, 0, 0.015);
  idx += Math.floor(N * 0.10);
  // Filler
  for (; idx < N; idx++) {
    arr[idx * 3 + 0] = (Math.random() - 0.5) * 0.1;
    arr[idx * 3 + 1] = 1.7 + (Math.random() - 0.5) * 0.1;
    arr[idx * 3 + 2] = 0;
  }
  return arr;
}

// ── 14. VALUES — 3 architectural pillars (foundation)
function shapeValuesPillars(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  const xs = [-1.8, 0, 1.8];
  const perPillar = Math.floor((N - 60) / 3);
  for (let p = 0; p < 3; p++) {
    const cx = xs[p];
    // Capital (top of column)
    alongPolyline(arr, idx, 15,
      [[cx - 0.4, 1.4], [cx + 0.4, 1.4], [cx + 0.4, 1.2], [cx - 0.4, 1.2], [cx - 0.4, 1.4]],
      0, 0.018);
    idx += 15;
    // Shaft
    for (let i = 0; i < perPillar; i++) {
      const tt = i / perPillar;
      const side = i % 2 === 0 ? -0.2 : 0.2;
      arr[idx * 3 + 0] = cx + side + (Math.random() - 0.5) * 0.025;
      arr[idx * 3 + 1] = -1.2 + tt * 2.4;
      arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.08;
      idx++;
    }
    // Base
    alongPolyline(arr, idx, 5,
      [[cx - 0.4, -1.4], [cx + 0.4, -1.4]], 0, 0.018);
    idx += 5;
  }
  // Foundation line
  for (; idx < N; idx++) {
    arr[idx * 3 + 0] = -2.3 + Math.random() * 4.6;
    arr[idx * 3 + 1] = -1.55 + (Math.random() - 0.5) * 0.05;
    arr[idx * 3 + 2] = 0;
  }
  return arr;
}

// ── 15. POSSIBLE — the X monogram (DeepXLab brand: from unknown to possible)
function shapeMonogramX(): Float32Array {
  const arr = new Float32Array(N * 3);
  let idx = 0;
  // First diagonal (top-left → bottom-right) — thicker, multi-layer
  for (let layer = 0; layer < 3; layer++) {
    alongPolyline(arr, idx, Math.floor(N * 0.16),
      [[-1.5, 1.5], [1.5, -1.5]], (layer - 1) * 0.06, 0.018);
    idx += Math.floor(N * 0.16);
  }
  // Second diagonal (top-right → bottom-left) — thicker, multi-layer
  for (let layer = 0; layer < 3; layer++) {
    alongPolyline(arr, idx, Math.floor(N * 0.16),
      [[1.5, 1.5], [-1.5, -1.5]], (layer - 1) * 0.06, 0.018);
    idx += Math.floor(N * 0.16);
  }
  // Glow center cluster
  for (; idx < N; idx++) {
    const r = Math.random() * 0.25;
    const a = Math.random() * Math.PI * 2;
    arr[idx * 3 + 0] = Math.cos(a) * r;
    arr[idx * 3 + 1] = Math.sin(a) * r;
    arr[idx * 3 + 2] = (Math.random() - 0.5) * 0.15;
  }
  return arr;
}

// ── States, breakpoints, camera per state ────────────────────────────

type CamState = { x: number; y: number; z: number; fov: number };

function buildStates(): { states: Float32Array[]; breakpoints: number[]; cameras: CamState[] } {
  const states: Float32Array[] = [
    shapeUnknown(),       // 0  Hero — UNKNOWN
    shapeOrdering(),      // 1  Marquee — ORDERING
    shapeStatBars(),      // 2  Stats — MEASURABLE
    shapeUnityKnot(),     // 3  Tagline — UNITY
    shapeCodeWindow(),    // 4  Dept SW
    shapeServer(),        // 5  Dept Infra
    shapeShield(),        // 6  Dept Security
    shapeDNA(),           // 7  Dept R&D
    shapeCloud(),         // 8  Dept SaaS
    shapeChip(),          // 9  Dept Hardware
    shapeBankFlow(),      // 10 Case Banking
    shapeMedNetwork(),    // 11 Case Health
    shapeTemple(),        // 12 Case Gov
    shapeBook(),          // 13 Case Edu
    shapeValuesPillars(), // 14 Values
    shapeMonogramX(),     // 15 CTA — POSSIBLE
  ];

  const breakpoints = [
    0.00, 0.06, 0.12, 0.20, 0.27, 0.32, 0.37, 0.42, 0.47, 0.52, 0.60, 0.66, 0.72, 0.78, 0.86, 1.00,
  ];

  // Camera positions: tweak z (zoom), fov, slight x/y for parallax
  const cameras: CamState[] = [
    { x: 0,   y: 0.2,  z: 7.5,  fov: 50 }, // 0  hero — far / wide (lost in fog)
    { x: 0,   y: 0.0,  z: 6.5,  fov: 46 }, // 1  ordering
    { x: 0,   y: 0.0,  z: 6.2,  fov: 44 }, // 2  stats — eye level on bars
    { x: 0,   y: 0.0,  z: 5.4,  fov: 42 }, // 3  tagline — closer to knot
    { x: 0,   y: 0.0,  z: 5.0,  fov: 40 }, // 4  software (close)
    { x: 0,   y: 0.0,  z: 5.5,  fov: 42 }, // 5  infra
    { x: 0,   y: -0.1, z: 5.2,  fov: 41 }, // 6  security
    { x: 0,   y: 0.0,  z: 5.8,  fov: 44 }, // 7  R&D — DNA needs a bit of room
    { x: 0,   y: 0.2,  z: 5.4,  fov: 42 }, // 8  saas
    { x: 0,   y: 0.0,  z: 5.0,  fov: 40 }, // 9  hardware (close on chip)
    { x: 0,   y: 0.0,  z: 6.5,  fov: 46 }, // 10 banking — wide flow
    { x: 0,   y: 0.0,  z: 5.8,  fov: 44 }, // 11 health
    { x: 0,   y: -0.1, z: 6.2,  fov: 44 }, // 12 gov
    { x: 0,   y: 0.3,  z: 5.4,  fov: 42 }, // 13 edu
    { x: 0,   y: 0.0,  z: 5.6,  fov: 42 }, // 14 values
    { x: 0,   y: 0.0,  z: 4.5,  fov: 38 }, // 15 cta — pulling in close to the X
  ];

  return { states, breakpoints, cameras };
}

function getSceneState(progress: number, states: Float32Array[], breakpoints: number[], cameras: CamState[]) {
  let idx = 0;
  for (let i = 0; i < breakpoints.length - 1; i++) {
    if (progress >= breakpoints[i] && progress <= breakpoints[i + 1]) { idx = i; break; }
  }
  if (progress >= 1) idx = breakpoints.length - 2;
  const span = breakpoints[idx + 1] - breakpoints[idx];
  const t = Math.max(0, Math.min(1, (progress - breakpoints[idx]) / (span || 1)));
  const ts = t * t * (3 - 2 * t);
  return {
    from: states[idx],
    to: states[idx + 1],
    camFrom: cameras[idx],
    camTo: cameras[idx + 1],
    t: ts,
    idx,
  };
}

function ParticleCloud({
  scrollRef,
  mouseRef,
  isLight,
}: {
  scrollRef: React.MutableRefObject<number>;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  isLight: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const { states, breakpoints, cameras } = useMemo(() => buildStates(), []);
  const isLightRef = useRef(isLight);
  useEffect(() => { isLightRef.current = isLight; }, [isLight]);

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
    const { from, to, camFrom, camTo, t, idx } = getSceneState(progress, states, breakpoints, cameras);
    const time = state.clock.elapsedTime;

    // Stability factor (1 when locked at a state, 0 mid-morph) — used for jitter and effects
    const stability = 1 - Math.min(1, Math.abs(t - 0.5) * 2);
    const jitterAmp = 0.010 + (1 - stability) * 0.022;

    // Lerp positions
    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      const jx = Math.sin(time * 0.7 + phases[i]) * jitterAmp;
      const jy = Math.cos(time * 0.6 + phases[i] * 1.3) * jitterAmp;
      const jz = Math.sin(time * 0.8 + phases[i] * 0.9) * jitterAmp;
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

    // Build connections every N frames
    if (frameCounter.current % LINE_REBUILD_INTERVAL === 0) {
      const RADIUS = 0.85;
      const RADIUS_SQ = RADIUS * RADIUS;
      let segCount = 0;
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
            if (isLightRef.current) {
              lineColors[k + 0] = 0.0; lineColors[k + 1] = 0.27 * baseAlpha; lineColors[k + 2] = 0.8 * baseAlpha;
              lineColors[k + 3] = 0.0; lineColors[k + 4] = 0.72 * baseAlpha; lineColors[k + 5] = 0.42 * baseAlpha;
            } else {
              lineColors[k + 0] = 0.0; lineColors[k + 1] = 0.4 * baseAlpha; lineColors[k + 2] = 1.0 * baseAlpha;
              lineColors[k + 3] = 0.0; lineColors[k + 4] = 1.0 * baseAlpha; lineColors[k + 5] = 0.7 * baseAlpha;
            }
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

    // Camera dolly per state
    const targetCamX = camFrom.x * (1 - t) + camTo.x * t + mouseRef.current.x * 0.25;
    const targetCamY = camFrom.y * (1 - t) + camTo.y * t - mouseRef.current.y * 0.18;
    const targetCamZ = camFrom.z * (1 - t) + camTo.z * t;
    const targetFov = camFrom.fov * (1 - t) + camTo.fov * t;
    camera.position.x += (targetCamX - camera.position.x) * 0.05;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;
    camera.position.z += (targetCamZ - camera.position.z) * 0.05;
    if ((camera as THREE.PerspectiveCamera).fov !== undefined) {
      const c = camera as THREE.PerspectiveCamera;
      c.fov += (targetFov - c.fov) * 0.05;
      c.updateProjectionMatrix();
    }
    camera.lookAt(0, 0, 0);

    // Group rotation: only Hero (chaos) drifts. Tagline knot spins. Everything else faces camera.
    if (groupRef.current) {
      const isCloud = idx === 0;
      const isKnot = idx === 3;
      let targetY = 0;
      if (isCloud) targetY = groupRef.current.rotation.y + delta * 0.05;
      else if (isKnot) targetY = groupRef.current.rotation.y + delta * 0.10;
      else targetY = mouseRef.current.x * 0.10;
      groupRef.current.rotation.y =
        isCloud || isKnot
          ? targetY
          : groupRef.current.rotation.y + (targetY - groupRef.current.rotation.y) * 0.06;
      const targetX = isCloud ? 0 : mouseRef.current.y * 0.07;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
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
          size={0.04}
          color={isLight ? "#0B0B0D" : "#F5F5F0"}
          transparent
          opacity={isLight ? 0.85 : 0.95}
          sizeAttenuation
          depthWrite={false}
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
          opacity={0.32}
          depthWrite={false}
        />
      </lineSegments>
      <mesh>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function LivingScene() {
  const scrollRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTheme = () => {
      setIsLight(document.documentElement.dataset.theme === "light");
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

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
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 0.2, 7.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.6]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 4, 3]} intensity={0.6} color="#0066FF" />
        <pointLight position={[-4, -2, -3]} intensity={0.3} color="#00FFB2" />
        <Suspense fallback={null}>
          <ParticleCloud scrollRef={scrollRef} mouseRef={mouseRef} isLight={isLight} />
        </Suspense>
      </Canvas>
    </div>
  );
}
