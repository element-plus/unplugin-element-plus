/**
 * This entry file is for Rspack plugin.
 *
 * @module
 */

import unplugin from './index'

/**
 * Rspack plugin
 *
 * @example
 * ```js
 * // rspack.config.js
 * import ElementPlus from 'unplugin-element-plus/rspack'
 *
 * default export {
 *  plugins: [ElementPlus()],
 * }
 * ```
 */
const rspack = unplugin.rspack as typeof unplugin.rspack
export default rspack
export { rspack as 'module.exports' }
