# Robot Arm Hero Snippet

## Interactive Robot Arm Hero

```js
// Interactive Robot Arm Hero - DeepXLab
import * as THREE from "three";

// ─── Scene Setup ───
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcc0000);
scene.fog = new THREE.FogExp2(0xcc0000, 0.008);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 18);
camera.lookAt(0, 1, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// ─── Mouse Tracking ───
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
const scrollProgress = { value: 0 };

document.addEventListener("mousemove", (e) => {
  mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
});

document.addEventListener("wheel", (e) => {
  scrollProgress.value = Math.max(0, Math.min(1, scrollProgress.value + e.deltaY * 0.001));
});

// ─── Lighting ───
const ambientLight = new THREE.AmbientLight(0xff4444, 0.4);
scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 2.5);
mainLight.position.set(5, 10, 8);
mainLight.castShadow = true;
mainLight.shadow.mapSize.set(2048, 2048);
mainLight.shadow.camera.near = 0.5;
mainLight.shadow.camera.far = 50;
scene.add(mainLight);

const rimLight = new THREE.DirectionalLight(0xff2200, 1.5);
rimLight.position.set(-5, 3, -5);
scene.add(rimLight);

const fillLight = new THREE.PointLight(0xff6644, 1.5, 30);
fillLight.position.set(-4, 5, 4);
scene.add(fillLight);

const backLight = new THREE.PointLight(0xff0000, 2, 25);
backLight.position.set(0, -2, -8);
scene.add(backLight);

// ─── Materials ───
const metalDark = new THREE.MeshStandardMaterial({
  color: 0x1a1a2e,
  metalness: 0.95,
  roughness: 0.15,
});

const metalChrome = new THREE.MeshStandardMaterial({
  color: 0x8888aa,
  metalness: 1.0,
  roughness: 0.08,
});

const metalRed = new THREE.MeshStandardMaterial({
  color: 0xcc0000,
  metalness: 0.9,
  roughness: 0.2,
  emissive: 0x440000,
  emissiveIntensity: 0.3,
});

const glowRed = new THREE.MeshStandardMaterial({
  color: 0xff2200,
  emissive: 0xff2200,
  emissiveIntensity: 2.0,
  metalness: 0.5,
  roughness: 0.3,
});

const glowRedCore = new THREE.MeshStandardMaterial({
  color: 0xff4400,
  emissive: 0xff4400,
  emissiveIntensity: 4.0,
  metalness: 0.2,
  roughness: 0.1,
});

const metalPurple = new THREE.MeshStandardMaterial({
  color: 0x3a2855,
  metalness: 0.9,
  roughness: 0.2,
  emissive: 0x1a0033,
  emissiveIntensity: 0.2,
});

const spikeMetal = new THREE.MeshStandardMaterial({
  color: 0xaaaacc,
  metalness: 1.0,
  roughness: 0.05,
});

// ─── Robot Arm Group ───
const robotGroup = new THREE.Group();

// === BASE PLATFORM ===
const baseGroup = new THREE.Group();

// Main base cylinder
const baseGeo = new THREE.CylinderGeometry(2.2, 2.5, 0.8, 32);
const base = new THREE.Mesh(baseGeo, metalDark);
base.castShadow = true;
base.receiveShadow = true;
baseGroup.add(base);

// Base ring detail
const baseRingGeo = new THREE.TorusGeometry(2.35, 0.08, 8, 32);
const baseRing = new THREE.Mesh(baseRingGeo, metalChrome);
baseRing.rotation.x = Math.PI / 2;
baseRing.position.y = 0.2;
baseGroup.add(baseRing);

// Base glow ring
const baseGlowGeo = new THREE.TorusGeometry(2.0, 0.05, 8, 32);
const baseGlow = new THREE.Mesh(baseGlowGeo, glowRed);
baseGlow.rotation.x = Math.PI / 2;
baseGlow.position.y = 0.35;
baseGroup.add(baseGlow);

// Base spikes
for (let i = 0; i < 6; i++) {
  const angle = (i / 6) * Math.PI * 2;
  const spikeGeo = new THREE.ConeGeometry(0.15, 0.6, 6);
  const spike = new THREE.Mesh(spikeGeo, spikeMetal);
  spike.position.set(Math.cos(angle) * 2.3, -0.1, Math.sin(angle) * 2.3);
  spike.rotation.z = Math.cos(angle) * 0.4;
  spike.rotation.x = -Math.sin(angle) * 0.4;
  baseGroup.add(spike);
}

baseGroup.position.y = -3.5;
robotGroup.add(baseGroup);

// === LOWER ARM SEGMENT ===
const lowerArmGroup = new THREE.Group();

// Main cylinder
const lowerArmGeo = new THREE.CylinderGeometry(0.7, 1.0, 3.5, 16);
const lowerArm = new THREE.Mesh(lowerArmGeo, metalPurple);
lowerArm.castShadow = true;
lowerArmGroup.add(lowerArm);

// Hydraulic details
for (let i = 0; i < 3; i++) {
  const angle = (i / 3) * Math.PI * 2;
  const pipeGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 8);
  const pipe = new THREE.Mesh(pipeGeo, metalChrome);
  pipe.position.set(Math.cos(angle) * 0.85, 0, Math.sin(angle) * 0.85);
  lowerArmGroup.add(pipe);
}

// Ring details on lower arm
for (let i = 0; i < 3; i++) {
  const ringGeo = new THREE.TorusGeometry(0.75 + i * 0.05, 0.04, 8, 24);
  const ring = new THREE.Mesh(ringGeo, i === 1 ? glowRed : metalChrome);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -1.0 + i * 1.0;
  lowerArmGroup.add(ring);
}

lowerArmGroup.position.y = -1.5;
robotGroup.add(lowerArmGroup);

// === JOINT / ELBOW ===
const jointGroup = new THREE.Group();

const jointSphereGeo = new THREE.SphereGeometry(1.0, 24, 24);
const jointSphere = new THREE.Mesh(jointSphereGeo, metalDark);
jointSphere.castShadow = true;
jointGroup.add(jointSphere);

// Joint eye - glowing sensor
const eyeRingGeo = new THREE.TorusGeometry(0.5, 0.08, 12, 24);
const eyeRing = new THREE.Mesh(eyeRingGeo, metalChrome);
eyeRing.rotation.y = Math.PI / 2;
jointGroup.add(eyeRing);

const eyeGeo = new THREE.SphereGeometry(0.45, 24, 24);
const eye = new THREE.Mesh(eyeGeo, new THREE.MeshStandardMaterial({
  color: 0x220000,
  metalness: 0.9,
  roughness: 0.1,
}));
eye.position.z = 0.15;
jointGroup.add(eye);

const eyeCoreGeo = new THREE.SphereGeometry(0.25, 16, 16);
const eyeCore = new THREE.Mesh(eyeCoreGeo, glowRedCore);
eyeCore.position.z = 0.35;
jointGroup.add(eyeCore);

// Joint spikes
for (let i = 0; i < 8; i++) {
  const angle = (i / 8) * Math.PI * 2;
  const spikeGeo = new THREE.ConeGeometry(0.1, 0.5, 6);
  const spike = new THREE.Mesh(spikeGeo, spikeMetal);
  spike.position.set(Math.cos(angle) * 1.05, Math.sin(angle) * 1.05, 0);
  spike.rotation.z = angle - Math.PI / 2;
  jointGroup.add(spike);
}

jointGroup.position.y = 0.5;
robotGroup.add(jointGroup);

// === UPPER ARM ===
const upperArmGroup = new THREE.Group();

const upperArmGeo = new THREE.CylinderGeometry(0.55, 0.7, 3.0, 16);
const upperArm = new THREE.Mesh(upperArmGeo, metalPurple);
upperArm.castShadow = true;
upperArmGroup.add(upperArm);

// Armor plates
for (let i = 0; i < 4; i++) {
  const angle = (i / 4) * Math.PI * 2;
  const plateGeo = new THREE.BoxGeometry(0.4, 2.2, 0.12);
  const plate = new THREE.Mesh(plateGeo, metalDark);
  plate.position.set(Math.cos(angle) * 0.6, 0, Math.sin(angle) * 0.6);
  plate.rotation.y = -angle;
  upperArmGroup.add(plate);
}

// Glowing strips
for (let i = 0; i < 2; i++) {
  const stripGeo = new THREE.BoxGeometry(0.06, 2.5, 0.06);
  const strip = new THREE.Mesh(stripGeo, glowRed);
  strip.position.set(i === 0 ? 0.55 : -0.55, 0, 0.3);
  upperArmGroup.add(strip);
}

upperArmGroup.position.y = 2.5;
robotGroup.add(upperArmGroup);

// === SHOULDER JOINT ===
const shoulderGroup = new THREE.Group();

const shoulderGeo = new THREE.SphereGeometry(0.75, 24, 24);
const shoulder = new THREE.Mesh(shoulderGeo, metalDark);
shoulder.castShadow = true;
shoulderGroup.add(shoulder);

// Shoulder cap
const capGeo = new THREE.ConeGeometry(0.5, 0.8, 8);
const cap = new THREE.Mesh(capGeo, metalPurple);
cap.position.y = 0.6;
shoulderGroup.add(cap);

// Shoulder spikes
for (let i = 0; i < 5; i++) {
  const angle = (i / 5) * Math.PI * 2;
  const spikeGeo = new THREE.ConeGeometry(0.08, 0.4, 6);
  const spike = new THREE.Mesh(spikeGeo, spikeMetal);
  spike.position.set(Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8);
  spike.rotation.z = Math.cos(angle) * 0.5;
  spike.rotation.x = -Math.sin(angle) * 0.5;
  shoulderGroup.add(spike);
}

shoulderGroup.position.y = 4.3;
robotGroup.add(shoulderGroup);

// === WEAPON ARM CANNONS (left & right of joint) ===
function createCannon(side) {
  const cannonGroup = new THREE.Group();

  // Barrel housing
  const housingGeo = new THREE.CylinderGeometry(0.4, 0.5, 1.2, 12);
  const housing = new THREE.Mesh(housingGeo, metalDark);
  housing.rotation.z = Math.PI / 2;
  cannonGroup.add(housing);

  // Barrel tips
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2;
    const barrelGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 8);
    const barrel = new THREE.Mesh(barrelGeo, metalChrome);
    barrel.rotation.z = Math.PI / 2;
    barrel.position.set(side * 0.25, Math.cos(angle) * 0.22, Math.sin(angle) * 0.22);
    cannonGroup.add(barrel);

    // Barrel glow
    const glowTipGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const glowTip = new THREE.Mesh(glowTipGeo, glowRedCore);
    glowTip.position.set(side * 0.55, Math.cos(angle) * 0.22, Math.sin(angle) * 0.22);
    cannonGroup.add(glowTip);
  }

  // Shield plate
  const shieldGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.15, 12);
  const shield = new THREE.Mesh(shieldGeo, metalRed);
  shield.rotation.z = Math.PI / 2;
  shield.position.x = -side * 0.3;
  cannonGroup.add(shield);

  cannonGroup.position.set(side * 1.8, 0.5, 0);
  return cannonGroup;
}

robotGroup.add(createCannon(1));
robotGroup.add(createCannon(-1));

// === HAND / GRIPPER ===
const handGroup = new THREE.Group();

const palmGeo = new THREE.SphereGeometry(0.5, 16, 16);
const palm = new THREE.Mesh(palmGeo, metalDark);
handGroup.add(palm);

// Fingers
for (let i = 0; i < 4; i++) {
  const angle = (i / 4) * Math.PI * 2 - Math.PI / 4;
  const fingerGroup = new THREE.Group();

  const seg1Geo = new THREE.CylinderGeometry(0.08, 0.1, 0.6, 8);
  const seg1 = new THREE.Mesh(seg1Geo, metalChrome);
  seg1.position.y = -0.3;
  fingerGroup.add(seg1);

  const knuckleGeo = new THREE.SphereGeometry(0.09, 8, 8);
  const knuckle = new THREE.Mesh(knuckleGeo, glowRed);
  knuckle.position.y = -0.6;
  fingerGroup.add(knuckle);

  const seg2Geo = new THREE.CylinderGeometry(0.06, 0.08, 0.5, 8);
  const seg2 = new THREE.Mesh(seg2Geo, metalChrome);
  seg2.position.y = -0.85;
  seg2.rotation.x = 0.2;
  fingerGroup.add(seg2);

  const tipGeo = new THREE.ConeGeometry(0.06, 0.2, 6);
  const tip = new THREE.Mesh(tipGeo, spikeMetal);
  tip.position.y = -1.15;
  tip.rotation.x = Math.PI;
  fingerGroup.add(tip);

  fingerGroup.position.set(Math.cos(angle) * 0.4, 0, Math.sin(angle) * 0.4);
  fingerGroup.rotation.z = Math.cos(angle) * 0.3;
  fingerGroup.rotation.x = -Math.sin(angle) * 0.3;
  handGroup.add(fingerGroup);
}

handGroup.position.y = 5.3;
robotGroup.add(handGroup);

// Position robot
robotGroup.position.y = -0.5;
scene.add(robotGroup);

// ─── Floating Particles ───
const particleCount = 200;
const particlesGeo = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleSizes = new Float32Array(particleCount);
for (let i = 0; i < particleCount; i++) {
  particlePositions[i * 3] = (Math.random() - 0.5) * 40;
  particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
  particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
  particleSizes[i] = Math.random() * 3 + 1;
}
particlesGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
particlesGeo.setAttribute("size", new THREE.BufferAttribute(particleSizes, 1));

const particleMat = new THREE.PointsMaterial({
  color: 0xff4444,
  size: 0.08,
  transparent: true,
  opacity: 0.6,
  blending: THREE.AdditiveBlending,
});
const particles = new THREE.Points(particlesGeo, particleMat);
scene.add(particles);

// ─── Ground plane (subtle) ───
const groundGeo = new THREE.PlaneGeometry(60, 60);
const groundMat = new THREE.MeshStandardMaterial({
  color: 0xaa0000,
  roughness: 0.8,
  metalness: 0.2,
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -4.5;
ground.receiveShadow = true;
scene.add(ground);

// ─── HTML Overlay ───
const overlay = document.createElement("div");
overlay.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
    
    #ui-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 10;
      font-family: 'Inter', sans-serif;
      overflow: hidden;
    }
    
    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 40px;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 900;
      font-size: 18px;
      color: white;
      letter-spacing: 1px;
    }
    
    .logo-icon {
      width: 28px;
      height: 28px;
      background: white;
      mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E") center/contain no-repeat;
      -webkit-mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E") center/contain no-repeat;
    }
    
    .nav-links {
      display: flex;
      gap: 32px;
      font-size: 13px;
      color: rgba(255,255,255,0.85);
      letter-spacing: 0.5px;
      font-weight: 500;
    }
    
    .hero-text {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 40px 60px;
      box-sizing: border-box;
    }
    
    .hero-label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: -20px;
      padding: 0 5px;
    }
    
    .hero-label {
      font-size: 13px;
      font-weight: 700;
      color: rgba(255,255,255,0.9);
      letter-spacing: 3px;
      text-transform: uppercase;
    }
    
    .hero-title {
      font-size: clamp(80px, 14vw, 200px);
      font-weight: 900;
      color: white;
      letter-spacing: -2px;
      line-height: 0.85;
      margin: 0;
      position: relative;
    }
    
    .hero-title::after {
      content: '';
      position: absolute;
      bottom: 35%;
      left: 0;
      width: 100%;
      height: 2px;
      background: rgba(255,255,255,0.7);
    }
    
    .cta-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      margin-top: 24px;
    }
    
    .cta-btn {
      pointer-events: all;
      background: rgba(0,0,0,0.25);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.15);
      color: white;
      padding: 14px 28px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
    }
    
    .cta-btn:hover {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.4);
      transform: translateY(-2px);
    }
    
    .scroll-indicator {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    
    .scroll-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: rgba(255,255,255,0.3);
    }
    
    .scroll-dot.active {
      background: white;
      box-shadow: 0 0 8px rgba(255,100,100,0.8);
    }
  </style>
  
  <div id="ui-overlay">
    <div class="nav-bar">
      <div class="logo">
        <div class="logo-icon"></div>
        DeepXLab
      </div>
      <div class="nav-links">
        <span>Solutions</span>
        <span>Robotique</span>
        <span>À propos</span>
        <span>Contact</span>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="scroll-dot active"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
      <div class="scroll-dot"></div>
    </div>
    
    <div class="hero-text">
      <div class="hero-label-row">
        <span class="hero-label">Solutions Technologiques</span>
        <span class="hero-label">Robotique · IA · Innovation</span>
      </div>
      <h1 class="hero-title">DEEPXLAB</h1>
      <div class="cta-row">
        <button class="cta-btn">Découvrir nos solutions →</button>
      </div>
    </div>
  </div>
`;
document.body.appendChild(overlay);

// ─── Animation ───
const clock = new THREE.Clock();
const fingerGroups = handGroup.children.filter((c) => c instanceof THREE.Group);

function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  const dt = clock.getDelta();

  // Smooth mouse
  mouse.x += (mouse.targetX - mouse.x) * 0.05;
  mouse.y += (mouse.targetY - mouse.y) * 0.05;

  // Robot follows mouse
  robotGroup.rotation.y = mouse.x * 0.5;
  robotGroup.rotation.x = mouse.y * 0.15;
  robotGroup.rotation.z = mouse.x * -0.08;

  // Joint follows mouse more dramatically
  jointGroup.rotation.z = mouse.x * 0.4;
  jointGroup.rotation.x = mouse.y * 0.3;

  // Upper arm reacts
  upperArmGroup.rotation.z = mouse.x * 0.2;
  upperArmGroup.rotation.x = Math.sin(t * 0.8) * 0.05;

  // Shoulder subtle movement
  shoulderGroup.rotation.y = t * 0.3;
  shoulderGroup.rotation.z = Math.sin(t) * 0.05;

  // Hand grip animation
  const gripIntensity = (Math.sin(t * 2) * 0.5 + 0.5) * 0.15;
  fingerGroups.forEach((finger, i) => {
    const phase = (i / fingerGroups.length) * Math.PI * 2;
    finger.rotation.z = Math.cos(finger.rotation.z) * 0.3 + gripIntensity * Math.sin(t * 3 + phase);
  });

  // Eye core pulsing
  const pulse = Math.sin(t * 3) * 0.3 + 1;
  eyeCore.scale.set(pulse, pulse, pulse);
  glowRedCore.emissiveIntensity = 2 + Math.sin(t * 4) * 2;

  // Eye tracks mouse
  eyeCore.position.x = mouse.x * 0.15;
  eyeCore.position.y = mouse.y * 0.15;

  // Idle bob
  robotGroup.position.y = -0.5 + Math.sin(t * 0.7) * 0.3;

  // Base rotation
  baseGroup.rotation.y = t * 0.15;

  // Cannon recoil animation
  const cannons = robotGroup.children.filter((c) => c.isGroup && c !== baseGroup && c !== lowerArmGroup && c !== jointGroup && c !== upperArmGroup && c !== shoulderGroup && c !== handGroup);

  // Particles float
  const positions = particlesGeo.attributes.position.array;
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3 + 1] += Math.sin(t + i) * 0.003;
    positions[i * 3] += Math.cos(t * 0.5 + i * 0.1) * 0.002;
  }
  particlesGeo.attributes.position.needsUpdate = true;
  particles.rotation.y = t * 0.02;

  // Light animation
  fillLight.intensity = 1.5 + Math.sin(t * 2) * 0.5;
  backLight.position.x = Math.sin(t * 0.5) * 5;

  // Scroll effect
  camera.position.y = 2 - scrollProgress.value * 4;
  camera.position.z = 18 - scrollProgress.value * 6;

  renderer.render(scene, camera);
}

animate();

// ─── Resize ───
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

## HTML File

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; outline: none !important; box-sizing: border-box; }
    html, body, #root { width: 100%; height: 100%; overflow: hidden; background: #000; }
    canvas { display: block; outline: none !important; }
    #canvas { position: absolute; top: 0; left: 0; }
  </style>

  <script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.module.js",
      "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.webgpu.js",
      "three/tsl": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.tsl.js",
      "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.2/examples/jsm/"
    }
  }
  </script>

</head>
<body>
  <div id="root"></div>
  <script type="module" src="/index.js"></script>
</body>
</html>
```
