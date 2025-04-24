/**
 * This entry file is for Rolldown plugin.
 *
 * @module
 */

import unplugin from './index'

/**
 * Rolldown plugin
 *
 * @example
 * ```ts
 * // rolldown.config.js
 * import ElementPlus from 'unplugin-element-plus/rolldown'
 *
 * export default {
 *   plugins: [ElementPlus()],
 * }
 * ```
 */
const rolldown = unplugin.rolldown as typeof unplugin.rolldown
export default rolldown
export { rolldown as 'module.exports' }
