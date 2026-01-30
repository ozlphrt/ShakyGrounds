import './style.css'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import { Brush, Evaluator, ADDITION } from 'three-bvh-csg'
import GUI from 'lil-gui'

// Game systems
import { gameManager } from './game.js'
import { occupancyGrid, GRID_SIZE, MAX_HEIGHT, PLATE_HEIGHT } from './grid.js'
import { getShape, normalizeShape } from './shapes.js'

// --- Configuration ---
const TIME_STEP = 1 / 60

CANNON.Vec3.prototype.approxEquals = function (v, epsilon) {
  return this.distanceTo(v) < epsilon
}

const debugConfig = {
  opacity: 0.712,
  roughness: 0.527,
  metalness: 0,
  emissiveIntensity: 5,
  transmission: 0,
  thickness: 5,
  depthWrite: false,
  envMapIntensity: 1,
  maxCells: 8,
  palette: 'Jewel',
  blockMode: '2D', // '2D' = flat polyominoes, '3D' = polycubes
  selectionLightIntensity: 50,
  saveToClipboard: () => {
    // Merge both configs for export
    // Note: lightConfig is defined later, but function runs on click so it should be fine?
    // Actually, lightConfig is const, defined below. 
    // We need to ensure we can access it.
    // If this throws, we might need to move this function definition or defer it.
    // But vars are hoisted? No const is not.
    // BUT the function body is not executed until click. By then, lightConfig IS defined.

    // We can't easily merge them into one flat object if keys collide (they don't currently).
    // Let's verify valid keys.

    const exportData = {
      ...debugConfig,
      lights: (typeof lightConfig !== 'undefined') ? lightConfig : {}
    }
    delete exportData.saveToClipboard

    const json = JSON.stringify(exportData, null, 2)
    navigator.clipboard.writeText(json).then(() => {
      alert("Full Configuration (Main + Lights) copied to clipboard!")
    })
  }
}

const palettes = {
  'Pastel': null, // Random within HSL(0-1, 0.4-0.6, 0.5-0.7)
  'Vivid': [0xFF3B30, 0xFF9500, 0xFFCC00, 0x34C759, 0x007AFF, 0x5856D6, 0xAF52DE, 0x00C7BE], // Red, Orange, Yellow, Green, Blue, Indigo, Purple, Teal
  'Rainbow': [0xE63946, 0xF4A261, 0xE9C46A, 0x2A9D8F, 0x264653, 0x6A4C93, 0x1982C4, 0x8AC926], // Classic rainbow spectrum
  'Neon': [0xFF0080, 0xFF4D00, 0xFFE600, 0x00FF66, 0x00CCFF, 0x9933FF, 0xFF3366, 0x00FFCC], // Electric neon glow
  'Candy': [0xFF6B6B, 0xFFE66D, 0x4ECDC4, 0x95E1D3, 0xF38181, 0xAA96DA, 0xFCBAD3, 0xA8D8EA], // Sweet candy colors
  'Jewel': [0xB85C5C, 0xC4956A, 0xD4B87A, 0x5A8A7A, 0x4A6A8A, 0x7A5A8A, 0x8A6A9A, 0x5A8A8A], // Muted jewel tones
  'Mineral': [0x7D8E95, 0xA9B3B9, 0xC7CED1, 0xEBEBEB, 0x586972, 0x8FA3AD, 0xB8C5CC, 0x6B7D85], // Soft Greys/Blues
  'Botanical': [0x5F7161, 0x6D8B74, 0x8F9779, 0xEFEAD8, 0xD0C9C0, 0x7A9B7E, 0xA8C4A2, 0x4A5D4B], // Sage/Fern/Beige
  'Clay': [0x8D7B68, 0xA4907C, 0xC8B6A6, 0xF1DEC9, 0xCFB997, 0xB89F8B, 0xD4C4B0, 0x9A8675], // Terracotta/Sand
  'Autumn': [0xCD853F, 0xDEB887, 0xF4A460, 0xD2691E, 0x8B4513, 0xE8A04C, 0xC97D3A, 0xA65E2E], // Leafy browns/oranges
  'Forest': [0x228B22, 0x2E8B57, 0x3CB371, 0x6B8E23, 0x556B2F, 0x4A7C4A, 0x1E6B1E, 0x3D5E3D], // Deep greens, olive
  'Earth': [0x8B4513, 0xA0522D, 0x6B4423, 0x8B7355, 0x704214, 0x946038, 0x7D5A4A, 0x5C3D2E], // Rich browns, soil
  'Moss': [0x4A5D23, 0x7C9A5E, 0x8A9A5B, 0xADBF8C, 0x5E7D4C, 0x6B8B47, 0x98AD78, 0x3D4D2A], // Mossy greens
  'Stone': [0x696969, 0x808080, 0xA9A9A9, 0x8B8682, 0x708090, 0x9A9A9A, 0x5A5A5A, 0x787878], // Natural greys
  'Ocean': [0x1E6F7A, 0x2E8B8B, 0x4A9B9B, 0x367588, 0x5F9EA0, 0x3D8A8C, 0x1A5F6A, 0x4E8B8D], // Deep sea teals
  'Sunset': [0xCC5500, 0xE07020, 0xD4A574, 0xC19A6B, 0xB87333, 0xE8843C, 0xD66B2C, 0xC48850], // Warm oranges/coppers
  'Driftwood': [0x9C8B7D, 0xB5A898, 0xC4B9AD, 0x8B7D6B, 0xA69887, 0xAD9E90, 0x7D7063, 0xC9BFB4], // Weathered wood tones
  'Slate': [0x708090, 0x778899, 0xB0C4DE, 0x8899AA, 0x5D6D7E, 0x9AACBE, 0x4D5D6E, 0x8695A4], // Blue-Greys
  'Midnight': [0x2F4F4F, 0x36454F, 0x4A5568, 0x3D5A5A, 0x2C3E50, 0x1E3A3A, 0x3A4D5E, 0x2A3F4F], // Deep natural darks
}

const gui = new GUI()
gui.hide() // Hidden by default

// Toggle debug panel: CTRL+ALT+SHIFT+D
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() === 'd') {
    e.preventDefault()
    gui._hidden ? gui.show() : gui.hide()
  }
})
gui.add(debugConfig, 'palette', Object.keys(palettes)).name('Base Palette').onChange(updateAllBlockColors)
gui.add(debugConfig, 'blockMode', ['2D', '3D']).name('Block Mode')
gui.add(debugConfig, 'maxCells', 1, 8, 1).name('Max Polyomino Cubes')
gui.add(debugConfig, 'saveToClipboard').name('💾 Save All Config')

const matFolder = gui.addFolder('Block Material')
matFolder.add(debugConfig, 'opacity', 0, 1).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'roughness', 0, 1).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'metalness', 0, 1).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'emissiveIntensity', 0, 5).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'transmission', 0, 1).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'thickness', 0, 5).onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'depthWrite').onChange(updateSelectedMaterial)
matFolder.add(debugConfig, 'selectionLightIntensity', 0, 50).name('Selection Light').onChange((v) => {
  if (selectionLight) selectionLight.intensity = v
})
matFolder.open()

// Helper to rebuild geometry if radius changes (Complex, placeholder for now)
// gui.add(debugConfig, 'radius', 0, 0.5).name('Block Radius (New only)')

function updateSelectedMaterial() {
  if (selectedObject && selectedObject.mesh) {
    selectedObject.mesh.traverse(child => {
      if (child.isMesh && child.material.isMeshPhysicalMaterial) {
        child.material.opacity = debugConfig.opacity
        child.material.roughness = debugConfig.roughness
        child.material.metalness = debugConfig.metalness
        child.material.emissiveIntensity = debugConfig.emissiveIntensity
        child.material.transmission = debugConfig.transmission
        child.material.thickness = debugConfig.thickness
        child.material.depthWrite = debugConfig.depthWrite
        child.material.needsUpdate = true
      }
    })
  }
}

function updateAllBlockColors() {
  const paletteName = debugConfig.palette
  objectsToUpdate.forEach(obj => {
    if (!obj.mesh || !obj.mesh.userData || !obj.mesh.userData.isBlock) return

    let color
    if (paletteName === 'Pastel' || !palettes[paletteName]) {
      const hue = Math.random()
      const saturation = 0.4 + Math.random() * 0.2
      const lightness = 0.5 + Math.random() * 0.2
      color = new THREE.Color().setHSL(hue, saturation, lightness)
    } else {
      const colors = palettes[paletteName]
      const hex = colors[Math.floor(Math.random() * colors.length)]
      color = new THREE.Color(hex)
    }

    obj.mesh.traverse(child => {
      if (child.isMesh && child.material) {
        child.material.color.copy(color)
        child.material.emissive.copy(color)
      }
    })
  })
}

// --- Scene Setup ---
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x15151a) // Slightly darker, richer background
scene.fog = new THREE.Fog(0x15151a, 20, 50)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(8, 12, 12)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.096
document.body.appendChild(renderer.domElement)

// --- Professional Studio Lighting Rig ---

// 1. Environment Reflections (Vital for Glass)
const pmremGenerator = new THREE.PMREMGenerator(renderer)
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture
scene.environmentIntensity = 1.212

// 2. Global Ambiance (Hemisphere Light)
const ambientLight = new THREE.HemisphereLight(0xddeeff, 0x222222, 1.398)
scene.add(ambientLight)

// 3. Key Light (Main Shadows - Warm/Heroic)
const keyLight = new THREE.DirectionalLight(0xfff5ea, 5)
keyLight.position.set(10, 15, 10)
keyLight.castShadow = true
keyLight.shadow.mapSize.width = 2048
keyLight.shadow.mapSize.height = 2048
keyLight.shadow.radius = 4
keyLight.shadow.bias = -0.0001
keyLight.shadow.camera.near = 0.5
keyLight.shadow.camera.far = 100
keyLight.shadow.camera.left = -15
keyLight.shadow.camera.right = 15
keyLight.shadow.camera.top = 15
keyLight.shadow.camera.bottom = -15
scene.add(keyLight)

// 4. Fill Light (Soften Shadows - Cool/Subtle)
const fillLight = new THREE.DirectionalLight(0xebf5ff, 3.56)
fillLight.position.set(-10, 5, 8)
scene.add(fillLight)

// 5. Rim Light (Silhouette Pop - Neutral)
const rimLight = new THREE.SpotLight(0xffffff, 2.76)
rimLight.position.set(0, 12, -15)
rimLight.angle = 0.8
rimLight.penumbra = 0.5
rimLight.decay = 0 // No distance falloff for consistent rim lighting
rimLight.distance = 0 // Infinite range
const rimTarget = new THREE.Object3D()
rimTarget.position.set(0, 4, 0)
scene.add(rimTarget)
rimLight.target = rimTarget
scene.add(rimLight)

// --- Lighting Debug Panel ---
const lightConfig = {
  exposure: 0.096,
  ambientIntensity: 1.398,
  keyIntensity: 5,
  fillIntensity: 3.56,
  rimIntensity: 2.76,
  envIntensity: 1.212
}

const lightFolder = gui.addFolder('✨ Studio Lighting')
lightFolder.add(lightConfig, 'exposure', 0, 0.2).name('Tone Exposure').onChange((v) => { renderer.toneMappingExposure = v })
lightFolder.add(lightConfig, 'ambientIntensity', 0, 5).name('Global Ambient').onChange((v) => { ambientLight.intensity = v })
lightFolder.add(lightConfig, 'keyIntensity', 0, 20).name('Key (Front-Top)').onChange((v) => { keyLight.intensity = v })
lightFolder.add(lightConfig, 'fillIntensity', 0, 20).name('Fill (Side)').onChange((v) => { fillLight.intensity = v })
lightFolder.add(lightConfig, 'rimIntensity', 0, 20).name('Rim (Back)').onChange((v) => { rimLight.intensity = v })
lightFolder.add(lightConfig, 'envIntensity', 0, 10).name('Env Reflection').onChange((v) => { scene.environmentIntensity = v })
lightFolder.open()

// --- Physics Setup ---
const world = new CANNON.World()
world.gravity.set(0, -25, 0) // Increased gravity for snappier falls
world.broadphase = new CANNON.SAPBroadphase(world)
const defaultMaterial = new CANNON.Material('default')
const defaultContactMaterial = new CANNON.ContactMaterial(defaultMaterial, defaultMaterial, {
  friction: 0.0, // No friction to prevent wall-sticking
  restitution: 0.0,
})
world.addContactMaterial(defaultContactMaterial)

// --- Debug/View Controls ---
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.maxPolarAngle = Math.PI / 2 - 0.1

// Track user camera interactions to pause auto-zoom
controls.addEventListener('start', () => {
  userIsControllingCamera = true
  lastCameraInteractionTime = performance.now()
})

controls.addEventListener('end', () => {
  userIsControllingCamera = false
  lastCameraInteractionTime = performance.now()
})

// Also track wheel zoom (change event fires during zoom)
controls.addEventListener('change', () => {
  lastCameraInteractionTime = performance.now()
})

// --- Dynamic Camera System ---
const cameraConfig = {
  autoZoom: true,
  padding: 2.0,          // Minimum padding in world units
  minDistance: 8,        // Closest zoom allowed
  maxDistance: 60,       // Furthest zoom allowed
  smoothing: 0.008,      // Base lerp factor (very gentle)
  recoveryDelay: 3.0,    // Seconds to wait after user input before auto-zoom resumes
  recoverySmoothingMultiplier: 0.1, // During recovery, smoothing is multiplied by this (ultra slow)
  verticalBias: 0.3,     // How much to offset target upward (0-1 of content height)
}

// User interaction tracking for camera
let lastCameraInteractionTime = 0
let userIsControllingCamera = false

// Camera folder in GUI
const cameraFolder = gui.addFolder('📷 Dynamic Camera')
cameraFolder.add(cameraConfig, 'autoZoom').name('Auto Zoom')
cameraFolder.add(cameraConfig, 'padding', 0, 5).name('Edge Padding')
cameraFolder.add(cameraConfig, 'minDistance', 5, 20).name('Min Distance')
cameraFolder.add(cameraConfig, 'maxDistance', 20, 100).name('Max Distance')
cameraFolder.add(cameraConfig, 'smoothing', 0.001, 0.05).name('Smoothing')
cameraFolder.add(cameraConfig, 'recoveryDelay', 0.5, 10).name('Recovery Delay (s)')
cameraFolder.open()

/**
 * Calculate axis-aligned bounding box encompassing all blocks + plate
 * @returns {THREE.Box3} Combined bounds
 */
function calculateContentBounds() {
  const box = new THREE.Box3()

  // Start with the base plate as minimum bounds
  const plateMin = new THREE.Vector3(-plateSize / 2, 0, -plateSize / 2)
  const plateMax = new THREE.Vector3(plateSize / 2, plateHeight, plateSize / 2)
  box.set(plateMin, plateMax)

  // Expand to include all block meshes
  for (const object of objectsToUpdate) {
    if (object.mesh && object.mesh.userData && object.mesh.userData.isBlock) {
      const meshBox = new THREE.Box3().setFromObject(object.mesh)
      box.union(meshBox)
    }
  }

  return box
}

/**
 * Compute required camera distance to fit a sphere of given radius
 * considering both vertical and horizontal FOV constraints.
 * @param {number} radius - Bounding sphere radius (with padding)
 * @returns {number} Required distance from target
 */
function computeFitDistance(radius) {
  const vFov = THREE.MathUtils.degToRad(camera.fov)
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect)

  // Distance needed to fit vertically and horizontally
  const dVert = radius / Math.sin(vFov / 2)
  const dHorz = radius / Math.sin(hFov / 2)

  return Math.max(dVert, dHorz)
}

/**
 * Update camera position/target to frame all content with minimum padding.
 * Called every frame when autoZoom is enabled.
 * Respects user input: pauses during interaction and recovers slowly after.
 */
function updateDynamicCamera() {
  if (!cameraConfig.autoZoom) return

  // If user is actively controlling camera, skip auto-zoom entirely
  if (userIsControllingCamera) return

  // Calculate time since last user interaction
  const timeSinceInteraction = (performance.now() - lastCameraInteractionTime) / 1000

  // If within recovery delay, don't auto-zoom at all
  if (timeSinceInteraction < cameraConfig.recoveryDelay) return

  // Calculate effective smoothing: 
  // - Start ultra-slow after recovery delay
  // - Gradually increase to normal over additional time
  const recoveryProgress = Math.min(1, (timeSinceInteraction - cameraConfig.recoveryDelay) / cameraConfig.recoveryDelay)
  const effectiveSmoothing = cameraConfig.smoothing * THREE.MathUtils.lerp(
    cameraConfig.recoverySmoothingMultiplier, // Start very slow
    1.0, // Ramp up to normal
    recoveryProgress * recoveryProgress // Quadratic ease-in for gentle start
  )

  const bounds = calculateContentBounds()
  const center = new THREE.Vector3()
  const size = new THREE.Vector3()
  bounds.getCenter(center)
  bounds.getSize(size)

  // Bounding sphere radius (diagonal / 2) + padding
  const diag = Math.sqrt(size.x * size.x + size.y * size.y + size.z * size.z)
  const radius = diag / 2 + cameraConfig.padding

  // Compute ideal distance
  let idealDistance = computeFitDistance(radius)
  idealDistance = THREE.MathUtils.clamp(idealDistance, cameraConfig.minDistance, cameraConfig.maxDistance)

  // Target point: center of content, biased upward so we look slightly down
  const targetPoint = new THREE.Vector3(
    center.x,
    center.y * cameraConfig.verticalBias,
    center.z
  )

  // Smoothly move OrbitControls target
  controls.target.lerp(targetPoint, effectiveSmoothing)

  // Current direction from target to camera (preserve user's orbit angle)
  const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize()

  // Desired camera position
  const desiredPos = new THREE.Vector3().copy(controls.target).addScaledVector(direction, idealDistance)

  // Smoothly interpolate camera position (only zoom, preserve angle)
  camera.position.lerp(desiredPos, effectiveSmoothing)
}

// --- Objects ---
const objectsToUpdate = []

function createObject(mesh, body) {
  scene.add(mesh)
  world.addBody(body)
  objectsToUpdate.push({ mesh, body })
  return { mesh, body }
}

// 1. Static Ground
const groundGeometry = new THREE.PlaneGeometry(100, 100)
const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0, roughness: 1 })
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial)
groundMesh.rotation.x = -Math.PI * 0.5
groundMesh.receiveShadow = true
scene.add(groundMesh)

const groundBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Plane(),
})
groundBody.quaternion.setFromEuler(-Math.PI * 0.5, 0, 0)
world.addBody(groundBody)

// 2. 8x8 Base Plate
const plateSize = 8
const plateHeight = 0.5
const plateGeometry = new THREE.BoxGeometry(plateSize, plateHeight, plateSize)
const plateMaterial = new THREE.MeshStandardMaterial({ color: 0x444455, metalness: 0.2, roughness: 0.8 })
const plateMesh = new THREE.Mesh(plateGeometry, plateMaterial)
plateMesh.position.y = plateHeight / 2
plateMesh.receiveShadow = true
scene.add(plateMesh)

const plateBody = new CANNON.Body({
  type: CANNON.Body.STATIC,
  shape: new CANNON.Box(new CANNON.Vec3(plateSize / 2, plateHeight / 2, plateSize / 2)),
  position: new CANNON.Vec3(0, plateHeight / 2, 0),
  material: defaultMaterial
})
world.addBody(plateBody)

const gridHelper = new THREE.GridHelper(plateSize, 8, 0x888888, 0x555555)
gridHelper.position.y = plateHeight + 0.01
scene.add(gridHelper)

// --- Invisible Walls ---
const wallThickness = 1
const wallHeight = 20
const wallOffset = plateSize / 2 + wallThickness / 2

const wallShapes = [
  { size: [plateSize, wallHeight, wallThickness], pos: [0, wallHeight / 2, -wallOffset] },
  { size: [plateSize, wallHeight, wallThickness], pos: [0, wallHeight / 2, wallOffset] },
  { size: [wallThickness, wallHeight, plateSize], pos: [-wallOffset, wallHeight / 2, 0] },
  { size: [wallThickness, wallHeight, plateSize], pos: [wallOffset, wallHeight / 2, 0] }
]

wallShapes.forEach(spec => {
  const wallBody = new CANNON.Body({
    mass: 0, // Static
    position: new CANNON.Vec3(...spec.pos),
    shape: new CANNON.Box(new CANNON.Vec3(spec.size[0] / 2, spec.size[1] / 2, spec.size[2] / 2))
  })
  world.addBody(wallBody)
})



// --- Logic Variables ---
let selectedObject = null; // { mesh, body, initialMass }
let selectionLight = null; // PointLight that follows selected block
let interactionMode = 'move' // 'move' or 'rotate'
let blockCount = 0;

// --- UI Elements ---
const ui = {
  container: document.getElementById('ui-container'),
  controls: document.getElementById('selected-controls'),
  btnSpawn: document.getElementById('btn-spawn'),
  btnDrop: document.getElementById('btn-drop'),
  moveBtns: document.querySelectorAll('.btn-move'),
  rotBtns: document.querySelectorAll('.btn-rot'),
  score: document.getElementById('score-display'),
  indicator: document.getElementById('mode-indicator'),
  // New level system UI
  worldName: document.getElementById('world-name'),
  levelDisplay: document.getElementById('level-display'),
  linesDisplay: document.getElementById('lines-display'),
  clearFeedback: document.getElementById('clear-feedback'),
  clearText: document.getElementById('clear-text'),
  gameOverOverlay: document.getElementById('game-over-overlay'),
  gameOverTitle: document.getElementById('game-over-title'),
  finalScore: document.getElementById('final-score'),
  finalLevel: document.getElementById('final-level'),
  finalLines: document.getElementById('final-lines'),
  btnRestart: document.getElementById('btn-restart'),
}

// --- Game Manager Callbacks ---
gameManager.onScoreChange = (score, target) => {
  if (ui.score) ui.score.innerText = `Score: ${score}`
}

gameManager.onLevelChange = (level, world, worldName) => {
  if (ui.levelDisplay) {
    ui.levelDisplay.innerText = `Level ${level}`
    ui.levelDisplay.classList.add('level-up')
    setTimeout(() => ui.levelDisplay.classList.remove('level-up'), 500)
  }
  if (ui.worldName) ui.worldName.innerText = worldName
}

gameManager.onLinesChange = (lines) => {
  if (ui.linesDisplay) ui.linesDisplay.innerText = `Lines: ${lines}`
}

gameManager.onLayerClear = ({ layers, score, totalLines }) => {
  showClearFeedback(score, layers.length)
  // Trigger visual effect for cleared layers
  animateLayerClear(layers)
}

gameManager.onGameOver = ({ win, score, level }) => {
  if (ui.gameOverOverlay) {
    ui.gameOverOverlay.classList.remove('hidden')
    if (ui.gameOverTitle) {
      ui.gameOverTitle.innerText = win ? 'Victory!' : 'Game Over'
      ui.gameOverTitle.className = win ? 'win' : ''
    }
    if (ui.finalScore) ui.finalScore.innerText = `Score: ${score}`
    if (ui.finalLevel) ui.finalLevel.innerText = `Level: ${level}`
    if (ui.finalLines) ui.finalLines.innerText = `Lines Cleared: ${gameManager.getLinesCleared()}`
  }
}

// Connect spawn function to game manager
gameManager.spawnBlockFn = () => spawnBlock()

/**
 * Show clear feedback animation
 */
function showClearFeedback(score, layerCount) {
  if (!ui.clearFeedback || !ui.clearText) return
  
  ui.clearText.innerText = `+${score}`
  ui.clearFeedback.classList.remove('hidden', 'multi-clear')
  
  if (layerCount > 1) {
    ui.clearFeedback.classList.add('multi-clear')
  }
  
  // Remove after animation
  setTimeout(() => {
    ui.clearFeedback.classList.add('hidden')
  }, 1000)
}

/**
 * Animate layer clear effect
 */
function animateLayerClear(layerYs) {
  // Create flash effect at cleared layer heights
  layerYs.forEach(gridY => {
    const worldY = gridY + PLATE_HEIGHT + 0.5
    
    // Create a plane that flashes
    const planeGeo = new THREE.PlaneGeometry(GRID_SIZE, GRID_SIZE)
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0xffeb3b,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      depthWrite: false
    })
    const plane = new THREE.Mesh(planeGeo, planeMat)
    plane.rotation.x = -Math.PI / 2
    plane.position.y = worldY
    scene.add(plane)
    
    // Animate fade out
    const startTime = performance.now()
    const duration = 500
    
    function animatePlane() {
      const elapsed = performance.now() - startTime
      const progress = Math.min(1, elapsed / duration)
      
      plane.material.opacity = 0.8 * (1 - progress)
      plane.scale.y = 1 + progress * 0.5
      
      if (progress < 1) {
        requestAnimationFrame(animatePlane)
      } else {
        scene.remove(plane)
        planeGeo.dispose()
        planeMat.dispose()
      }
    }
    animatePlane()
  })
}

// Initialize game on load
function initGame() {
  gameManager.init(1)
  
  // Check for prefill on level start
  const levelConfig = gameManager.getLevelConfig()
  if (levelConfig && levelConfig.prefillPercent > 0) {
    prefillBoard(levelConfig.prefillPercent, levelConfig.prefillHeight || 3)
  }
}

/**
 * Pre-fill the board with random blocks
 * @param {number} fillPercent - Percentage of cells to fill (0-1)
 * @param {number} maxHeight - Maximum height to fill up to (in grid units)
 */
function prefillBoard(fillPercent, maxHeight) {
  const totalCells = GRID_SIZE * GRID_SIZE * maxHeight
  const fillCount = Math.floor(totalCells * fillPercent)
  
  // Create set of all possible positions
  const allPositions = []
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let z = 0; z < GRID_SIZE; z++) {
      for (let y = 0; y < maxHeight; y++) {
        allPositions.push({ x, y, z })
      }
    }
  }
  
  // Shuffle and pick fillCount positions
  for (let i = allPositions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[allPositions[i], allPositions[j]] = [allPositions[j], allPositions[i]]
  }
  
  const fillPositions = allPositions.slice(0, fillCount)
  
  // Spawn cubes at selected positions
  for (const pos of fillPositions) {
    spawnPrefillCube(pos.x, pos.y, pos.z)
  }
}

/**
 * Spawn a single cube for prefill (already locked in place)
 */
function spawnPrefillCube(gridX, gridY, gridZ) {
  const cubeSize = 1.0
  const halfExtents = new CANNON.Vec3(0.49, 0.49, 0.49)
  
  // Convert grid to world position
  const worldX = gridX - GRID_SIZE / 2 + 0.5
  const worldY = gridY + PLATE_HEIGHT + 0.5
  const worldZ = gridZ - GRID_SIZE / 2 + 0.5
  
  // Use consistent color based on cube count (1 cube = index 0)
  let color
  const paletteName = debugConfig.palette
  const colorIndex = 0 // Single cube = first color in palette
  
  if (paletteName === 'Pastel' || !palettes[paletteName]) {
    const hue = colorIndex / 8
    color = new THREE.Color().setHSL(hue, 0.5, 0.6)
  } else {
    const colors = palettes[paletteName]
    const hex = colors[colorIndex % colors.length]
    color = new THREE.Color(hex)
  }
  
  // Slightly desaturate prefill blocks to distinguish from player blocks
  color.multiplyScalar(0.7)
  
  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color.clone().multiplyScalar(0.3),
    metalness: 0.1,
    roughness: 0.6,
    flatShading: false
  })
  
  // Create mesh
  const visualSize = cubeSize * 1.02
  const geometry = new RoundedBoxGeometry(visualSize, visualSize, visualSize, 4, 0.08)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  
  const group = new THREE.Group()
  group.position.set(worldX, worldY, worldZ)
  group.add(mesh)
  
  // Create static physics body
  const body = new CANNON.Body({
    mass: 0, // Static
    type: CANNON.Body.STATIC,
    position: new CANNON.Vec3(worldX, worldY, worldZ),
    material: defaultMaterial
  })
  body.addShape(new CANNON.Box(halfExtents))
  
  // Generate block ID
  const blockId = occupancyGrid.generateBlockId()
  
  group.userData = {
    isBlock: true,
    body: body,
    blockId: blockId,
    isPrefill: true,
    refOffset: new CANNON.Vec3(0, 0, 0),
    minOffset: new CANNON.Vec3(-0.5, -0.5, -0.5),
    maxOffset: new CANNON.Vec3(0.5, 0.5, 0.5)
  }
  
  createObject(group, body)
  
  // Register with occupancy grid
  occupancyGrid.registerBlock(blockId, [{ x: worldX, y: worldY, z: worldZ }])
}

// Restart button handler
if (ui.btnRestart) {
  ui.btnRestart.addEventListener('click', () => {
    if (ui.gameOverOverlay) ui.gameOverOverlay.classList.add('hidden')
    
    // Clear all blocks
    while (objectsToUpdate.length > 0) {
      const obj = objectsToUpdate.pop()
      if (obj.mesh) scene.remove(obj.mesh)
      if (obj.body) world.removeBody(obj.body)
    }
    
    blockCount = 0
    selectedObject = null
    
    initGame()
  })
}

// Visual Helpers
const boxHelper = new THREE.BoxHelper(new THREE.Object3D(), 0xffff00)
scene.add(boxHelper)
boxHelper.visible = false

// Rotation Gizmos Group
const gizmoGroup = new THREE.Group()
scene.add(gizmoGroup)

// Pre-build the 3 gizmos
const gizmoX = createStylishGizmo('x', 0xff3366) // Vibrant magenta-red
const gizmoY = createStylishGizmo('y', 0x33ff66) // Vibrant lime-green  
const gizmoZ = createStylishGizmo('z', 0x3366ff) // Vibrant electric blue
gizmoGroup.add(gizmoX.group)
gizmoGroup.add(gizmoY.group)
gizmoGroup.add(gizmoZ.group)
gizmoGroup.visible = false

// Store references for animation
const gizmoRefs = { x: gizmoX, y: gizmoY, z: gizmoZ }

function createStylishGizmo(type, colorHex) {
  const wrapper = new THREE.Group()
  const color = new THREE.Color(colorHex)
  const glowColor = color.clone().multiplyScalar(1.5) // Brighter for glow
  
  const axisLength = 2.5
  const ringRadius = 1.8
  const tubeRadius = 0.06
  
  // === 1. GLOWING AXIS LINE with cylinder + spherical caps ===
  
  // Main axis cylinder (thick glowing rod)
  const axisCylinderGeo = new THREE.CylinderGeometry(0.04, 0.04, axisLength * 2, 16)
  const axisMat = new THREE.MeshBasicMaterial({ 
    color: color, 
    transparent: true, 
    opacity: 0.9,
    depthTest: false,
    toneMapped: false
  })
  const axisCylinder = new THREE.Mesh(axisCylinderGeo, axisMat)
  
  // Outer glow cylinder (larger, more transparent)
  const axisGlowGeo = new THREE.CylinderGeometry(0.12, 0.12, axisLength * 2, 16)
  const axisGlowMat = new THREE.MeshBasicMaterial({ 
    color: glowColor, 
    transparent: true, 
    opacity: 0.25,
    depthTest: false,
    toneMapped: false
  })
  const axisGlow = new THREE.Mesh(axisGlowGeo, axisGlowMat)
  
  // Spherical end caps
  const capGeo = new THREE.SphereGeometry(0.12, 16, 16)
  const capMat = new THREE.MeshBasicMaterial({ 
    color: glowColor, 
    transparent: true, 
    opacity: 0.95,
    depthTest: false,
    toneMapped: false
  })
  const cap1 = new THREE.Mesh(capGeo, capMat)
  const cap2 = new THREE.Mesh(capGeo, capMat.clone())
  
  // Orient axis based on type
  if (type === 'x') {
    axisCylinder.rotation.z = Math.PI / 2
    axisGlow.rotation.z = Math.PI / 2
    cap1.position.set(-axisLength, 0, 0)
    cap2.position.set(axisLength, 0, 0)
  } else if (type === 'y') {
    // Y is default cylinder orientation (vertical)
    cap1.position.set(0, -axisLength, 0)
    cap2.position.set(0, axisLength, 0)
  } else { // z
    axisCylinder.rotation.x = Math.PI / 2
    axisGlow.rotation.x = Math.PI / 2
    cap1.position.set(0, 0, -axisLength)
    cap2.position.set(0, 0, axisLength)
  }
  
  wrapper.add(axisCylinder)
  wrapper.add(axisGlow)
  wrapper.add(cap1)
  wrapper.add(cap2)
  
  // === 2. ANIMATED CIRCULAR ARROW (Torus arc with gradient effect) ===
  
  // Main ring arc (270 degrees)
  const arcAngle = Math.PI * 1.6 // Slightly more than 270 deg for visual appeal
  const torusGeo = new THREE.TorusGeometry(ringRadius, tubeRadius, 12, 64, arcAngle)
  const torusMat = new THREE.MeshBasicMaterial({ 
    color: color, 
    depthTest: false, 
    toneMapped: false,
    transparent: true,
    opacity: 0.95
  })
  const torus = new THREE.Mesh(torusGeo, torusMat)
  
  // Outer glow ring
  const torusGlowGeo = new THREE.TorusGeometry(ringRadius, tubeRadius * 2.5, 8, 48, arcAngle)
  const torusGlowMat = new THREE.MeshBasicMaterial({ 
    color: glowColor, 
    depthTest: false, 
    toneMapped: false,
    transparent: true,
    opacity: 0.2
  })
  const torusGlow = new THREE.Mesh(torusGlowGeo, torusGlowMat)
  
  // Orient ring perpendicular to axis
  if (type === 'x') {
    torus.rotation.y = Math.PI / 2
    torusGlow.rotation.y = Math.PI / 2
  } else if (type === 'y') {
    torus.rotation.x = Math.PI / 2
    torusGlow.rotation.x = Math.PI / 2
  }
  // Z is default (XY plane)
  
  wrapper.add(torus)
  wrapper.add(torusGlow)
  
  // === 3. SPINNING INDICATOR (Small orbiting dot) ===
  const dotGeo = new THREE.SphereGeometry(0.08, 12, 12)
  const dotMat = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, 
    depthTest: false, 
    toneMapped: false
  })
  const spinDot = new THREE.Mesh(dotGeo, dotMat)
  
  // Dot glow
  const dotGlowGeo = new THREE.SphereGeometry(0.16, 8, 8)
  const dotGlowMat = new THREE.MeshBasicMaterial({ 
    color: glowColor, 
    depthTest: false, 
    toneMapped: false,
    transparent: true,
    opacity: 0.5
  })
  const spinDotGlow = new THREE.Mesh(dotGlowGeo, dotGlowMat)
  
  // Group the spinning elements for animation
  const spinGroup = new THREE.Group()
  spinGroup.add(spinDot)
  spinGroup.add(spinDotGlow)
  
  // Position initial dot on the ring
  if (type === 'x') {
    spinDot.position.set(0, ringRadius, 0)
    spinDotGlow.position.set(0, ringRadius, 0)
  } else if (type === 'y') {
    spinDot.position.set(ringRadius, 0, 0)
    spinDotGlow.position.set(ringRadius, 0, 0)
  } else {
    spinDot.position.set(ringRadius, 0, 0)
    spinDotGlow.position.set(ringRadius, 0, 0)
  }
  
  wrapper.add(spinGroup)
  
  return { 
    group: wrapper, 
    spinGroup, 
    torus, 
    torusGlow,
    type,
    ringRadius
  }
}

// Gizmo animation state
let gizmoAnimationTime = 0

function updateGizmos(deltaTime = 0) {
  if (!selectedObject) {
    gizmoGroup.visible = false
    return
  }

  gizmoGroup.position.copy(selectedObject.mesh.position)
  gizmoGroup.visible = true

  // Show only active axis
  gizmoRefs.x.group.visible = (interactionMode === 'rotate-x')
  gizmoRefs.y.group.visible = (interactionMode === 'rotate-y')
  gizmoRefs.z.group.visible = (interactionMode === 'rotate-z')

  // If just 'move', hide all
  if (interactionMode === 'move') gizmoGroup.visible = false
  
  // Animate the spinning indicator on active gizmo
  if (gizmoGroup.visible && deltaTime > 0) {
    gizmoAnimationTime += deltaTime
    const spinSpeed = 1.5 // Rotations per second
    const angle = gizmoAnimationTime * spinSpeed * Math.PI * 2
    
    // Animate the active gizmo's spin group
    let activeGizmo = null
    if (interactionMode === 'rotate-x') activeGizmo = gizmoRefs.x
    else if (interactionMode === 'rotate-y') activeGizmo = gizmoRefs.y
    else if (interactionMode === 'rotate-z') activeGizmo = gizmoRefs.z
    
    if (activeGizmo) {
      const r = activeGizmo.ringRadius
      
      // Update spinning dot position based on axis type
      if (activeGizmo.type === 'x') {
        // Rotate in YZ plane
        activeGizmo.spinGroup.children.forEach(child => {
          child.position.set(0, r * Math.cos(angle), r * Math.sin(angle))
        })
      } else if (activeGizmo.type === 'y') {
        // Rotate in XZ plane
        activeGizmo.spinGroup.children.forEach(child => {
          child.position.set(r * Math.cos(angle), 0, r * Math.sin(angle))
        })
      } else { // z
        // Rotate in XY plane
        activeGizmo.spinGroup.children.forEach(child => {
          child.position.set(r * Math.cos(angle), r * Math.sin(angle), 0)
        })
      }
      
      // Pulse the glow intensity subtly
      const pulse = 0.15 + 0.1 * Math.sin(angle * 2)
      if (activeGizmo.torusGlow && activeGizmo.torusGlow.material) {
        activeGizmo.torusGlow.material.opacity = pulse
      }
    }
  }
}

// --- Functions ---

function spawnBlock() {
  // Check game over before spawning
  if (gameManager.isGameOver()) return
  
  // Get shape from level system
  const shapeData = gameManager.getNextShape()
  console.log('Spawning shape:', shapeData)
  
  const { id: shapeId, coords: shapeCoords } = shapeData
  
  if (shapeCoords && shapeCoords.length > 0) {
    console.log(`Using predefined shape: ${shapeId} with ${shapeCoords.length} cubes`)
    spawnPredefinedShape(new THREE.Vector3(0.5, 10, 0.5), shapeCoords, shapeId)
  } else {
    // Fallback to random generation
    console.log('Fallback to random polyomino - shapeCoords:', shapeCoords)
    spawnPolyomino(new THREE.Vector3(0.5, 10, 0.5))
  }
  
  blockCount++
}

/**
 * Spawn a block using predefined shape coordinates
 */
function spawnPredefinedShape(position, shapeCoords, shapeId) {
  const numCubes = shapeCoords.length
  const cubeSize = 1.0
  const halfExtents = new CANNON.Vec3(0.49, 0.49, 0.49)

  // Determine Color based on cube count
  let color
  const paletteName = debugConfig.palette
  const colorIndex = Math.min(numCubes - 1, 7)
  
  if (paletteName === 'Pastel' || !palettes[paletteName]) {
    const hue = colorIndex / 8
    const saturation = 0.5
    const lightness = 0.6
    color = new THREE.Color().setHSL(hue, saturation, lightness)
  } else {
    const colors = palettes[paletteName]
    const hex = colors[colorIndex % colors.length]
    color = new THREE.Color(hex)
  }

  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color,
    metalness: 0.1,
    roughness: 0.5,
    flatShading: false
  })

  // Normalize coordinates (center on centroid)
  const coords = normalizeShape(shapeCoords)

  // Centroid is now at origin after normalization
  const centroid = { x: 0, y: 0, z: 0 }

  const group = new THREE.Group()
  group.position.copy(position)

  const mass = numCubes * 1.0
  const body = new CANNON.Body({
    mass: mass,
    position: new CANNON.Vec3(position.x, position.y, position.z),
    material: defaultMaterial,
    linearDamping: 0.01,
    angularDamping: 0.1,
    fixedRotation: true
  })
  body.angularFactor.set(0, 0, 0)
  body.linearFactor.set(1, 1, 1)

  // Generate unique block ID for occupancy tracking
  const blockId = occupancyGrid.generateBlockId()
  
  // Use CSG union to merge rounded boxes
  const visualSize = cubeSize * 1.05
  const roundedBoxGeometry = new RoundedBoxGeometry(visualSize, visualSize, visualSize, 4, 0.08)
  const csgEvaluator = new Evaluator()
  
  let resultBrush = null
  
  coords.forEach(c => {
    const lx = c.x * cubeSize
    const ly = c.y * cubeSize
    const lz = c.z * cubeSize

    const offset = new CANNON.Vec3(lx, ly, lz)
    body.addShape(new CANNON.Box(halfExtents), offset)

    const brush = new Brush(roundedBoxGeometry)
    brush.position.set(lx, ly, lz)
    brush.updateMatrixWorld()
    
    if (resultBrush === null) {
      resultBrush = brush
    } else {
      resultBrush = csgEvaluator.evaluate(resultBrush, brush, ADDITION)
    }
  })
  
  const finalGeometry = resultBrush.geometry
  finalGeometry.computeVertexNormals()
  
  const mesh = new THREE.Mesh(finalGeometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  group.add(mesh)

  // Calculate Local AABB for Clamping
  let minX = Infinity, minY = Infinity, minZ = Infinity
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity

  coords.forEach(c => {
    const localX = c.x * cubeSize
    const localY = c.y * cubeSize
    const localZ = c.z * cubeSize

    const he = cubeSize * 0.5
    minX = Math.min(minX, localX - he)
    minY = Math.min(minY, localY - he)
    minZ = Math.min(minZ, localZ - he)
    maxX = Math.max(maxX, localX + he)
    maxY = Math.max(maxY, localY + he)
    maxZ = Math.max(maxZ, localZ + he)
  })

  const minOffset = new CANNON.Vec3(minX, minY, minZ)
  const maxOffset = new CANNON.Vec3(maxX, maxY, maxZ)

  // Reference Offset for Snapping (use first cube)
  const refC = coords[0]
  const refX = refC.x * cubeSize
  const refY = refC.y * cubeSize
  const refZ = refC.z * cubeSize
  const refOffset = new CANNON.Vec3(refX, refY, refZ)

  // Store shape info for later use
  group.userData = { 
    isBlock: true, 
    body: body, 
    refOffset: refOffset, 
    minOffset, 
    maxOffset,
    blockId,
    shapeId,
    cubeCount: numCubes,
    localCoords: coords // Store for occupancy grid
  }
  
  createObject(group, body)

  // Initial Snap
  const snappedPos = getSnappedPosition(body.position, body.quaternion, refOffset)
  body.position.copy(snappedPos)
  group.position.copy(snappedPos)
}


function spawnPolyomino(position) {
  const numCubes = Math.floor(Math.random() * debugConfig.maxCells) + 1
  const cubeSize = 1.0
  // Slightly shrink collider to prevent edge-friction/jamming (0.49 instead of 0.5)
  const halfExtents = new CANNON.Vec3(0.49, 0.49, 0.49)

  // Determine Color based on cube count (same color for same size blocks)
  let color
  const paletteName = debugConfig.palette
  const colorIndex = numCubes - 1 // 1 cube → index 0, 2 cubes → index 1, etc.
  
  if (paletteName === 'Pastel' || !palettes[paletteName]) {
    // Distribute hues evenly across 8 cube sizes
    const hue = colorIndex / 8
    const saturation = 0.5
    const lightness = 0.6
    color = new THREE.Color().setHSL(hue, saturation, lightness)
  } else {
    // Pick color from palette based on cube count
    const colors = palettes[paletteName]
    const hex = colors[colorIndex % colors.length]
    color = new THREE.Color(hex)
  }

  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color, // Make it glow slightly with own color (Glass effect needs this base)
    metalness: 0.1,
    roughness: 0.5,
    flatShading: false // Ensure smooth shading
  })

  // Generate Coords based on block mode
  const coords = [{ x: 0, y: 0, z: 0 }]
  
  // 2D mode: only X and Z directions (flat polyominoes)
  // 3D mode: all 6 directions (polycubes)
  const dirs = debugConfig.blockMode === '2D' 
    ? [
        { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
        { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
      ]
    : [
        { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
        { x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 },
        { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
      ]
  
  while (coords.length < numCubes) {
    const parent = coords[Math.floor(Math.random() * coords.length)]
    const dir = dirs[Math.floor(Math.random() * dirs.length)]
    const newCoord = { x: parent.x + dir.x, y: parent.y + dir.y, z: parent.z + dir.z }
    if (!coords.some(c => c.x === newCoord.x && c.y === newCoord.y && c.z === newCoord.z)) {
      coords.push(newCoord)
    }
  }

  // Centroid
  const centroid = coords.reduce((acc, c) => ({ x: acc.x + c.x, y: acc.y + c.y, z: acc.z + c.z }), { x: 0, y: 0, z: 0 })
  centroid.x /= numCubes
  centroid.y /= numCubes
  centroid.z /= numCubes

  const group = new THREE.Group()
  group.position.copy(position)

  const mass = numCubes * 1.0
  const body = new CANNON.Body({
    mass: mass,
    position: new CANNON.Vec3(position.x, position.y, position.z),
    material: defaultMaterial,
    linearDamping: 0.01, // Low damping so gravity works!
    angularDamping: 0.1,
    fixedRotation: true
  })
  body.angularFactor.set(0, 0, 0) // Lock rotation
  body.linearFactor.set(1, 1, 1)


  // Use CSG union to merge rounded boxes - removes interior faces while keeping rounded edges
  // Make visual geometry slightly larger than grid spacing so adjacent cells overlap for proper CSG merge
  const visualSize = cubeSize * 1.05
  const roundedBoxGeometry = new RoundedBoxGeometry(visualSize, visualSize, visualSize, 4, 0.08)
  const csgEvaluator = new Evaluator()
  
  // Create brushes for each cell and union them together
  let resultBrush = null
  
  coords.forEach(c => {
    const lx = (c.x - centroid.x) * cubeSize
    const ly = (c.y - centroid.y) * cubeSize
    const lz = (c.z - centroid.z) * cubeSize

    // Physics Body
    const offset = new CANNON.Vec3(lx, ly, lz)
    body.addShape(new CANNON.Box(halfExtents), offset)

    // Create a brush for this cell
    const brush = new Brush(roundedBoxGeometry)
    brush.position.set(lx, ly, lz)
    brush.updateMatrixWorld()
    
    if (resultBrush === null) {
      resultBrush = brush
    } else {
      // Union this brush with the accumulated result
      resultBrush = csgEvaluator.evaluate(resultBrush, brush, ADDITION)
    }
  })
  
  // Create final mesh from the CSG result
  const finalGeometry = resultBrush.geometry
  finalGeometry.computeVertexNormals() // Ensure smooth normals
  
  const mesh = new THREE.Mesh(finalGeometry, material)
  mesh.castShadow = true
  mesh.receiveShadow = true
  group.add(mesh)

  // Calculate Local AABB for Clamping
  let minX = Infinity, minY = Infinity, minZ = Infinity
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity

  coords.forEach(c => {
    const localX = (c.x - centroid.x) * cubeSize
    const localY = (c.y - centroid.y) * cubeSize
    const localZ = (c.z - centroid.z) * cubeSize

    // Check extents (centers +/- half extent)
    const he = cubeSize * 0.5
    minX = Math.min(minX, localX - he)
    minY = Math.min(minY, localY - he)
    minZ = Math.min(minZ, localZ - he)
    maxX = Math.max(maxX, localX + he)
    maxY = Math.max(maxY, localY + he)
    maxZ = Math.max(maxZ, localZ + he)
  })

  const minOffset = new CANNON.Vec3(minX, minY, minZ)
  const maxOffset = new CANNON.Vec3(maxX, maxY, maxZ)

  // Restore Reference Offset (of the first cube) for Snapping
  const refC = coords[0]
  const refX = (refC.x - centroid.x) * cubeSize
  const refY = (refC.y - centroid.y) * cubeSize
  const refZ = (refC.z - centroid.z) * cubeSize
  const refOffset = new CANNON.Vec3(refX, refY, refZ)

  group.userData = { isBlock: true, body: body, refOffset: refOffset, minOffset, maxOffset }
  createObject(group, body)

  // Initial Snap
  const snappedPos = getSnappedPosition(body.position, body.quaternion, refOffset)
  body.position.copy(snappedPos)
  group.position.copy(snappedPos)
}

// Helper for Robust Snapping
function getSnappedPosition(currentPos, quaternion, refOffset) {
  // 1. Calculate World Position of the Reference Cube
  // refOffset is Vec3 (local), quaternion is CANNON.Quaternion
  const rotatedOffset = new CANNON.Vec3().copy(refOffset)
  quaternion.vmult(rotatedOffset, rotatedOffset)

  const cubeWorldPos = currentPos.vadd(rotatedOffset)

  // 2. Snap Reference Cube to nearest Grid Center (X.5)
  // Math.round(val - 0.5) + 0.5
  const snappedCubeX = Math.round(cubeWorldPos.x - 0.5) + 0.5
  const snappedCubeZ = Math.round(cubeWorldPos.z - 0.5) + 0.5

  // 3. Calculate necessary Body Position to achieve this
  const newBodyX = snappedCubeX - rotatedOffset.x
  const newBodyZ = snappedCubeZ - rotatedOffset.z

  return new CANNON.Vec3(newBodyX, currentPos.y, newBodyZ)
}

function getClampedPosition(targetPos, quaternion, minOffset, maxOffset) {
  // We need to calculate the AABB in World Space based on current rotation
  // This is tricky for arbitrary rotations. 
  // Simplified Approach: 
  // 1. Get world max/min extent by rotating checks? 
  // Or just check if the "Farthest Point" in each direction exceeds limits.
  // 4 (Wall) - approx (Size/2). 

  // Robust method: 
  // We have local minOffset/maxOffset. 
  // We want to find World Max/Min X and Z.
  // Corners of AABB:
  const corners = [
    new CANNON.Vec3(minOffset.x, minOffset.y, minOffset.z),
    new CANNON.Vec3(maxOffset.x, minOffset.y, minOffset.z),
    new CANNON.Vec3(minOffset.x, maxOffset.y, minOffset.z),
    new CANNON.Vec3(maxOffset.x, maxOffset.y, minOffset.z),
    new CANNON.Vec3(minOffset.x, minOffset.y, maxOffset.z),
    new CANNON.Vec3(maxOffset.x, minOffset.y, maxOffset.z),
    new CANNON.Vec3(minOffset.x, maxOffset.y, maxOffset.z),
    new CANNON.Vec3(maxOffset.x, maxOffset.y, maxOffset.z)
  ]

  let wMinX = Infinity, wMaxX = -Infinity
  let wMinZ = Infinity, wMaxZ = -Infinity

  corners.forEach(corner => {
    const worldCorner = new CANNON.Vec3().copy(corner)
    quaternion.vmult(worldCorner, worldCorner)
    worldCorner.vadd(targetPos, worldCorner) // Add proposed position

    wMinX = Math.min(wMinX, worldCorner.x)
    wMaxX = Math.max(wMaxX, worldCorner.x)
    wMinZ = Math.min(wMinZ, worldCorner.z)
    wMaxZ = Math.max(wMaxZ, worldCorner.z)
  })

  // Clamp Limits (PlateSize/2 = 4)
  const LIMIT = 4.0
  let clampX = 0
  let clampZ = 0

  if (wMaxX > LIMIT) clampX = LIMIT - wMaxX
  if (wMinX < -LIMIT) clampX = -LIMIT - wMinX

  if (wMaxZ > LIMIT) clampZ = LIMIT - wMaxZ
  if (wMinZ < -LIMIT) clampZ = -LIMIT - wMinZ

  return new CANNON.Vec3(targetPos.x + clampX, targetPos.y, targetPos.z + clampZ)
}

function updateUI() {
  if (selectedObject) {
    ui.controls.classList.remove('hidden')
  } else {
    ui.controls.classList.add('hidden')
  }
}

// Outline mesh for selection highlight
let outlineMesh = null

function toggleSelection(meshGroup) {
  if (selectedObject && selectedObject.mesh === meshGroup) {
    return
  }

  if (selectedObject) deselect()

  const objData = objectsToUpdate.find(o => o.mesh === meshGroup)
  if (!objData) return

  // Get the block color
  let leadColor = 0xffffff
  meshGroup.traverse(child => {
    if (child.isMesh && leadColor === 0xffffff) leadColor = child.material.color.getHex()
  })

  // Store original materials (no swap needed, just for reference)
  const meshes = []
  meshGroup.traverse(child => {
    if (child.isMesh) {
      meshes.push({
        mesh: child,
        originalMaterial: child.material
      })
    }
  })

  // Create glowing outline mesh
  const outlineColor = new THREE.Color(leadColor).multiplyScalar(1.5) // Brighter
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: outlineColor,
    side: THREE.BackSide, // Render inside faces only (creates outline effect)
    transparent: true,
    opacity: 0.8,
    depthTest: true,
  })

  // Clone the mesh group for outline
  outlineMesh = new THREE.Group()
  meshGroup.traverse(child => {
    if (child.isMesh) {
      const outlineChild = new THREE.Mesh(child.geometry.clone(), outlineMaterial)
      outlineChild.scale.setScalar(1.08) // Scale up slightly for outline thickness
      outlineChild.position.copy(child.position)
      outlineChild.rotation.copy(child.rotation)
      outlineMesh.add(outlineChild)
    }
  })
  
  outlineMesh.position.copy(meshGroup.position)
  outlineMesh.quaternion.copy(meshGroup.quaternion)
  scene.add(outlineMesh)

  selectedObject = {
    mesh: meshGroup,
    body: objData.body,
    originalMass: 1.0,
    userData: meshGroup.userData,
    targetPosition: new CANNON.Vec3().copy(objData.body.position),
    materialCache: meshes,
    outlineColor: leadColor
  }

  // Create PointLight to make block emit actual light
  if (selectionLight) {
    scene.remove(selectionLight)
  }
  selectionLight = new THREE.PointLight(leadColor, debugConfig.selectionLightIntensity, 0, 0)
  selectionLight.position.copy(meshGroup.position)
  scene.add(selectionLight)

  // WAKE UP!
  selectedObject.body.type = CANNON.Body.DYNAMIC
  selectedObject.body.mass = 1.0
  selectedObject.body.updateMassProperties()
  selectedObject.body.wakeUp() // Ensure it's ready to move

  interactionMode = 'move' // Default start mode
  if (ui.indicator) {
    ui.indicator.innerText = "✥"
    ui.indicator.classList.remove('hidden')
  }

  if (ui.indicator) {
    ui.indicator.innerText = "✥"
    ui.indicator.classList.remove('hidden')
  }

  updateUI()
  updateGhost() // Initial creation
}

function deselect() {
  if (!selectedObject) return

  // Remove selection light
  if (selectionLight) {
    scene.remove(selectionLight)
    selectionLight = null
  }

  // Remove outline mesh
  if (outlineMesh) {
    scene.remove(outlineMesh)
    outlineMesh.traverse(child => {
      if (child.isMesh) {
        child.geometry.dispose()
        child.material.dispose()
      }
    })
    outlineMesh = null
  }

  // Remove Ghost
  if (ghostObject) {
    scene.remove(ghostObject)
    ghostObject = null
  }

  // --- HARD DROP & LOCK ---
  // Snap to the lowest valid position (Ghost Position)
  const currentTarget = selectedObject.targetPosition
  const currentRot = selectedObject.body.quaternion
  // We utilize the robust floor calculation in the helper now
  const landingPos = resolveCollisionClimb(currentTarget, currentRot)

  // Teleport to Landing Spot
  selectedObject.body.position.copy(landingPos)
  selectedObject.mesh.position.copy(landingPos)
  selectedObject.body.quaternion.copy(currentRot)
  selectedObject.mesh.quaternion.copy(currentRot)

  // Physics: Lock In Place
  // LOCK IT IN PLACE! (Tetris Style)
  // Instead of waking up, we set mass to 0 so it becomes an immovable static obstacle
  selectedObject.body.mass = 0
  selectedObject.body.type = CANNON.Body.STATIC // or KINEMATIC if we want to move it later programmatically
  selectedObject.body.updateMassProperties()
  selectedObject.body.velocity.set(0, 0, 0)
  selectedObject.body.angularVelocity.set(0, 0, 0)

  // --- Register with Occupancy Grid ---
  const blockId = selectedObject.userData.blockId
  if (blockId) {
    // Calculate world positions of each cube
    const worldPositions = getBlockWorldPositions(selectedObject.body, currentRot)
    console.log('=== BLOCK LANDING ===')
    console.log('Block ID:', blockId)
    console.log('World positions:', worldPositions)
    
    // Convert to grid coords for debugging
    worldPositions.forEach((pos, i) => {
      const gridCoord = occupancyGrid.worldToGrid(pos.x, pos.y, pos.z)
      console.log(`  Cube ${i}: world(${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}) -> grid`, gridCoord)
    })
    
    occupancyGrid.registerBlock(blockId, worldPositions)
    
    // Debug: print grid stats
    const stats = occupancyGrid.getStats()
    console.log('Grid stats:', stats)
    
    // Debug: print layer 0 (bottom layer)
    console.log('=== LAYER 0 STATUS ===')
    occupancyGrid.debugPrintLayer(0)
    
    // Count filled cells in layer 0
    let filledInLayer0 = 0
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        if (occupancyGrid.getCell(x, 0, z)) {
          filledInLayer0++
        }
      }
    }
    console.log(`Layer 0: ${filledInLayer0} / ${GRID_SIZE * GRID_SIZE} cells filled`)
    
    // Check for complete layers
    const completeLayers = occupancyGrid.getCompleteLayers()
    console.log('Complete layers:', completeLayers)
    
    if (completeLayers.length > 0) {
      console.log('*** CLEARING LAYERS! ***')
      handleLayerClear(completeLayers)
    }
  }

  if (ui.indicator) ui.indicator.classList.add('hidden')

  // Clean up references
  selectedObject = null
  updateUI()
  updateGizmos()
}

/**
 * Get world positions of all cubes in a block
 * Snaps positions to grid centers for accurate occupancy tracking
 */
function getBlockWorldPositions(body, quaternion) {
  const positions = []
  const bodyPos = body.position

  for (let i = 0; i < body.shapes.length; i++) {
    const offset = body.shapeOffsets[i]
    const rotatedOffset = new CANNON.Vec3()
    quaternion.vmult(offset, rotatedOffset)
    
    // Calculate raw world position
    let worldX = bodyPos.x + rotatedOffset.x
    let worldY = bodyPos.y + rotatedOffset.y
    let worldZ = bodyPos.z + rotatedOffset.z
    
    // Snap X and Z to grid centers (X.5 in world space)
    worldX = Math.round(worldX - 0.5) + 0.5
    worldZ = Math.round(worldZ - 0.5) + 0.5
    
    // Snap Y to grid levels (first layer at Y=1.0, each layer +1.0)
    // Grid Y = floor(worldY - PLATE_HEIGHT), so worldY = gridY + PLATE_HEIGHT + 0.5
    // Snap to nearest: round(worldY - PLATE_HEIGHT - 0.5) + PLATE_HEIGHT + 0.5
    worldY = Math.round(worldY - PLATE_HEIGHT - 0.5) + PLATE_HEIGHT + 0.5
    
    positions.push({ x: worldX, y: worldY, z: worldZ })
  }

  return positions
}

/**
 * Handle layer clearing - remove cubes, split blocks, drop above
 */
function handleLayerClear(layerYs) {
  console.log('=== LAYER CLEAR START ===')
  console.log('Clearing layers:', layerYs)
  console.log('Grid before clear:')
  occupancyGrid.debugPrintLayer(0)
  
  // Get affected blocks before clearing
  const affectedBlockIds = new Set()
  for (const y of layerYs) {
    const blocksInLayer = occupancyGrid.getBlocksInLayer(y)
    blocksInLayer.forEach(id => affectedBlockIds.add(id))
  }

  // Store block info before clearing
  const blockInfoMap = new Map()
  for (const blockId of affectedBlockIds) {
    const remainingCells = occupancyGrid.getBlockCellsNotInLayers(blockId, layerYs)
    const components = occupancyGrid.findConnectedComponents(remainingCells)
    blockInfoMap.set(blockId, {
      remainingCells,
      components,
      needsSplit: components.length > 1,
      fullyCleared: remainingCells.length === 0
    })
  }

  // Clear the layers in grid
  occupancyGrid.clearLayers(layerYs)
  occupancyGrid.dropCellsAbove(layerYs)
  
  console.log('Grid after clear:')
  occupancyGrid.debugPrintLayer(0)
  console.log('Grid stats after clear:', occupancyGrid.getStats())
  console.log('=== LAYER CLEAR END ===')

  // Calculate and add score
  const score = gameManager.state ? 
    (100 * layerYs.length * (layerYs.length === 1 ? 1 : layerYs.length === 2 ? 3 : layerYs.length === 3 ? 6 : 10)) : 0
  
  if (gameManager.state) {
    gameManager.addScore(score)
    gameManager.state.linesCleared += layerYs.length
    gameManager.notifyLinesChange()
  }

  // Show feedback
  showClearFeedback(score, layerYs.length)
  animateLayerClear(layerYs)

  // Process visual updates for affected blocks
  processBlockUpdatesAfterClear(blockInfoMap, layerYs)
}

/**
 * Process visual block updates after layer clear
 */
function processBlockUpdatesAfterClear(blockInfoMap, clearedLayers) {
  const dropAmount = clearedLayers.length
  
  for (const [blockId, info] of blockInfoMap) {
    // Find the object in our list
    const objIndex = objectsToUpdate.findIndex(o => o.mesh?.userData?.blockId === blockId)
    if (objIndex === -1) continue
    
    const obj = objectsToUpdate[objIndex]
    
    if (info.fullyCleared) {
      // Remove the entire block
      scene.remove(obj.mesh)
      world.removeBody(obj.body)
      objectsToUpdate.splice(objIndex, 1)
    } else {
      // For now, just drop the block down by the number of cleared layers below it
      // A more sophisticated approach would rebuild the mesh
      const lowestCellY = Math.min(...info.remainingCells.map(c => c.y))
      const clearedBelow = clearedLayers.filter(ly => ly < lowestCellY).length
      
      if (clearedBelow > 0) {
        const dropDistance = clearedBelow
        obj.body.position.y -= dropDistance
        obj.mesh.position.y -= dropDistance
      }
    }
  }
  
  // Drop all other blocks that are above cleared layers
  const minClearedY = Math.min(...clearedLayers)
  
  for (const obj of objectsToUpdate) {
    if (!obj.mesh?.userData?.blockId) continue
    if (blockInfoMap.has(obj.mesh.userData.blockId)) continue // Already handled
    
    // Check if this block is entirely above the cleared layers
    const blockY = obj.body.position.y
    if (blockY > minClearedY + PLATE_HEIGHT + 1) {
      // Count how many cleared layers are below this block
      const clearedBelow = clearedLayers.filter(ly => ly + PLATE_HEIGHT < blockY).length
      if (clearedBelow > 0) {
        obj.body.position.y -= clearedBelow
        obj.mesh.position.y -= clearedBelow
      }
    }
  }
}


// --- GHOST SYSTEM ---
let ghostObject = null

function updateGhost() {
  if (!selectedObject) {
    if (ghostObject) {
      scene.remove(ghostObject)
      ghostObject = null
    }
    return
  }

  // 1. Create Ghost if it doesn't match selected object
  if (!ghostObject || ghostObject.userData.sourceId !== selectedObject.mesh.uuid) {
    if (ghostObject) scene.remove(ghostObject)

    // ghostObject = selectedObject.mesh.clone() // CRASHES due to circular userData (Cannon body)

    // Manual Clone
    ghostObject = new THREE.Group()
    ghostObject.position.copy(selectedObject.mesh.position)
    ghostObject.quaternion.copy(selectedObject.mesh.quaternion)
    ghostObject.scale.copy(selectedObject.mesh.scale)

    selectedObject.mesh.children.forEach(child => {
      const clone = child.clone()
      ghostObject.add(clone)
    })

    ghostObject.userData.sourceId = selectedObject.mesh.uuid
    ghostObject.userData.isGhost = true

    // Get block color from original material
    let blockColor = 0xffffff
    if (selectedObject.materialCache && selectedObject.materialCache.length > 0) {
      const originalMat = selectedObject.materialCache[0].originalMaterial
      if (originalMat && originalMat.color) {
        blockColor = originalMat.color.getHex()
      }
    }

    // Apply Ghost Material - same color as block
    const ghostMat = new THREE.MeshBasicMaterial({
      color: blockColor,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    })

    ghostObject.traverse(child => {
      if (child.isMesh) {
        child.material = ghostMat
        child.castShadow = false
        child.receiveShadow = false
      }
    })

    scene.add(ghostObject)
  }

  // 2. Calculate Landing Position
  // Start at floor (Y ~ 0.5 for unit cube)
  const currentTarget = selectedObject.targetPosition
  const currentRot = selectedObject.body.quaternion

  const baseTestPos = new CANNON.Vec3(currentTarget.x, 0.5, currentTarget.z)

  // Use our climb logic to find lowest valid spot
  // Note: resolveCollisionClimb checks for overlap and goes UP.
  // So starting at bottom and climbing up finds the landing spot.
  const landingPos = resolveCollisionClimb(baseTestPos, currentRot)

  // 3. Update Ghost Transform
  ghostObject.position.set(landingPos.x, landingPos.y, landingPos.z)
  ghostObject.quaternion.copy(selectedObject.mesh.quaternion)

  // Hide if Ghost is exactly at the same place as the block (it overlaps)
  // distanceTo check
  const dist = ghostObject.position.distanceTo(selectedObject.mesh.position)
  ghostObject.visible = (dist > 0.1)
}




// --- Interaction Listeners ---

// Mouse/Touch Raycast
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const dragPlane = new THREE.Plane()
const intersection = new THREE.Vector3()
const offset = new THREE.Vector3()
let isDragging = false
let dragStartX = 0
let dragStartY = 0
let hasMoved = false
let isTouch = false // Track input type for threshold adjustment

function getRayIntersections(clientX, clientY) {
  mouse.x = (clientX / window.innerWidth) * 2 - 1
  mouse.y = -(clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, camera)

  const intersectableMeshes = objectsToUpdate.map(o => o.mesh)
  return raycaster.intersectObjects(intersectableMeshes, true)
}

function onPointerDown(event) {
  // Check if UI was clicked
  if (event.target.closest('button') || event.target.closest('.lil-gui')) return // Handled by button/gui listeners

  let clientX, clientY
  if (event.touches) {
    // Prevent synthesized mouse events from firing after touch
    event.preventDefault()
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
    isTouch = true
  } else {
    clientX = event.clientX
    clientY = event.clientY
    isTouch = false
  }

  const intersects = getRayIntersections(clientX, clientY)

  if (intersects.length > 0) {
    let hitObject = intersects[0].object
    while (hitObject.parent && !hitObject.userData.isBlock && hitObject !== scene) {
      hitObject = hitObject.parent
    }

    if (hitObject.userData.isBlock) {
      // If clicking a different block, select it first
      if (!selectedObject || selectedObject.mesh !== hitObject) {
        toggleSelection(hitObject)
      }

      // Start Interaction (Move or Rotate) immediately - allows click+drag in one action
      isDragging = true
      dragStartX = clientX
      dragStartY = clientY
      hasMoved = false

      // Setup Drag Plane for Move Mode
      dragPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 1, 0), selectedObject.mesh.position)

      // Calculate offset (for Move Mode)
      mouse.x = (clientX / window.innerWidth) * 2 - 1
      mouse.y = -(clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
      if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
        offset.subVectors(selectedObject.mesh.position, intersection)
      }

      controls.enabled = false // Disable camera
    } else {
      deselect()
    }
  } else {
    deselect() // Clicked empty space
  }
}

function onPointerMove(event) {
  if (!isDragging || !selectedObject) return

  let clientX, clientY
  if (event.touches) {
    event.preventDefault() // Prevent scroll and synthesized mouse events
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    clientX = event.clientX
    clientY = event.clientY
  }

  // Check for movement threshold to distinguish tap from drag
  // Touch needs larger threshold due to finger jitter
  const dx = clientX - dragStartX
  const dy = clientY - dragStartY
  const tapThreshold = isTouch ? 25 : 10 // Touch fingers have more jitter than mouse
  if (!hasMoved && Math.hypot(dx, dy) > tapThreshold) {
    hasMoved = true
  }

  if (!hasMoved) return // DO NOT Move or Rotate until threshold passed

  if (interactionMode === 'move') {
    // --- MOVE MODE: Existing Drag Logic ---
    mouse.x = (clientX / window.innerWidth) * 2 - 1
    mouse.y = -(clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)

    if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
      const rawPos = new THREE.Vector3().addVectors(intersection, offset)
      const rawBodyPos = new CANNON.Vec3(rawPos.x, selectedObject.mesh.position.y, rawPos.z)

      // Robust Snap using Reference Offset
      let snappedPos = getSnappedPosition(rawBodyPos, selectedObject.body.quaternion, selectedObject.userData.refOffset)

      // Bounds Clamp
      if (selectedObject.userData.minOffset && selectedObject.userData.maxOffset) {
        snappedPos = getClampedPosition(snappedPos, selectedObject.body.quaternion, selectedObject.userData.minOffset, selectedObject.userData.maxOffset)
      }

      // Update TARGET
      // Only trigger animation if target changes (Discrete Step)
      if (!selectedObject.targetPosition.approxEquals(snappedPos, 0.01)) {
        // Trigger smooth step
        moveBlock(snappedPos.x - selectedObject.targetPosition.x, 0, snappedPos.z - selectedObject.targetPosition.z)
      }

      // We don't need to manually set targetPosition.x/z here because moveBlock does it
      // via animateBlockAction -> selectedObject.targetPosition.copy
      // and animateBlockAction starts the tween.

      boxHelper.update()
    }
  } else if (interactionMode.startsWith('rotate')) {
    // --- AXIS ROTATION MODES ---
    const SWIPE_THRESHOLD = 30

    // Rotate-Y (Green, Vertical Axis) -> Horizontal Gesture usually feels best (Spin)
    if (interactionMode === 'rotate-y' && Math.abs(dx) > SWIPE_THRESHOLD) {
      const dir = Math.sign(dx)
      rotateBlock(new CANNON.Vec3(0, 1, 0), dir * Math.PI / 2)
      dragStartX = clientX; dragStartY = clientY
    }
    // Rotate-X (Red, Left-Right Axis) -> Vertical Gesture (Tumble)
    else if (interactionMode === 'rotate-x' && Math.abs(dy) > SWIPE_THRESHOLD) {
      const dir = Math.sign(dy)
      rotateBlock(new CANNON.Vec3(1, 0, 0), dir * Math.PI / 2) // Check sign feel
      dragStartX = clientX; dragStartY = clientY
    }
    // Rotate-Z (Blue, Forward Axis) -> Horizontal Gesture? Or Vertical?
    // Let's try Horizontal (Spin dial)
    else if (interactionMode === 'rotate-z' && Math.abs(dx) > SWIPE_THRESHOLD) {
      const dir = Math.sign(dx)
      rotateBlock(new CANNON.Vec3(0, 0, 1), -dir * Math.PI / 2) // Invert for "dial" feel?
      dragStartX = clientX; dragStartY = clientY
    }
  }
}

function onPointerUp() {
  if (isDragging && !hasMoved && selectedObject) {
    // Tap Detected on Selected Object -> Toggle Mode Cycle
    // move -> rotate-x -> rotate-y -> rotate-z -> move
    if (interactionMode === 'move') interactionMode = 'rotate-x'
    else if (interactionMode === 'rotate-x') interactionMode = 'rotate-y'
    else if (interactionMode === 'rotate-y') interactionMode = 'rotate-z'
    else interactionMode = 'move'


    if (ui.indicator) {
      // Only show indicator in move mode, gizmo handles rotation feedback
      if (interactionMode === 'move') {
        ui.indicator.innerText = "✥"
        ui.indicator.classList.remove('hidden')
      } else {
        ui.indicator.classList.add('hidden')
      }
    }

    updateGizmos()

    console.log("Switched to", interactionMode)
  }
  isDragging = false
  controls.enabled = true // Re-enable camera
}

window.addEventListener('mousedown', onPointerDown)
window.addEventListener('mousemove', onPointerMove)
window.addEventListener('mouseup', onPointerUp)
window.addEventListener('touchstart', onPointerDown, { passive: false })
window.addEventListener('touchmove', onPointerMove, { passive: false })
window.addEventListener('touchend', onPointerUp)

// Mouse wheel rotation in rotate modes
window.addEventListener('wheel', (e) => {
  if (!selectedObject) return
  if (!interactionMode.startsWith('rotate')) return
  
  // Prevent camera zoom when rotating
  e.preventDefault()
  
  const dir = e.deltaY > 0 ? 1 : -1
  
  if (interactionMode === 'rotate-x') {
    rotateBlock(new CANNON.Vec3(1, 0, 0), dir * Math.PI / 2)
  } else if (interactionMode === 'rotate-y') {
    rotateBlock(new CANNON.Vec3(0, 1, 0), dir * Math.PI / 2)
  } else if (interactionMode === 'rotate-z') {
    rotateBlock(new CANNON.Vec3(0, 0, 1), dir * Math.PI / 2)
  }
}, { passive: false })


// UI Listeners
// Prevent propagation on container
ui.container.addEventListener('touchstart', e => {
  if (e.target.closest('button')) e.stopPropagation()
}, { passive: false })
ui.container.addEventListener('mousedown', e => {
  if (e.target.closest('button')) e.stopPropagation()
})

ui.btnSpawn.addEventListener('click', spawnBlock)
if (ui.btnDrop) ui.btnDrop.addEventListener('click', deselect)

ui.moveBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation()
    const key = e.target.closest('button').dataset.key
    const speed = 1.0
    switch (key) {
      case 'ArrowUp': moveBlock(0, 0, -speed); break;
      case 'ArrowDown': moveBlock(0, 0, speed); break;
      case 'ArrowLeft': moveBlock(-speed, 0, 0); break;
      case 'ArrowRight': moveBlock(speed, 0, 0); break;
    }
  })
})

if (ui.rotBtns) {
  ui.rotBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const target = e.target.closest('button')
      const axisName = target.dataset.axis
      const dir = parseInt(target.dataset.dir)
      let axis = new CANNON.Vec3(0, 1, 0)
      if (axisName === 'x') axis.set(1, 0, 0)
      if (axisName === 'z') axis.set(0, 0, 1)

      rotateBlock(axis, Math.PI / 2 * dir)
    })
  })
}

// Keyboard Fallback

function moveBlockCameraRelative(xInput, zInput) {
  if (!selectedObject) return
  const SNAP = 1.0 // Full step size

  // Get Camera Direction (Projected to XZ plane)
  const forward = new THREE.Vector3()
  camera.getWorldDirection(forward)
  forward.y = 0
  forward.normalize()

  // Get Right Vector
  const right = new THREE.Vector3()
  right.crossVectors(forward, new THREE.Vector3(0, 1, 0))

  // Determine Primary Movement Intent
  const rawMove = new THREE.Vector3()
  rawMove.addScaledVector(forward, zInput)
  rawMove.addScaledVector(right, xInput)

  // Snap rawMove to closest Cardinal Direction
  let bestAxis = new THREE.Vector3()
  let maxDot = -Infinity

  const axes = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, -1)
  ]

  if (rawMove.lengthSq() > 0.1) {
    rawMove.normalize()
    for (const axis of axes) {
      const dot = rawMove.dot(axis)
      if (dot > maxDot) {
        maxDot = dot
        bestAxis.copy(axis)
      }
    }
  } else {
    return
  }

  // Apply Camera Relative Motion
  moveBlock(bestAxis.x * SNAP, 0, bestAxis.z * SNAP)
}

// --- ANIMATION SYSTEM ---
let actionTween = null // { startPos, endPos, startRot, endRot, startTime, duration }

function animateBlockAction(targetPos, targetRot) {
  if (!selectedObject) return

  // Convert everything to THREE types for easy interpolation calculations
  const startPos = new THREE.Vector3().copy(selectedObject.mesh.position)
  const endPos = new THREE.Vector3(targetPos.x, targetPos.y, targetPos.z)

  const startRot = new THREE.Quaternion().copy(selectedObject.mesh.quaternion)
  const endRot = new THREE.Quaternion(targetRot.x, targetRot.y, targetRot.z, targetRot.w)

  actionTween = {
    startPos, endPos,
    startRot, endRot,
    startTime: performance.now(),
    duration: 350 // ms
  }

  // Also update the "Logical" target immediately so subsequent taps work relative to new state
  selectedObject.targetPosition.copy(targetPos)
  selectedObject.body.quaternion.copy(targetRot)
  selectedObject.body.position.copy(targetPos)
}

// Helper to check if a hypothetical placement overlaps with existing blocks
function isOverlapping(pos, quat, subjectBody) {
  if (!subjectBody || !subjectBody.shapes) return false

  try {
    // 1. Get all sub-shape world positions for the SUBJECT
    const subjectCenters = []
    for (let i = 0; i < subjectBody.shapes.length; i++) {
      const shapeOffset = subjectBody.shapeOffsets[i]
      const worldOffset = quat.vmult(shapeOffset)
      const worldPos = pos.vadd(worldOffset)
      subjectCenters.push(worldPos)
    }

    // 2. Compare against all other bodies
    for (const object of objectsToUpdate) {
      if (!object.body || object.body === subjectBody) continue // Skip self or invalid

      // Optimization: Quick AABB/Distance check?
      if (object.body.position.distanceTo(pos) > 10) continue // Too far

      for (let j = 0; j < object.body.shapes.length; j++) {
        const otherOffset = object.body.shapeOffsets[j]
        const otherWorldOffset = object.body.quaternion.vmult(otherOffset)
        const otherWorldPos = object.body.position.vadd(otherWorldOffset)

        // 3. Check collision between Sub-Shapes
        for (const subjPos of subjectCenters) {
          if (subjPos.distanceTo(otherWorldPos) < 0.9) { // Strict overlap only (allow touching)
            return true // Collision detected
          }
        }
      }
    }
  } catch (e) {
    console.warn("Overlap Check Error:", e)
    return false
  }
  return false
}

// Helper to calculate the Y position where the block sits on the floor (Y=0)
function calculateBaseY(body, quat) {
  let minY = Infinity
  for (let i = 0; i < body.shapes.length; i++) {
    const shapeOffset = body.shapeOffsets[i]
    // Rotate offset to World Space
    const worldOffset = quat.vmult(shapeOffset)
    if (worldOffset.y < minY) {
      minY = worldOffset.y
    }
  }
  // Debug Log
  // Plate top is at Y=0.5. 
  // Bottom of block is: BodyY + minY - 0.5.
  // We want: BodyY + minY - 0.5 = 0.5 => BodyY = 1.0 - minY.
  const proposedY = 1.0 - minY
  console.log(`CalcBaseY: minY=${minY.toFixed(2)}, ProposedY=${proposedY.toFixed(2)}`)
  return proposedY
}

function resolveCollisionClimb(targetPos, targetRot) {
  // 1. Determine Floor Alignment Y
  const floorY = calculateBaseY(selectedObject.body, targetRot)

  // Start testing at the Floor Level (or current X/Z)
  const testPos = new CANNON.Vec3(targetPos.x, floorY, targetPos.z)

  let attempts = 0
  const MAX_CLIMB = 20 // Allow high stacks

  // Check initial position first
  while (isOverlapping(testPos, targetRot, selectedObject.body) && attempts < MAX_CLIMB) {
    testPos.y += 1.0 // Move up one grid unit
    attempts++
  }

  return testPos
}

function updateActionTween() {
  if (!actionTween || !selectedObject) return

  const now = performance.now()
  let progress = (now - actionTween.startTime) / actionTween.duration
  if (progress > 1) progress = 1

  // Ease In Out Cubic
  const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

  // Interpolate Visual Mesh
  selectedObject.mesh.position.lerpVectors(actionTween.startPos, actionTween.endPos, ease)
  selectedObject.mesh.quaternion.slerpQuaternions(actionTween.startRot, actionTween.endRot, ease)

  // Sync Physics Body (Kinematic override)
  selectedObject.body.position.set(
    selectedObject.mesh.position.x,
    selectedObject.mesh.position.y,
    selectedObject.mesh.position.z
  )
  selectedObject.body.quaternion.set(
    selectedObject.mesh.quaternion.x,
    selectedObject.mesh.quaternion.y,
    selectedObject.mesh.quaternion.z,
    selectedObject.mesh.quaternion.w
  )

  if (progress === 1) {
    actionTween = null
  }
}


function moveBlock(x, y, z) {
  if (!selectedObject) return
  // Use current TARGET as base, not current position (to avoid lag accumulation)
  const basePos = selectedObject.targetPosition
  const newPos = new CANNON.Vec3(basePos.x + x, basePos.y + y, basePos.z + z)

  if (selectedObject.userData.minOffset && selectedObject.userData.maxOffset) {
    const clamped = getClampedPosition(newPos, selectedObject.body.quaternion, selectedObject.userData.minOffset, selectedObject.userData.maxOffset)
    newPos.copy(clamped)
  }

  // Resolve Collisions (Auto-Stack)
  const stackedPos = resolveCollisionClimb(newPos, selectedObject.body.quaternion)

  animateBlockAction(stackedPos, selectedObject.body.quaternion)
}

// Helper to snap quaternion to nearest 90-degree increments
function snapQuaternion(q) {
  const euler = new THREE.Euler().setFromQuaternion(q)
  const snap = (angle) => Math.round(angle / (Math.PI / 2)) * (Math.PI / 2)
  euler.x = snap(euler.x)
  euler.y = snap(euler.y)
  euler.z = snap(euler.z)
  return new CANNON.Quaternion().setFromEuler(euler.x, euler.y, euler.z)
}

function rotateBlock(axis, angle) {
  if (!selectedObject) return

  const q = new CANNON.Quaternion()
  q.setFromAxisAngle(axis, angle)

  // Snap base rotation first to fix any physics drift
  // Rotate in WORLD SPACE (q * current) to match World Gizmos
  let newRot = q.mult(selectedObject.body.quaternion)

  // FIX: Snap to nearest 90 degrees to prevent "diagonal" drift from physics
  // Convert CANNON Quat to THREE Quat for easier Euler conversion if needed
  // Or just use my helper above which uses THREE inside.
  const tQ = new THREE.Quaternion(newRot.x, newRot.y, newRot.z, newRot.w)
  const euler = new THREE.Euler().setFromQuaternion(tQ)

  // Snap Euler angles
  euler.x = Math.round(euler.x / (Math.PI / 2)) * (Math.PI / 2)
  euler.y = Math.round(euler.y / (Math.PI / 2)) * (Math.PI / 2)
  euler.z = Math.round(euler.z / (Math.PI / 2)) * (Math.PI / 2)

  const finalTQ = new THREE.Quaternion().setFromEuler(euler)
  newRot = new CANNON.Quaternion(finalTQ.x, finalTQ.y, finalTQ.z, finalTQ.w)

  // Calculate Position Compensation (Pivot around center)
  // 1. Determine new snapped position for this rotation
  const idealPos = selectedObject.targetPosition.clone() // Start where we are
  let snappedPos = getSnappedPosition(idealPos, newRot, selectedObject.userData.refOffset)

  // 2. Clamp
  if (selectedObject.userData.minOffset) {
    snappedPos = getClampedPosition(snappedPos, newRot, selectedObject.userData.minOffset, selectedObject.userData.maxOffset)
  }

  // Resolve Collisions (Auto-Stack)
  const stackedPos = resolveCollisionClimb(snappedPos, newRot)

  animateBlockAction(stackedPos, newRot)
}

// Keyboard Fallback
window.addEventListener('keydown', (e) => {
  if (!selectedObject) return
  const speed = 1.0 // This effectively becomes grid units if normalized? No, world units.
  // Snap will handle grid alignment.

  switch (e.key) {
    // WASD -> Move Relative to Camera
    case 'w': moveBlockCameraRelative(0, speed); break;  // Forward
    case 's': moveBlockCameraRelative(0, -speed); break; // Backward
    case 'a': moveBlockCameraRelative(-speed, 0); break; // Left
    case 'd': moveBlockCameraRelative(speed, 0); break;  // Right

    // Arrows -> Rotate
    case 'ArrowUp': rotateBlock(new CANNON.Vec3(1, 0, 0), -Math.PI / 2); break;
    case 'ArrowDown': rotateBlock(new CANNON.Vec3(1, 0, 0), Math.PI / 2); break;
    case 'ArrowLeft': rotateBlock(new CANNON.Vec3(0, 1, 0), Math.PI / 2); break;
    case 'ArrowRight': rotateBlock(new CANNON.Vec3(0, 1, 0), -Math.PI / 2); break;

    case 'q': rotateBlock(new CANNON.Vec3(0, 0, 1), Math.PI / 2); break;
    case 'e': rotateBlock(new CANNON.Vec3(0, 0, 1), -Math.PI / 2); break;

    case 'Enter': deselect(); break;
    case 'Escape': deselect(); break;
  }
})




// --- Game Loop ---
const clock = new THREE.Clock()
let oldElapsedTime = 0

function animate() {
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - oldElapsedTime
  oldElapsedTime = elapsedTime

  // Update Physics
  world.step(TIME_STEP, deltaTime, 3)

  // Sync Objects & Stabilize
  for (const object of objectsToUpdate) {
    if (selectedObject && object.body === selectedObject.body) {
      // Manual Slide Interpolation for Selected Object
      object.body.velocity.set(0, 0, 0)
      object.body.angularVelocity.set(0, 0, 0)

      // Animation handling
      if (actionTween) {
        updateActionTween()
      } else {
        // Idle State: Sync visual to physics/target
        // No lerp needed if we are discrete stepping, but good for drift correction 
        // if physics moves it (e.g. falling).

        // Actually, let's keep a very stiff lerp for stability, or just copy?
        // If we are "Move Mode", we only move via Tweens now.
        // But if we drop it, it falls.

        // Sync Mesh to Body (Physics is Truth when no tween)
        object.mesh.position.copy(object.body.position)
        object.mesh.quaternion.copy(object.body.quaternion)
      }
      // Y is handled by physics (gravity)

      // Update Mode Indicator Position
      if (ui.indicator) {
        const pos = object.mesh.position.clone()
        pos.y += 1.5 // Float above
        pos.project(camera)

        const x = (pos.x * .5 + .5) * window.innerWidth
        const y = (-(pos.y * .5) + .5) * window.innerHeight

        ui.indicator.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`
      }

      // Update selection light position to follow block
      if (selectionLight) {
        selectionLight.position.copy(object.mesh.position)
      }

      // Update outline mesh to follow block
      if (outlineMesh) {
        outlineMesh.position.copy(object.mesh.position)
        outlineMesh.quaternion.copy(object.mesh.quaternion)
      }

      updateGizmos(deltaTime) // Keep gizmo attached and animate
      try {
        updateGhost()  // Keep ghost updated
      } catch (e) {
        console.error("Ghost Error:", e)
      }

    } else {
      // STABILIZER for Resting Blocks
      // If block is moving slowly AND vertical velocity is low (grounded), snap it/drift it.
      const speed = object.body.velocity.length()
      const vY = Math.abs(object.body.velocity.y)

      if (speed < 0.5 && vY < 0.1 && object.body.mass > 0) {
        // Check if we have refOffset
        if (object.mesh.userData && object.mesh.userData.refOffset) {
          const snapped = getSnappedPosition(object.body.position, object.body.quaternion, object.mesh.userData.refOffset)

          // Gently drift to snap (Micro-correction)
          // Correct X/Z only
          const correctionFactor = 0.1
          object.body.position.x += (snapped.x - object.body.position.x) * correctionFactor
          object.body.position.z += (snapped.z - object.body.position.z) * correctionFactor

          // Kill horizontal drift velocity
          object.body.velocity.x *= 0.5
          object.body.velocity.z *= 0.5
        }
      }
    }

    object.mesh.position.copy(object.body.position)
    object.mesh.quaternion.copy(object.body.quaternion)
  }

  // Update Visuals relative to moving objects
  if (selectedObject) {
    boxHelper.update()
  }

  // Dynamic camera auto-zoom
  updateDynamicCamera()

  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// Initialize game system
initGame()

animate()
