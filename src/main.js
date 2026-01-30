import './style.css'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
import GUI from 'lil-gui'

// --- Configuration ---
const TIME_STEP = 1 / 60

const debugConfig = {
  opacity: 0.7,
  roughness: 0.1,
  metalness: 0.1,
  emissiveIntensity: 0.5,
  transmission: 1.0,
  thickness: 1.0,
  depthWrite: true,
  envMapIntensity: 1.0
}

const gui = new GUI()
gui.add(debugConfig, 'opacity', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'roughness', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'metalness', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'emissiveIntensity', 0, 5).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'transmission', 0, 1).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'thickness', 0, 5).onChange(updateSelectedMaterial)
gui.add(debugConfig, 'depthWrite').onChange(updateSelectedMaterial)
gui.add(debugConfig, 'depthWrite').onChange(updateSelectedMaterial)
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
  exposure: 0.6,
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
world.gravity.set(0, -9.82, 0)
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


// --- Functions ---

function spawnBlock() {
  spawnPolyomino(new THREE.Vector3(0.5, 10, 0.5)) // Center of Grid Cell
  blockCount++
  if (ui.score) ui.score.innerText = `Blocks: ${blockCount}`
}


function spawnPolyomino(position) {
  const numCubes = Math.floor(Math.random() * 8) + 1
  const cubeSize = 1.0
  // Slightly shrink collider to prevent edge-friction/jamming (0.49 instead of 0.5)
  const halfExtents = new CANNON.Vec3(0.49, 0.49, 0.49)

  // Natural Colors (HSL restricted)
  const hue = Math.random()
  const saturation = 0.4 + Math.random() * 0.2 // 40-60%
  const lightness = 0.4 + Math.random() * 0.2 // 40-60%
  const color = new THREE.Color().setHSL(hue, saturation, lightness)

  const material = new THREE.MeshStandardMaterial({
    color: color,
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
    originalMass: objData.body.mass,
    userData: meshGroup.userData,
    targetPosition: new CANNON.Vec3().copy(objData.body.position),
    materialCache: meshes
  }

  interactionMode = 'move' // Default start mode
  if (ui.hint) ui.hint.innerText = `Mode: MOVE`
  if (ui.indicator) {
    ui.indicator.innerText = "✥ MOVE"
    ui.indicator.classList.remove('hidden')
  }

  updateUI()
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

  // boxHelper.visible = false

  // Physics: Make Dynamic again (already dynamic, but wake up)
  selectedObject.body.wakeUp()

  if (ui.indicator) ui.indicator.classList.add('hidden')

  selectedObject = null
  updateUI()
}

function moveBlock(x, y, z) {
  if (!selectedObject) return
  selectedObject.body.position.x += x
  selectedObject.body.position.y += y
  selectedObject.body.position.z += z
}

function rotateBlock(axis, angle) {
  if (!selectedObject) return
  const q = new CANNON.Quaternion()
  q.setFromAxisAngle(axis, angle)
  selectedObject.body.quaternion = q.mult(selectedObject.body.quaternion)

  // Re-snap Position because rotating around centroid might misalign the grid
  const snappedPos = getSnappedPosition(selectedObject.body.position, selectedObject.body.quaternion, selectedObject.userData.refOffset)
  selectedObject.body.position.copy(snappedPos)
  if (selectedObject.targetPosition) selectedObject.targetPosition.copy(snappedPos)
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
      selectedObject.targetPosition.x = snappedPos.x
      selectedObject.targetPosition.z = snappedPos.z

      boxHelper.update()
    }
  } else if (interactionMode === 'rotate') {
    // --- ROTATE MODE: Swipe Logic ---
    const SWIPE_THRESHOLD = 30

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      // Horizontal Swipe -> Y Axis Rotation
      const dir = Math.sign(dx)
      rotateBlock(new CANNON.Vec3(0, 1, 0), dir * Math.PI / 2)
      // Reset drag start to allow multiple steps or debounce
      dragStartX = clientX
      dragStartY = clientY
    } else if (Math.abs(dy) > SWIPE_THRESHOLD) {
      // Vertical Swipe -> X Axis Rotation (Tumble forward/back)
      const dir = Math.sign(dy)
      rotateBlock(new CANNON.Vec3(1, 0, 0), dir * Math.PI / 2)
      dragStartX = clientX
      dragStartY = clientY
    }
  }
}

function onPointerUp() {
  if (isDragging && !hasMoved && selectedObject) {
    // Tap Detected on Selected Object -> Toggle Mode
    interactionMode = interactionMode === 'move' ? 'rotate' : 'move'

    // UX Feedback
    if (ui.hint) ui.hint.innerText = `Mode: ${interactionMode.toUpperCase()}`
    if (ui.indicator) {
      ui.indicator.innerText = interactionMode === 'move' ? "✥ MOVE" : "↻ ROTATE"
    }

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

  // Apply Input to Target
  // Use current targetPosition if available, else body position
  const startX = selectedObject.targetPosition ? selectedObject.targetPosition.x : selectedObject.body.position.x
  const startZ = selectedObject.targetPosition ? selectedObject.targetPosition.z : selectedObject.body.position.z

  const tentativePos = new CANNON.Vec3(
    startX + bestAxis.x * SNAP,
    selectedObject.body.position.y,
    startZ + bestAxis.z * SNAP
  )

  // Robust Snap this tentative position
  let snappedPos = getSnappedPosition(tentativePos, selectedObject.body.quaternion, selectedObject.userData.refOffset)

  // Bounds Clamp
  if (selectedObject.userData.minOffset && selectedObject.userData.maxOffset) {
    snappedPos = getClampedPosition(snappedPos, selectedObject.body.quaternion, selectedObject.userData.minOffset, selectedObject.userData.maxOffset)
  }

  // Init target if needed (should be set on selection but safety check)
  if (!selectedObject.targetPosition) selectedObject.targetPosition = new CANNON.Vec3().copy(selectedObject.body.position)

  selectedObject.targetPosition.x = snappedPos.x
  selectedObject.targetPosition.z = snappedPos.z
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

      // Move visual mesh smoothly to target
      object.mesh.position.lerp(selectedObject.targetPosition, 0.2)
      object.mesh.quaternion.slerp(object.body.quaternion, 0.2) // smooth rotation

      // Sync Body to Mesh (Kinematic-like control)
      // Actually we want body to be the source of truth for physics, but here we drive it manually.
      // So we set body to match strict snap, while mesh lerps for visual.
      // object.body.position.copy(selectedObject.targetPosition) // Don't do this, physics needs to simulate?
      // No, we are overriding physics for the selected object (gravity only on Y?)
      // We decided earlier: Gravity only on Y. X/Z manually controlled.
      object.body.position.x = selectedObject.targetPosition.x
      object.body.position.z = selectedObject.targetPosition.z
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
