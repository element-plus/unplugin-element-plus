import type { Options } from './core/types'
import unplugin from '.'

// eslint-disable-next-line import/no-default-export
export default function (this: any, options: Options): void {
  // install webpack plugin
  this.extendBuild((config: any) => {
    config.plugins = config.plugins || []
    config.plugins.unshift(unplugin.webpack(options))
  })

  // install vite plugin
  this.nuxt.hook('vite:extend', (vite: any) => {
    vite.config.plugins = vite.config.plugins || []
    vite.config.plugins.push(unplugin.vite(options))
  })
}
