/**
 * Level Configuration System
 * 
 * 50 levels across 5 worlds with progressive difficulty.
 * 
 * World 0 (Levels 1-10):  2D basics, 1-4 cubes
 * World 1 (Levels 11-20): 2D standard, classic tetrominoes
 * World 2 (Levels 21-30): 2D advanced, pentominoes introduced
 * World 3 (Levels 31-40): 3D introduction, mixed 2D/3D
 * World 4 (Levels 41-50): 3D advanced, complex shapes
 */

/**
 * @typedef {Object} LevelConfig
 * @property {number} level - Level number (1-50)
 * @property {number} world - World number (0-4)
 * @property {string} worldName - Display name for the world
 * @property {string[]} shapes - Array of shape IDs available for this level
 * @property {string} mode - '2D', '3D', or 'mixed'
 * @property {number} targetScore - Points needed to complete the level
 * @property {number} spawnDelay - Milliseconds between auto-spawns (0 = manual only)
 * @property {number} gridSize - Grid size (default 8)
 * @property {string} [description] - Optional level description
 */

export const WORLD_NAMES = [
  'Foundation',    // World 0: Learning basics
  'Classic',       // World 1: Tetris-style
  'Challenge',     // World 2: Pentominoes
  'Dimension',     // World 3: 3D introduction
  'Mastery'        // World 4: Full 3D
]

/** @type {LevelConfig[]} */
export const LEVELS = [
  // ========================================
  // ORIENTATION LEVEL - 70% pre-filled
  // ========================================
  {
    level: 1,
    world: 0,
    worldName: 'Orientation',
    shapes: ['MONO', 'I2', 'I3', 'L3', 'O', 'I4', 'T', 'L', 'J', 'S', 'Z'],
    mode: '2D',
    targetScore: 999999, // No level progression - endless play
    spawnDelay: 0, // Manual spawn only
    gridSize: 8,
    prefillPercent: 0.7, // 70% of cells filled
    prefillHeight: 1, // Only the first layer
    description: 'Fill the gaps to clear lines!'
  }
]

/**
 * Get level configuration by level number
 * @param {number} levelNum - Level number (1-50)
 * @returns {LevelConfig|null}
 */
export function getLevel(levelNum) {
  return LEVELS.find(l => l.level === levelNum) || null
}

/**
 * Get all levels for a specific world
 * @param {number} worldNum - World number (0-4)
 * @returns {LevelConfig[]}
 */
export function getLevelsByWorld(worldNum) {
  return LEVELS.filter(l => l.world === worldNum)
}

/**
 * Get the world number for a given level
 * @param {number} levelNum - Level number
 * @returns {number} World number (0-4)
 */
export function getWorldForLevel(levelNum) {
  const level = getLevel(levelNum)
  return level ? level.world : 0
}

/**
 * Calculate score multiplier for multi-layer clears
 * @param {number} layersCleared - Number of layers cleared simultaneously
 * @returns {number} Score multiplier
 */
export function getLayerClearMultiplier(layersCleared) {
  switch (layersCleared) {
    case 1: return 1
    case 2: return 3    // 2-layer = 3x
    case 3: return 6    // 3-layer = 6x
    case 4: return 10   // 4-layer = 10x (Tetris!)
    default: return layersCleared * 3  // Beyond 4
  }
}

/**
 * Base score for clearing a single layer
 */
export const BASE_LAYER_SCORE = 100

/**
 * Calculate total score for clearing layers
 * @param {number} layersCleared - Number of layers cleared
 * @returns {number} Total score earned
 */
export function calculateLayerClearScore(layersCleared) {
  return BASE_LAYER_SCORE * layersCleared * getLayerClearMultiplier(layersCleared)
}
