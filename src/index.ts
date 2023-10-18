import { createFilter } from '@rollup/pluginutils'
import { createUnplugin } from 'unplugin'
import { transformStyle } from './core/style'
import {
  getLocaleRE,
  getViteDepPlugin,
  transformDefaultLocale,
} from './core/default-locale'
import { type Options } from './core/types'

export type { Options }

const defaultOptions: Options = {
  include: [
    '**/*.vue',
    '**/*.ts',
    '**/*.js',
    '**/*.tsx',
    '**/*.jsx',
    '**/*.vue?vue&type=script*',
  ],
  exclude: [/[/\\]node_modules[/\\]/, /[/\\]\.git[/\\]/, /[/\\]\.nuxt[/\\]/],
  lib: 'element-plus',
  ignoreComponents: [],
  useSource: false,
  defaultLocale: '',
  format: 'esm',
  prefix: 'El',
  sourceMap: false,
}

export default createUnplugin<Partial<Options>>((userOptions = {}) => {
  const options: Options = Object.assign({}, defaultOptions, userOptions)
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'unplugin-element-plus',
    enforce: 'post',

    transformInclude(id) {
      return getLocaleRE(options).test(id) || filter(id)
    },

    transform(source, id) {
      if (options.defaultLocale) {
        const result = transformDefaultLocale(options, source, id)
        if (result) return result
      }

      return transformStyle(source, options)
    },

    vite: {
      config() {
        if (options.defaultLocale) {
          return {
            optimizeDeps: {
              esbuildOptions: {
                plugins: [getViteDepPlugin(options) as any],
              },
            },
          }
        }
      },
    },
  }
})
