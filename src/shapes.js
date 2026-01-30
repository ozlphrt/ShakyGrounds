/**
 * Predefined Shape Library
 * 
 * All shapes are defined as arrays of coordinate offsets from a reference point.
 * Coordinates use grid units where 1 unit = 1 cube.
 * 
 * 2D shapes (polyominoes): y is always 0
 * 3D shapes (polycubes): y can vary
 */

// === 2D POLYOMINOES ===

// Monomino (1 cube)
export const MONO = [
  { x: 0, y: 0, z: 0 }
]

// Domino (2 cubes)
export const I2 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 }
]

// Triominoes (3 cubes)
export const I3 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 }
]

export const L3 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 }
]

// Tetrominoes (4 cubes) - Classic Tetris pieces
export const I4 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 3, y: 0, z: 0 }
]

export const O = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 }
]

export const T = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 }
]

export const L = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 2, y: 0, z: 1 }
]

export const J = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 }
]

export const S = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 },
  { x: 2, y: 0, z: 1 }
]

export const Z = [
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 }
]

// Pentominoes (5 cubes) - 12 distinct shapes
export const F = [
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 }
]

export const I5 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 3, y: 0, z: 0 },
  { x: 4, y: 0, z: 0 }
]

export const L5 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 3, y: 0, z: 0 },
  { x: 3, y: 0, z: 1 }
]

export const N = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 },
  { x: 2, y: 0, z: 1 },
  { x: 3, y: 0, z: 1 }
]

export const P = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 0, y: 0, z: 2 }
]

export const T5 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 }
]

export const U = [
  { x: 0, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 2, y: 0, z: 1 }
]

export const V = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 0, z: 2 },
  { x: 1, y: 0, z: 2 },
  { x: 2, y: 0, z: 2 }
]

export const W = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 },
  { x: 2, y: 0, z: 2 }
]

export const X = [
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 2, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 }
]

export const Y = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 3, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 }
]

export const Z5 = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 },
  { x: 2, y: 0, z: 2 }
]

// === 3D POLYCUBES ===

// Basic 3D (2-3 cubes with vertical component)
export const I2_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 }
]

export const L2_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 }
]

export const V3_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 1, z: 0 }
]

// 3D Tetrominoes (4 cubes with 3D extension)
export const T_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 }
]

export const L_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 2, y: 1, z: 0 }
]

export const S_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 2, y: 1, z: 0 }
]

export const TOWER = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 2, z: 0 },
  { x: 0, y: 3, z: 0 }
]

// Complex 3D (5+ cubes)
export const CORNER_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 1, z: 0 }
]

export const BRIDGE_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 2, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 2, y: 1, z: 0 }
]

export const STAIRS_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 2, y: 1, z: 0 },
  { x: 2, y: 2, z: 0 }
]

export const CUBE_3D = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 0, y: 1, z: 0 },
  { x: 1, y: 1, z: 0 },
  { x: 0, y: 1, z: 1 },
  { x: 1, y: 1, z: 1 }
]

export const PLUS_3D = [
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 0, z: 1 },
  { x: 1, y: 0, z: 1 },
  { x: 2, y: 0, z: 1 },
  { x: 1, y: 0, z: 2 },
  { x: 1, y: 1, z: 1 }
]

// === SHAPE REGISTRY ===

export const SHAPES_2D = {
  'MONO': MONO,
  'I2': I2,
  'I3': I3,
  'L3': L3,
  'I4': I4,
  'O': O,
  'T': T,
  'L': L,
  'J': J,
  'S': S,
  'Z': Z,
  'F': F,
  'I5': I5,
  'L5': L5,
  'N': N,
  'P': P,
  'T5': T5,
  'U': U,
  'V': V,
  'W': W,
  'X': X,
  'Y': Y,
  'Z5': Z5
}

export const SHAPES_3D = {
  'I2_3D': I2_3D,
  'L2_3D': L2_3D,
  'V3_3D': V3_3D,
  'T_3D': T_3D,
  'L_3D': L_3D,
  'S_3D': S_3D,
  'TOWER': TOWER,
  'CORNER_3D': CORNER_3D,
  'BRIDGE_3D': BRIDGE_3D,
  'STAIRS_3D': STAIRS_3D,
  'CUBE_3D': CUBE_3D,
  'PLUS_3D': PLUS_3D
}

// Combined registry
export const ALL_SHAPES = {
  ...SHAPES_2D,
  ...SHAPES_3D
}

/**
 * Get a shape by ID
 * @param {string} shapeId - Shape identifier
 * @returns {Array} Array of coordinate objects or null if not found
 */
export function getShape(shapeId) {
  return ALL_SHAPES[shapeId] || null
}

/**
 * Get random shape from a list of shape IDs
 * @param {string[]} shapeIds - Array of shape IDs to choose from
 * @returns {Object} { id: string, coords: Array }
 */
export function getRandomShape(shapeIds) {
  const id = shapeIds[Math.floor(Math.random() * shapeIds.length)]
  return {
    id,
    coords: getShape(id)
  }
}

/**
 * Clone and normalize shape coordinates (center on centroid)
 * @param {Array} coords - Shape coordinates
 * @returns {Array} Normalized coordinates with centroid at origin
 */
export function normalizeShape(coords) {
  const centroid = coords.reduce(
    (acc, c) => ({ x: acc.x + c.x, y: acc.y + c.y, z: acc.z + c.z }),
    { x: 0, y: 0, z: 0 }
  )
  const n = coords.length
  centroid.x /= n
  centroid.y /= n
  centroid.z /= n

  return coords.map(c => ({
    x: c.x - centroid.x,
    y: c.y - centroid.y,
    z: c.z - centroid.z
  }))
}
