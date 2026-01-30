/**
 * 3D Occupancy Grid System
 * 
 * Tracks which grid cells are occupied by blocks.
 * Enables layer clearing detection and block splitting.
 * 
 * Coordinate system:
 * - X: 0 to GRID_SIZE-1 (East/West)
 * - Y: 0 to MAX_HEIGHT-1 (Up)
 * - Z: 0 to GRID_SIZE-1 (North/South)
 * 
 * Grid cells correspond to world positions:
 * - World X = gridX + 0.5 - GRID_SIZE/2 (centered on plate)
 * - World Y = gridY + 0.5 + PLATE_HEIGHT
 * - World Z = gridZ + 0.5 - GRID_SIZE/2
 */

export const GRID_SIZE = 8
export const MAX_HEIGHT = 20
export const PLATE_HEIGHT = 0.5

/**
 * @typedef {Object} CellData
 * @property {string} blockId - Unique identifier for the block occupying this cell
 * @property {number} shapeIndex - Index of the cube within the block's shape
 */

/**
 * @typedef {Object} BlockCellInfo
 * @property {number} x - Grid X coordinate
 * @property {number} y - Grid Y coordinate
 * @property {number} z - Grid Z coordinate
 */

class OccupancyGrid {
  constructor() {
    // 3D array: grid[x][y][z] = CellData | null
    this.grid = this.createEmptyGrid()
    
    // Map of blockId -> array of {x, y, z} cells
    this.blockCells = new Map()
    
    // Counter for generating unique block IDs
    this.blockIdCounter = 0
  }

  /**
   * Create an empty 3D grid array
   */
  createEmptyGrid() {
    const grid = []
    for (let x = 0; x < GRID_SIZE; x++) {
      grid[x] = []
      for (let y = 0; y < MAX_HEIGHT; y++) {
        grid[x][y] = []
        for (let z = 0; z < GRID_SIZE; z++) {
          grid[x][y][z] = null
        }
      }
    }
    return grid
  }

  /**
   * Reset the grid to empty state
   */
  clear() {
    this.grid = this.createEmptyGrid()
    this.blockCells.clear()
    this.blockIdCounter = 0
  }

  /**
   * Generate a unique block ID
   */
  generateBlockId() {
    return `block_${++this.blockIdCounter}`
  }

  /**
   * Convert world position to grid coordinates
   * @param {number} worldX 
   * @param {number} worldY 
   * @param {number} worldZ 
   * @returns {{x: number, y: number, z: number}|null} Grid coords or null if out of bounds
   */
  worldToGrid(worldX, worldY, worldZ) {
    // World position 0.5 corresponds to grid 0 (plate is centered at world origin)
    // Grid cell centers are at X.5 in world space
    const gridX = Math.floor(worldX + GRID_SIZE / 2)
    const gridY = Math.floor(worldY - PLATE_HEIGHT)
    const gridZ = Math.floor(worldZ + GRID_SIZE / 2)

    if (this.isValidGridCoord(gridX, gridY, gridZ)) {
      return { x: gridX, y: gridY, z: gridZ }
    }
    return null
  }

  /**
   * Convert grid coordinates to world position (cell center)
   * @param {number} gridX 
   * @param {number} gridY 
   * @param {number} gridZ 
   * @returns {{x: number, y: number, z: number}}
   */
  gridToWorld(gridX, gridY, gridZ) {
    return {
      x: gridX - GRID_SIZE / 2 + 0.5,
      y: gridY + PLATE_HEIGHT + 0.5,
      z: gridZ - GRID_SIZE / 2 + 0.5
    }
  }

  /**
   * Check if grid coordinates are within bounds
   */
  isValidGridCoord(x, y, z) {
    return x >= 0 && x < GRID_SIZE &&
           y >= 0 && y < MAX_HEIGHT &&
           z >= 0 && z < GRID_SIZE
  }

  /**
   * Get cell data at grid position
   * @returns {CellData|null}
   */
  getCell(x, y, z) {
    if (!this.isValidGridCoord(x, y, z)) return null
    return this.grid[x][y][z]
  }

  /**
   * Set cell data at grid position
   */
  setCell(x, y, z, data) {
    if (!this.isValidGridCoord(x, y, z)) return false
    this.grid[x][y][z] = data
    return true
  }

  /**
   * Check if a cell is occupied
   */
  isOccupied(x, y, z) {
    return this.getCell(x, y, z) !== null
  }

  /**
   * Register a block in the grid
   * @param {string} blockId - Unique block identifier
   * @param {Array<{x: number, y: number, z: number}>} worldPositions - World positions of each cube
   * @returns {boolean} Success
   */
  registerBlock(blockId, worldPositions) {
    const gridCells = []

    // Convert all positions and validate
    for (const pos of worldPositions) {
      const gridCoord = this.worldToGrid(pos.x, pos.y, pos.z)
      if (!gridCoord) {
        console.warn(`Block ${blockId} cube out of bounds:`, pos)
        continue
      }
      
      // Check if already occupied by different block
      const existing = this.getCell(gridCoord.x, gridCoord.y, gridCoord.z)
      if (existing && existing.blockId !== blockId) {
        console.warn(`Cell already occupied by ${existing.blockId}`)
      }
      
      gridCells.push(gridCoord)
    }

    // Register all cells
    gridCells.forEach((coord, index) => {
      this.setCell(coord.x, coord.y, coord.z, {
        blockId,
        shapeIndex: index
      })
    })

    // Store cell list for this block
    this.blockCells.set(blockId, gridCells)
    
    return true
  }

  /**
   * Unregister a block from the grid
   * @param {string} blockId 
   */
  unregisterBlock(blockId) {
    const cells = this.blockCells.get(blockId)
    if (!cells) return

    for (const coord of cells) {
      const cell = this.getCell(coord.x, coord.y, coord.z)
      if (cell && cell.blockId === blockId) {
        this.setCell(coord.x, coord.y, coord.z, null)
      }
    }

    this.blockCells.delete(blockId)
  }

  /**
   * Update a block's position in the grid
   * @param {string} blockId 
   * @param {Array<{x: number, y: number, z: number}>} newWorldPositions 
   */
  updateBlockPosition(blockId, newWorldPositions) {
    this.unregisterBlock(blockId)
    this.registerBlock(blockId, newWorldPositions)
  }

  /**
   * Get all cells belonging to a block
   * @param {string} blockId 
   * @returns {Array<{x: number, y: number, z: number}>}
   */
  getBlockCells(blockId) {
    return this.blockCells.get(blockId) || []
  }

  /**
   * Check if a layer (Y level) is completely filled
   * @param {number} y - Grid Y coordinate
   * @returns {boolean}
   */
  isLayerComplete(y) {
    if (y < 0 || y >= MAX_HEIGHT) return false

    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        if (!this.grid[x][y][z]) {
          return false
        }
      }
    }
    return true
  }

  /**
   * Get all complete layers
   * @returns {number[]} Array of Y coordinates that are complete
   */
  getCompleteLayers() {
    const completeLayers = []
    for (let y = 0; y < MAX_HEIGHT; y++) {
      if (this.isLayerComplete(y)) {
        completeLayers.push(y)
      }
    }
    return completeLayers
  }

  /**
   * Get all blocks that have cubes in a specific layer
   * @param {number} y - Grid Y coordinate
   * @returns {Set<string>} Set of block IDs
   */
  getBlocksInLayer(y) {
    const blockIds = new Set()
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        const cell = this.grid[x][y][z]
        if (cell) {
          blockIds.add(cell.blockId)
        }
      }
    }
    return blockIds
  }

  /**
   * Get cells of a block that are in a specific layer
   * @param {string} blockId 
   * @param {number} y - Grid Y coordinate
   * @returns {Array<{x: number, y: number, z: number}>}
   */
  getBlockCellsInLayer(blockId, y) {
    const cells = this.blockCells.get(blockId) || []
    return cells.filter(c => c.y === y)
  }

  /**
   * Get cells of a block that are NOT in specific layers
   * @param {string} blockId 
   * @param {number[]} layerYs - Array of Y coordinates to exclude
   * @returns {Array<{x: number, y: number, z: number}>}
   */
  getBlockCellsNotInLayers(blockId, layerYs) {
    const cells = this.blockCells.get(blockId) || []
    const layerSet = new Set(layerYs)
    return cells.filter(c => !layerSet.has(c.y))
  }

  /**
   * Remove cells at specific Y levels from all blocks
   * Updates internal state but doesn't modify actual game objects
   * @param {number[]} layerYs - Y coordinates to clear
   * @returns {Map<string, Array>} Map of blockId -> remaining cells
   */
  clearLayers(layerYs) {
    const remainingCells = new Map()
    const layerSet = new Set(layerYs)

    // For each layer, clear all cells
    for (const y of layerYs) {
      for (let x = 0; x < GRID_SIZE; x++) {
        for (let z = 0; z < GRID_SIZE; z++) {
          this.grid[x][y][z] = null
        }
      }
    }

    // Update blockCells map - remove cleared cells
    for (const [blockId, cells] of this.blockCells) {
      const remaining = cells.filter(c => !layerSet.has(c.y))
      if (remaining.length === 0) {
        this.blockCells.delete(blockId)
      } else {
        this.blockCells.set(blockId, remaining)
      }
      remainingCells.set(blockId, remaining)
    }

    return remainingCells
  }

  /**
   * Drop all cells above cleared layers down
   * @param {number[]} clearedLayers - Sorted array of cleared Y coordinates (ascending)
   */
  dropCellsAbove(clearedLayers) {
    if (clearedLayers.length === 0) return

    // Sort ascending
    const sortedLayers = [...clearedLayers].sort((a, b) => a - b)
    
    // Process from bottom to top
    // For each row above cleared layers, calculate how many rows it should drop
    for (let y = sortedLayers[0] + 1; y < MAX_HEIGHT; y++) {
      // Count how many cleared layers are below this row
      const dropAmount = sortedLayers.filter(ly => ly < y).length
      
      if (dropAmount === 0) continue

      const newY = y - dropAmount

      // Move all cells at this Y to their new position
      for (let x = 0; x < GRID_SIZE; x++) {
        for (let z = 0; z < GRID_SIZE; z++) {
          const cell = this.grid[x][y][z]
          if (cell) {
            // Move cell down
            this.grid[x][newY][z] = cell
            this.grid[x][y][z] = null

            // Update blockCells map
            const blockCells = this.blockCells.get(cell.blockId)
            if (blockCells) {
              const cellIndex = blockCells.findIndex(c => c.x === x && c.y === y && c.z === z)
              if (cellIndex !== -1) {
                blockCells[cellIndex].y = newY
              }
            }
          }
        }
      }
    }
  }

  /**
   * Find connected components in remaining cells after layer clear
   * Used to determine if a block has split into multiple pieces
   * @param {Array<{x: number, y: number, z: number}>} cells 
   * @returns {Array<Array<{x: number, y: number, z: number}>>} Array of connected components
   */
  findConnectedComponents(cells) {
    if (cells.length === 0) return []
    if (cells.length === 1) return [cells]

    const visited = new Set()
    const components = []

    // Helper to get cell key
    const key = (c) => `${c.x},${c.y},${c.z}`

    // Create lookup set
    const cellSet = new Set(cells.map(key))

    // BFS to find connected component
    const bfs = (start) => {
      const component = []
      const queue = [start]
      visited.add(key(start))

      while (queue.length > 0) {
        const current = queue.shift()
        component.push(current)

        // Check 6 neighbors (face-adjacent)
        const neighbors = [
          { x: current.x + 1, y: current.y, z: current.z },
          { x: current.x - 1, y: current.y, z: current.z },
          { x: current.x, y: current.y + 1, z: current.z },
          { x: current.x, y: current.y - 1, z: current.z },
          { x: current.x, y: current.y, z: current.z + 1 },
          { x: current.x, y: current.y, z: current.z - 1 }
        ]

        for (const n of neighbors) {
          const nKey = key(n)
          if (cellSet.has(nKey) && !visited.has(nKey)) {
            visited.add(nKey)
            queue.push(n)
          }
        }
      }

      return component
    }

    // Find all components
    for (const cell of cells) {
      if (!visited.has(key(cell))) {
        const component = bfs(cell)
        components.push(component)
      }
    }

    return components
  }

  /**
   * Get occupancy statistics for debugging
   */
  getStats() {
    let occupiedCells = 0
    let maxHeight = 0

    for (let x = 0; x < GRID_SIZE; x++) {
      for (let y = 0; y < MAX_HEIGHT; y++) {
        for (let z = 0; z < GRID_SIZE; z++) {
          if (this.grid[x][y][z]) {
            occupiedCells++
            maxHeight = Math.max(maxHeight, y + 1)
          }
        }
      }
    }

    return {
      occupiedCells,
      maxHeight,
      totalCells: GRID_SIZE * MAX_HEIGHT * GRID_SIZE,
      blockCount: this.blockCells.size
    }
  }

  /**
   * Debug: Print a layer to console
   */
  debugPrintLayer(y) {
    let output = `Layer Y=${y}:\n`
    for (let z = GRID_SIZE - 1; z >= 0; z--) {
      let row = ''
      for (let x = 0; x < GRID_SIZE; x++) {
        const cell = this.grid[x][y][z]
        row += cell ? '#' : '.'
      }
      output += row + '\n'
    }
    console.log(output)
  }
}

// Singleton instance
export const occupancyGrid = new OccupancyGrid()

// Export class for testing
export { OccupancyGrid }
