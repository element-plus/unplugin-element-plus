import { createFilter } from '@rollup/pluginutils'
import { createUnplugin } from 'unplugin'
import { transform } from './core/transform'
import { Options } from './types'

const defaultOptions = {
  lib: 'element-plus',
  useSource: false,
  defaultLocale: '', // for replacing locale,
  format: 'esm',
  prefix: 'El',
  sourceMap: false,
}

export default createUnplugin((userOptions: Partial<Options> = {}) => {
  const exclude = 'node_modules/**'
  const include = ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx']

  const filter = createFilter(include, exclude)
  const options: Options = Object.assign(defaultOptions, userOptions)

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
