import './style.css'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import GUI from 'lil-gui'

// --- Configuration ---
const TIME_STEP = 1 / 60

CANNON.Vec3.prototype.approxEquals = function (v, epsilon) {
  return this.distanceTo(v) < epsilon
}

const debugConfig = {
  opacity: 0.7,
  roughness: 0.1,
  metalness: 0.1,
  emissiveIntensity: 0.5,
  transmission: 1,
  thickness: 1,
  depthWrite: true,
  envMapIntensity: 1,
  maxCells: 8,
  palette: 'Pastel',
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
  'Mineral': [0x7D8E95, 0xA9B3B9, 0xC7CED1, 0xEBEBEB, 0x586972], // Soft Greys/Blues
  'Botanical': [0x5F7161, 0x6D8B74, 0x8F9779, 0xEFEAD8, 0xD0C9C0], // Sage/Fern/Beige
  'Clay': [0x8D7B68, 0xA4907C, 0xC8B6A6, 0xF1DEC9, 0xCFB997], // Terracotta/Sand
  'Oceanic': [0x4682B4, 0x5F9EA0, 0x87CEEB, 0xB0E0E6, 0xADD8E6], // Steel/Sky Blues
  'Autumn': [0xCD853F, 0xDEB887, 0xF4A460, 0xD2691E, 0x8B4513], // Leafy browns/oranges (Natural)
  'Berry': [0xBC8F8F, 0xDDA0DD, 0xDB7093, 0xFFB6C1, 0xC71585], // Muted Pinks/Purples
  'Slate': [0x708090, 0x778899, 0xB0C4DE, 0xE6E6FA, 0xD3D3D3], // Blue-Greys
  'Savanna': [0xE9967A, 0xF08080, 0xFFA07A, 0xFFDAB9, 0xFFE4B5], // Warm dusty pinks/peaches
  'Midnight': [0x2F4F4F, 0x483D8B, 0x4682B4, 0x5D3FD3, 0x7B68EE], // Darker but rich (not black)
}

const gui = new GUI()
gui.add(debugConfig, 'palette', Object.keys(palettes)).name('Color Palette').onChange(updateAllBlockColors)
gui.add(debugConfig, 'maxCells', 1, 8, 1).name('Max Block Size')
gui.add(debugConfig, 'saveToClipboard').name('💾 Save Config')

gui.add(debugConfig, 'opacity', 0, 1).onChange(updateSelectedMaterial)

// Helper to refresh all block colors
function updateAllBlockColors() {
  const paletteName = debugConfig.palette
  objectsToUpdate.forEach(obj => {
    if (!obj.mesh || !obj.mesh.userData || !obj.mesh.userData.isBlock) return

    // Pick a new color for this block
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
gui.add(debugConfig, 'roughness', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'metalness', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'emissiveIntensity', 0, 5).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'transmission', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'thickness', 0, 5).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'depthWrite').onChange(updateSelectedMaterial)
gui.add(debugConfig, 'depthWrite').onChange(updateSelectedMaterial)
gui.add(debugConfig, 'envMapIntensity', 0, 3).onChange((v) => { scene.environmentIntensity = v })
gui.add(debugConfig, 'maxCells', 1, 8, 1).name('Max Block Size')
gui.add(debugConfig, 'envMapIntensity', 0, 3).onChange((v) => { scene.environmentIntensity = v })

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
renderer.toneMappingExposure = 0.6
document.body.appendChild(renderer.domElement)

// --- Professional Lighting & Environment ---

// 1. Environment Map (Vital for Glass!)
const pmremGenerator = new THREE.PMREMGenerator(renderer)
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture
scene.environmentIntensity = 1.0

// 2. Ambient (Subtle Fill)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

// 3. Key Light (Main Warm Directional)
const keyLight = new THREE.DirectionalLight(0xfff0dd, 1.0)
keyLight.position.set(5, 10, 5)
keyLight.castShadow = true
keyLight.shadow.mapSize.width = 2048
keyLight.shadow.mapSize.height = 2048
keyLight.shadow.radius = 2 // Soft shadows
keyLight.shadow.camera.near = 0.5
keyLight.shadow.camera.far = 50
keyLight.shadow.camera.left = -10
keyLight.shadow.camera.right = 10
keyLight.shadow.camera.top = 10
keyLight.shadow.camera.bottom = -10
scene.add(keyLight)

// 4. Fill Light (Cooler, softer, opposite side)
const fillLight = new THREE.DirectionalLight(0xddeeff, 0.5)
fillLight.position.set(-5, 8, -5)
fillLight.castShadow = false
scene.add(fillLight)

// 5. Rim Light (Backlight to pop edges)
// 5. Rim Light (Backlight to pop edges)
const rimLight = new THREE.SpotLight(0xffffff, 1.0)
rimLight.position.set(0, 5, -10)
rimLight.lookAt(0, 0, 0)
scene.add(rimLight)

// --- Light Debug Controls ---
const lightConfig = {
  exposure: 0.244,
  keyIntensity: 1.0,
  fillIntensity: 0.5,
  rimIntensity: 1.0,
  ambientIntensity: 0.2
}
const lightFolder = gui.addFolder('Lighting')
lightFolder.add(lightConfig, 'exposure', 0, 2).onChange((v) => { renderer.toneMappingExposure = v })
lightFolder.add(lightConfig, 'keyIntensity', 0, 5).onChange((v) => { keyLight.intensity = v })
lightFolder.add(lightConfig, 'fillIntensity', 0, 5).onChange((v) => { fillLight.intensity = v })
lightFolder.add(lightConfig, 'rimIntensity', 0, 5).onChange((v) => { rimLight.intensity = v })
lightFolder.add(lightConfig, 'ambientIntensity', 0, 2).onChange((v) => { ambientLight.intensity = v })

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
let interactionMode = 'move' // 'move' or 'rotate'
let blockCount = 0;

// --- UI Elements ---
const ui = {
  container: document.getElementById('ui-container'),
  hint: document.getElementById('controls-hint'),
  controls: document.getElementById('selected-controls'),
  btnSpawn: document.getElementById('btn-spawn'),
  btnDrop: document.getElementById('btn-drop'),
  moveBtns: document.querySelectorAll('.btn-move'),
  rotBtns: document.querySelectorAll('.btn-rot'),
  score: document.getElementById('score-display'),
  indicator: document.getElementById('mode-indicator'),
}

// Visual Helpers
const boxHelper = new THREE.BoxHelper(new THREE.Object3D(), 0xffff00)
scene.add(boxHelper)
boxHelper.visible = false

// Rotation Gizmos Group
const gizmoGroup = new THREE.Group()
scene.add(gizmoGroup)

function createRotationGizmo(axis, color, radius = 1.2) {
  const group = new THREE.Group()

  // 1. Axis Line (Infinite-ish or just long enough?)
  // Let's make it go through the block
  const lineGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3().copy(axis).multiplyScalar(-3),
    new THREE.Vector3().copy(axis).multiplyScalar(3)
  ])
  const lineMat = new THREE.LineBasicMaterial({ color: color, depthTest: false, transparent: true, opacity: 0.5 })
  const line = new THREE.Line(lineGeo, lineMat)
  group.add(line)

  // 2. Curved Arrow (Torus Segment)
  // We need to orient a Torus to match the rotation plane (perpendicular to axis)
  const torusRadius = radius
  const tubeRadius = 0.05
  const arc = Math.PI * 1.5 // 270 degrees arc
  const torusGeo = new THREE.TorusGeometry(torusRadius, tubeRadius, 8, 32, arc)
  const torusMat = new THREE.MeshBasicMaterial({ color: color, depthTest: false, toneMapped: false }) // Emissive-ish
  const torus = new THREE.Mesh(torusGeo, torusMat)

  // Rotate Torus to align with Axis
  // Torus default is in XY plane (Z-axis is normal). 
  // If axis is X (1,0,0) -> Rotate 90 around Y
  // If axis is Y (0,1,0) -> Rotate 90 around X
  // If axis is Z (0,0,1) -> Default

  if (axis.x === 1) torus.rotation.y = Math.PI / 2
  else if (axis.y === 1) torus.rotation.x = Math.PI / 2

  group.add(torus)

  // 3. Arrow Head (Cone)
  const coneGeo = new THREE.ConeGeometry(0.15, 0.4, 16)
  const coneMat = new THREE.MeshBasicMaterial({ color: color, depthTest: false, toneMapped: false })
  const cone = new THREE.Mesh(coneGeo, coneMat)

  // Position cone at end of arc
  // Math is tricky based on orientation, simplified:
  // Just hardcode for X/Y/Z variants or generic math
  // For now, let's just make 3 distinct helper functions or config objects to keep it simple and robust
  // Actually, generic math:
  // Point on circle in plane perpendicular to `axis`

  // Let's keep it simple with explicit gizmo creation:
  return { group, line, torus, cone }
}

// Pre-build the 3 gizmos
const gizmoX = createGizmo('x', 0xff0000)
const gizmoY = createGizmo('y', 0x00ff00)
const gizmoZ = createGizmo('z', 0x0088ff)
gizmoGroup.add(gizmoX)
gizmoGroup.add(gizmoY)
gizmoGroup.add(gizmoZ)
gizmoGroup.visible = false

function createGizmo(type, colorHex) {
  const wrapper = new THREE.Group()
  const color = new THREE.Color(colorHex)

  // Axis Line
  const pts = []
  if (type === 'x') pts.push(new THREE.Vector3(-3, 0, 0), new THREE.Vector3(3, 0, 0))
  if (type === 'y') pts.push(new THREE.Vector3(0, -3, 0), new THREE.Vector3(0, 3, 0))
  if (type === 'z') pts.push(new THREE.Vector3(0, 0, -3), new THREE.Vector3(0, 0, 3))

  const line = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    new THREE.LineBasicMaterial({ color: color, depthTest: false, transparent: true, opacity: 0.6 })
  )
  wrapper.add(line)

  // Spin Ring (Torus)
  const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.05, 8, 48, Math.PI * 1.5),
    new THREE.MeshBasicMaterial({ color: color, depthTest: false, toneMapped: false })
  )
  if (type === 'x') torus.rotation.y = Math.PI / 2
  if (type === 'y') torus.rotation.x = Math.PI / 2
  // Z is default
  wrapper.add(torus)

  // Arrow Tip
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.15, 0.3, 12),
    new THREE.MeshBasicMaterial({ color: color, depthTest: false, toneMapped: false })
  )

  // Position the tip at the end of the arc
  // Arc is 1.5 PI (270 deg). Starts at right (0) goes CCW.
  // End is at 270 deg = -90 deg = Bottom.
  // We need to match the torus rotation.

  // Manual positioning is safer for clarity:
  if (type === 'x') {
    // Ring in YZ plane. 
    // 0 angle is +X (local). Wait torus in YZ plane means 0 is... ?
    // Torus default (XY): starts at (R,0,0). Arc 270 deg -> (0, -R, 0).
    // Rotated Y=90: X became Z. Y stayed Y.
    // It's confusing. Let's just place it visually.

    // Let's assume simpler: just static meshes hardcoded.
    cone.position.set(0, -1.5, 0) // Bottom of ring
    cone.rotation.z = Math.PI // Pointing down/left tangent
    cone.rotation.x = -Math.PI / 2 // Align with trace
  }
  if (type === 'y') {
    // Ring in XZ plane (Rot X=90).
    // Default XY -> RotX -> XZ.
    // Start (R,0,0) -> End (0,-R,0) -> (0,0,R) in XZ?
    cone.position.set(0, 0, 1.5)
    cone.rotation.x = Math.PI / 2
  }
  if (type === 'z') {
    // Ring in XY plane.
    cone.position.set(0, -1.5, 0)
    cone.rotation.z = Math.PI
  }

  wrapper.add(cone)
  return wrapper
}

function updateGizmos() {
  if (!selectedObject) {
    gizmoGroup.visible = false
    return
  }

  gizmoGroup.position.copy(selectedObject.mesh.position)
  gizmoGroup.visible = true

  // Show only active axis
  gizmoX.visible = (interactionMode === 'rotate-x')
  gizmoY.visible = (interactionMode === 'rotate-y')
  gizmoZ.visible = (interactionMode === 'rotate-z')

  // If just 'move', hide all? or user wanted move separate.
  if (interactionMode === 'move') gizmoGroup.visible = false
}

// --- Functions ---

function spawnBlock() {
  spawnPolyomino(new THREE.Vector3(0.5, 10, 0.5)) // Center of Grid Cell
  blockCount++
  if (ui.score) ui.score.innerText = `Blocks: ${blockCount}`
}


function spawnPolyomino(position) {
  const numCubes = Math.floor(Math.random() * debugConfig.maxCells) + 1
  const cubeSize = 1.0
  // Slightly shrink collider to prevent edge-friction/jamming (0.49 instead of 0.5)
  const halfExtents = new CANNON.Vec3(0.49, 0.49, 0.49)

  // Determine Color
  let color
  const paletteName = debugConfig.palette
  if (paletteName === 'Pastel' || !palettes[paletteName]) {
    // Existing Natural HSL Logic
    const hue = Math.random()
    const saturation = 0.4 + Math.random() * 0.2 // 40-60%
    const lightness = 0.5 + Math.random() * 0.2  // 50-70%
    color = new THREE.Color().setHSL(hue, saturation, lightness)
  } else {
    // Pick random from preset
    const colors = palettes[paletteName]
    const hex = colors[Math.floor(Math.random() * colors.length)]
    color = new THREE.Color(hex)
  }

  const material = new THREE.MeshStandardMaterial({
    color: color,
    emissive: color, // Make it glow slightly with own color (Glass effect needs this base)
    metalness: 0.1,
    roughness: 0.5,
    flatShading: false // Ensure smooth shading
  })

  // Generate Coords
  const coords = [{ x: 0, y: 0, z: 0 }]
  while (coords.length < numCubes) {
    const parent = coords[Math.floor(Math.random() * coords.length)]
    const dirs = [
      { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 },
      { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
    ]
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


  // Create Individual Cube Geometries (Voxel Look)
  const geometry = new RoundedBoxGeometry(cubeSize, cubeSize, cubeSize, 4, 0.05)
  //const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize) // Fallback if rounded too slow

  coords.forEach(c => {
    const lx = (c.x - centroid.x) * cubeSize
    const ly = (c.y - centroid.y) * cubeSize
    const lz = (c.z - centroid.z) * cubeSize

    // Physics Body
    const offset = new CANNON.Vec3(lx, ly, lz)
    body.addShape(new CANNON.Box(halfExtents), offset)

    // Visual Mesh
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(lx, ly, lz)
    mesh.castShadow = true
    mesh.receiveShadow = true

    // Slight random rotation for "imperfect" organic look? No, keep aligned for stacking.

    group.add(mesh)
  })

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
    ui.hint.classList.add('hidden')
    ui.controls.classList.remove('hidden')
  } else {
    ui.hint.classList.remove('hidden')
    ui.controls.classList.add('hidden')
  }
}

function toggleSelection(meshGroup) {
  if (selectedObject && selectedObject.mesh === meshGroup) {
    return
  }

  if (selectedObject) deselect()

  const objData = objectsToUpdate.find(o => o.mesh === meshGroup)
  if (!objData) return

  // Store original material & Swap to Glass
  const meshes = []

  // Create ONE glass material for the whole group (since they are one object logically)
  // We grab the color from the first child to define the tint
  let leadColor = 0xffffff
  meshGroup.traverse(child => {
    if (child.isMesh && leadColor === 0xffffff) leadColor = child.material.color.getHex()
  })

  // Glass Material
  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: leadColor,
    emissive: leadColor,
    emissiveIntensity: debugConfig.emissiveIntensity,
    metalness: debugConfig.metalness,
    roughness: debugConfig.roughness,
    transmission: debugConfig.transmission, // Glass!
    thickness: debugConfig.thickness, // Volume
    transparent: true,
    opacity: debugConfig.opacity, // Transmission handles the see-through
    depthWrite: debugConfig.depthWrite,
    side: THREE.DoubleSide, // Render back faces for "volume" feel
    attenuationColor: leadColor, // Absorb color as light travels through
    attenuationDistance: 2.0 // Distance for color absorption (tuning needed)
  })

  meshGroup.traverse(child => {
    if (child.isMesh) {
      meshes.push({
        mesh: child,
        originalMaterial: child.material // Store the whole material instance
      })
      child.material = glassMaterial
      child.castShadow = true // Natural shadows requested
      child.receiveShadow = true
    }
  })

  selectedObject = {
    mesh: meshGroup,
    body: objData.body,
    originalMass: 1.0, // Always 1.0 for active
    userData: meshGroup.userData,
    targetPosition: new CANNON.Vec3().copy(objData.body.position),
    materialCache: meshes
  }

  // WAKE UP!
  selectedObject.body.type = CANNON.Body.DYNAMIC
  selectedObject.body.mass = 1.0
  selectedObject.body.updateMassProperties()
  selectedObject.body.wakeUp() // Ensure it's ready to move

  interactionMode = 'move' // Default start mode
  if (ui.hint) ui.hint.innerText = `Mode: MOVE`
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

  // Restore Original Material
  if (selectedObject.materialCache) {
    selectedObject.materialCache.forEach(data => {
      data.mesh.material = data.originalMaterial
      data.mesh.castShadow = true
      data.mesh.receiveShadow = true
    })
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

  if (ui.indicator) ui.indicator.classList.add('hidden')

  // Clean up references
  selectedObject = null
  updateUI()
  updateGizmos()
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

    // Apply Ghost Material
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      depthWrite: false, // No self-occlusion weirdness?
      // wireframe: true // maybe too noisy? Let's try separate visual style.
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
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    clientX = event.clientX
    clientY = event.clientY
  }

  const intersects = getRayIntersections(clientX, clientY)

  if (intersects.length > 0) {
    let hitObject = intersects[0].object
    while (hitObject.parent && !hitObject.userData.isBlock && hitObject !== scene) {
      hitObject = hitObject.parent
    }

    if (hitObject.userData.isBlock) {
      if (selectedObject && selectedObject.mesh === hitObject) {
        // Start Interaction (Move or Rotate)
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
        toggleSelection(hitObject)
      }
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
    clientX = event.touches[0].clientX
    clientY = event.touches[0].clientY
  } else {
    clientX = event.clientX
    clientY = event.clientY
  }

  // Check for movement threshold to distinguish tap from drag
  const dx = clientX - dragStartX
  const dy = clientY - dragStartY
  if (!hasMoved && Math.hypot(dx, dy) > 10) { // Increased threshold to 10px
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

    // UX Feedback
    if (ui.hint) {
      let label = interactionMode.toUpperCase()
      if (interactionMode === 'rotate-x') label = 'ROTATE X (Red)'
      if (interactionMode === 'rotate-y') label = 'ROTATE Y (Green)'
      if (interactionMode === 'rotate-z') label = 'ROTATE Z (Blue)'
      ui.hint.innerText = `Mode: ${label}`
    }

    if (ui.indicator) {
      if (interactionMode === 'move') ui.indicator.innerText = "✥"
      if (interactionMode === 'rotate-x') ui.indicator.innerText = "↻"
      if (interactionMode === 'rotate-y') ui.indicator.innerText = "↻"
      if (interactionMode === 'rotate-z') ui.indicator.innerText = "↻"
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


// UI Listeners
// Prevent propagation on container
ui.container.addEventListener('touchstart', e => {
  if (e.target.closest('button')) e.stopPropagation()
}, { passive: false })
ui.container.addEventListener('mousedown', e => {
  if (e.target.closest('button')) e.stopPropagation()
})

ui.btnSpawn.addEventListener('click', spawnBlock)
ui.btnDrop.addEventListener('click', deselect)

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

      updateGizmos() // Keep gizmo attached
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

  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}


window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()
