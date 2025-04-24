/**
 * This entry file is for Vite plugin.
 *
 * @module
 */

import unplugin from './index'

/**
 * Vite plugin
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import ElementPlus from 'unplugin-element-plus/vite'
 *
 * export default defineConfig({
 *   plugins: [ElementPlus()],
 * })
 * ```
 */
const vite = unplugin.vite as typeof unplugin.vite
export default vite
export { vite as 'module.exports' }
