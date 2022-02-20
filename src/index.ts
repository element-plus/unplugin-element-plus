import { createFilter } from '@rollup/pluginutils'
import { createUnplugin } from 'unplugin'
import { transform } from './core/transform'
import type { Options } from './types'

const defaultOptions: Options = {
  include: ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx'],
  exclude: [/[/\\]node_modules[/\\]/, /[/\\]\.git[/\\]/, /[/\\]\.nuxt[/\\]/],
  lib: 'element-plus',
  useSource: false,
  defaultLocale: '', // for replacing locale,
  format: 'esm',
  prefix: 'El',
  sourceMap: false,
}

export default createUnplugin((userOptions: Partial<Options> = {}) => {
  const options: Options = Object.assign(defaultOptions, userOptions)
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'unplugin-element-plus',
    enforce: 'post',
    transformInclude(id) {
      return filter(id)
    },
    transform(source) {
      return transform(source, options)
    },
  }
})
