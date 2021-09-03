import { createFilter } from '@rollup/pluginutils'
import { createUnplugin } from 'unplugin'
import { transform } from './core/transform'

export type VitePluginElementPlusOptions = {
  useSource?: boolean
  defaultLocale?: string
  lib?: string
  prefix?: string
  format?: 'cjs' | 'esm'
  sourceMap?: boolean
}

const defaultOptions = {
  lib: 'element-plus',
  useSource: false,
  defaultLocale: '', // for replacing locale,
  format: 'esm',
  prefix: 'El',
  sourceMap: false,
}

export default createUnplugin((options: VitePluginElementPlusOptions = {}) => {
  const exclude = 'node_modules/**'
  const include = ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx']

  const filter = createFilter(include, exclude)
  options = Object.assign(defaultOptions, options)

  return {
    name: 'unplugin-element-plus',
    enforce: 'post',
    transformInclude(id) {
      return filter(id)
    },
    async transform(source) {
      return await transform(source, options)
    },
  }
})
