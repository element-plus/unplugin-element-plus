import { withMagicString } from 'rolldown-string'
import { createUnplugin, type UnpluginInstance } from 'unplugin'
import {
  getLocaleRE,
  getViteDepPlugin,
  transformDefaultLocale,
} from './core/default-locale'
import { transformStyle } from './core/style'
import type { Options } from './core/types'

export type { Options }

const defaultOptions: Options = {
  include: [
    '**/*.vue',
    '**/*.ts',
    '**/*.js',
    '**/*.tsx',
    '**/*.jsx',
    '**/*.vue?vue&type=script*',
    /\.vue\.[tj]sx?\?vue/,
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

function toArray<T>(thing: T | T[] | undefined | null): T[] {
  if (thing == null) return []
  return Array.isArray(thing) ? thing : [thing]
}

const unplugin: UnpluginInstance<Partial<Options>, false> = createUnplugin(
  (userOptions = {}) => {
    const options: Options = {
      ...defaultOptions,
      ...userOptions,
    }

    return {
      name: 'unplugin-element-plus',
      enforce: 'post',

      transform: {
        filter: {
          id: {
            include: [getLocaleRE(options), ...toArray(options.include)],
            exclude: options.exclude,
          },
        },
        handler: withMagicString((s, id) => {
          if (options.defaultLocale) {
            return transformDefaultLocale(s, id, options)
          }

          return transformStyle(s, options)
        }),
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
  },
)
export default unplugin
