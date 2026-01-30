/**
 * Game State Manager
 * 
 * Handles:
 * - Level progression
 * - Score tracking
 * - Layer clearing with block splitting
 * - Game over detection
 */

import { getLevel, getWorldForLevel, calculateLayerClearScore, WORLD_NAMES } from './levels.js'
import { getShape, getRandomShape, normalizeShape } from './shapes.js'
import { occupancyGrid, GRID_SIZE, MAX_HEIGHT, PLATE_HEIGHT } from './grid.js'

/**
 * @typedef {Object} GameState
 * @property {number} level - Current level number
 * @property {number} score - Current score
 * @property {number} linesCleared - Total lines cleared
 * @property {boolean} isPlaying - Game is active
 * @property {boolean} isPaused - Game is paused
 * @property {boolean} isGameOver - Game has ended
 * @property {number|null} spawnTimerId - Auto-spawn timer ID
 */

class GameManager {
  constructor() {
    /** @type {GameState} */
    this.state = {
      level: 1,
      score: 0,
      linesCleared: 0,
      isPlaying: false,
      isPaused: false,
      isGameOver: false,
      spawnTimerId: null
    }

    // Callbacks for UI updates
    this.onScoreChange = null
    this.onLevelChange = null
    this.onLinesChange = null
    this.onGameOver = null
    this.onLayerClear = null
    this.onBlockSplit = null

    // Reference to game objects (set by main.js)
    this.spawnBlockFn = null
    this.createBlockFromCellsFn = null
    this.removeBlockFn = null
    this.dropBlockFn = null
  }

  /**
   * Initialize or reset the game
   * @param {number} startLevel - Starting level (default 1)
   */
  init(startLevel = 1) {
    this.state = {
      level: startLevel,
      score: 0,
      linesCleared: 0,
      isPlaying: true,
      isPaused: false,
      isGameOver: false,
      spawnTimerId: null
    }

    occupancyGrid.clear()

    this.notifyLevelChange()
    this.notifyScoreChange()
    this.notifyLinesChange()

    // Start auto-spawn if level has it
    this.startAutoSpawn()
  }

  /**
   * Get current level configuration
   */
  getLevelConfig() {
    return getLevel(this.state.level)
  }

  /**
   * Get current world number
   */
  getCurrentWorld() {
    return getWorldForLevel(this.state.level)
  }

  /**
   * Get current world name
   */
  getCurrentWorldName() {
    return WORLD_NAMES[this.getCurrentWorld()]
  }

  /**
   * Get a random shape for the current level
   * @returns {{id: string, coords: Array}}
   */
  getNextShape() {
    const config = this.getLevelConfig()
    console.log('getNextShape - level config:', config)
    if (!config) {
      // Fallback to basic shapes
      console.log('No level config, using fallback shapes')
      return getRandomShape(['I4', 'O', 'T', 'L', 'J', 'S', 'Z'])
    }
    console.log('Using level shapes:', config.shapes)
    return getRandomShape(config.shapes)
  }

  /**
   * Add score
   * @param {number} points 
   */
  addScore(points) {
    this.state.score += points
    this.notifyScoreChange()
    this.checkLevelProgress()
  }

  /**
   * Check if level target is reached
   */
  checkLevelProgress() {
    const config = this.getLevelConfig()
    if (config && this.state.score >= config.targetScore) {
      this.advanceLevel()
    }
  }

  /**
   * Advance to next level
   */
  advanceLevel() {
    if (this.state.level >= 50) {
      // Game complete!
      this.gameWin()
      return
    }

    this.state.level++
    this.notifyLevelChange()

    // Restart auto-spawn with new timing
    this.stopAutoSpawn()
    this.startAutoSpawn()
  }

  /**
   * Start auto-spawn timer based on level config
   */
  startAutoSpawn() {
    const config = this.getLevelConfig()
    if (!config || config.spawnDelay <= 0) return

    this.state.spawnTimerId = setInterval(() => {
      if (!this.state.isPaused && this.state.isPlaying && this.spawnBlockFn) {
        this.spawnBlockFn()
      }
    }, config.spawnDelay)
  }

  /**
   * Stop auto-spawn timer
   */
  stopAutoSpawn() {
    if (this.state.spawnTimerId) {
      clearInterval(this.state.spawnTimerId)
      this.state.spawnTimerId = null
    }
  }

  /**
   * Pause the game
   */
  pause() {
    this.state.isPaused = true
    this.stopAutoSpawn()
  }

  /**
   * Resume the game
   */
  resume() {
    this.state.isPaused = false
    this.startAutoSpawn()
  }

  /**
   * Handle game over
   */
  gameOver() {
    this.state.isPlaying = false
    this.state.isGameOver = true
    this.stopAutoSpawn()
    
    if (this.onGameOver) {
      this.onGameOver({ win: false, score: this.state.score, level: this.state.level })
    }
  }

  /**
   * Handle game win (all levels complete)
   */
  gameWin() {
    this.state.isPlaying = false
    this.stopAutoSpawn()
    
    if (this.onGameOver) {
      this.onGameOver({ win: true, score: this.state.score, level: this.state.level })
    }
  }

  /**
   * Check if stack has reached the top (game over condition)
   * @returns {boolean}
   */
  checkGameOverCondition() {
    const stats = occupancyGrid.getStats()
    if (stats.maxHeight >= MAX_HEIGHT - 2) {
      this.gameOver()
      return true
    }
    return false
  }

  /**
   * Register a block that has landed
   * @param {string} blockId - Unique block identifier
   * @param {Array<{x: number, y: number, z: number}>} worldPositions - World positions of each cube
   */
  registerLandedBlock(blockId, worldPositions) {
    occupancyGrid.registerBlock(blockId, worldPositions)
    
    // Check for complete layers
    const completeLayers = occupancyGrid.getCompleteLayers()
    if (completeLayers.length > 0) {
      this.clearLayers(completeLayers)
    }

    // Check game over
    this.checkGameOverCondition()
  }

  /**
   * Clear complete layers and handle block splitting
   * @param {number[]} layerYs - Y coordinates of layers to clear
   * @returns {Object} Clear result with affected blocks info
   */
  clearLayers(layerYs) {
    console.log(`Clearing ${layerYs.length} layers:`, layerYs)

    // Get all blocks affected by these layers
    const affectedBlocks = new Set()
    for (const y of layerYs) {
      const blocksInLayer = occupancyGrid.getBlocksInLayer(y)
      blocksInLayer.forEach(id => affectedBlocks.add(id))
    }

    // Store block info before clearing
    const blockSplitInfo = new Map()
    for (const blockId of affectedBlocks) {
      const remainingCells = occupancyGrid.getBlockCellsNotInLayers(blockId, layerYs)
      const components = occupancyGrid.findConnectedComponents(remainingCells)
      blockSplitInfo.set(blockId, {
        remainingCells,
        components,
        needsSplit: components.length > 1,
        fullyCleared: remainingCells.length === 0
      })
    }

    // Clear the layers in grid
    occupancyGrid.clearLayers(layerYs)

    // Drop cells above
    occupancyGrid.dropCellsAbove(layerYs)

    // Calculate score
    const score = calculateLayerClearScore(layerYs.length)
    this.addScore(score)
    this.state.linesCleared += layerYs.length
    this.notifyLinesChange()

    // Notify UI about layer clear
    if (this.onLayerClear) {
      this.onLayerClear({
        layers: layerYs,
        score,
        totalLines: this.state.linesCleared
      })
    }

    // Return info for main.js to handle visual updates
    return {
      clearedLayers: layerYs,
      affectedBlocks: blockSplitInfo,
      dropAmount: layerYs.length,
      score
    }
  }

  /**
   * Process block splitting after layer clear
   * Returns instructions for main.js to create new block objects
   * @param {Map} blockSplitInfo - Info from clearLayers
   * @returns {Array} Array of split instructions
   */
  processSplits(blockSplitInfo) {
    const splitInstructions = []

    for (const [blockId, info] of blockSplitInfo) {
      if (info.fullyCleared) {
        // Block completely destroyed
        splitInstructions.push({
          type: 'remove',
          blockId
        })
      } else if (info.needsSplit) {
        // Block splits into multiple pieces
        splitInstructions.push({
          type: 'split',
          blockId,
          components: info.components.map((cells, index) => ({
            newBlockId: `${blockId}_split_${index}`,
            cells: cells.map(c => occupancyGrid.gridToWorld(c.x, c.y, c.z))
          }))
        })

        // Notify about split
        if (this.onBlockSplit) {
          this.onBlockSplit({ blockId, componentCount: info.components.length })
        }
      } else {
        // Block shrinks but stays connected
        splitInstructions.push({
          type: 'shrink',
          blockId,
          cells: info.remainingCells.map(c => occupancyGrid.gridToWorld(c.x, c.y, c.z))
        })
      }
    }

    return splitInstructions
  }

  /**
   * Calculate world positions for a block's cubes
   * @param {Object} body - CANNON body
   * @param {Object} quaternion - CANNON quaternion
   * @returns {Array<{x: number, y: number, z: number}>}
   */
  getBlockWorldPositions(body, quaternion) {
    const positions = []
    const bodyPos = body.position

    for (let i = 0; i < body.shapes.length; i++) {
      const offset = body.shapeOffsets[i]
      // Rotate offset by quaternion
      const rotatedOffset = quaternion.vmult(offset)
      positions.push({
        x: bodyPos.x + rotatedOffset.x,
        y: bodyPos.y + rotatedOffset.y,
        z: bodyPos.z + rotatedOffset.z
      })
    }

    return positions
  }

  // === Notification helpers ===

  notifyScoreChange() {
    if (this.onScoreChange) {
      this.onScoreChange(this.state.score, this.getLevelConfig()?.targetScore || 0)
    }
  }

  notifyLevelChange() {
    if (this.onLevelChange) {
      this.onLevelChange(this.state.level, this.getCurrentWorld(), this.getCurrentWorldName())
    }
  }

  notifyLinesChange() {
    if (this.onLinesChange) {
      this.onLinesChange(this.state.linesCleared)
    }
  }

  // === Getters ===

  getScore() { return this.state.score }
  getLevel() { return this.state.level }
  getLinesCleared() { return this.state.linesCleared }
  isPlaying() { return this.state.isPlaying }
  isPaused() { return this.state.isPaused }
  isGameOver() { return this.state.isGameOver }
}

// Singleton instance
export const gameManager = new GameManager()

// Export class for testing
export { GameManager }
