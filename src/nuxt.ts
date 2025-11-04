import { addBuildPlugin, defineNuxtModule } from '@nuxt/kit'
import type { Options } from './core/types'
import unplugin from './index'
import type { NuxtModule } from '@nuxt/schema'

const module: NuxtModule<Options, Options, false> = defineNuxtModule({
  meta: {
    name: 'unplugin-element-plus',
    configKey: 'elementPlus',
  },
  setup(options: Options) {
    addBuildPlugin({
      vite: () => unplugin.vite(options),
      webpack: () => unplugin.webpack(options),
      rspack: () => unplugin.rspack(options),
    })
  },
})

// eslint-disable-next-line import/no-default-export
export default module
