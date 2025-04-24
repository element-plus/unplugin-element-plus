/**
 * This entry file is for Rollup plugin.
 *
 * @module
 */

import unplugin from './index'

/**
 * Rollup plugin
 *
 * @example
 * ```ts
 * // rollup.config.js
 * import ElementPlus from 'unplugin-element-plus/rollup'
 *
 * export default {
 *   plugins: [ElementPlus()],
 * }
 * ```
 */
const rollup = unplugin.rollup as typeof unplugin.rollup
export default rollup
export { rollup as 'module.exports' }
