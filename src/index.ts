import { createFilter } from '@rollup/pluginutils'
import { init, parse } from 'es-module-lexer'

import type { Plugin } from 'vite'
import type { ImportSpecifier } from 'es-module-lexer'

const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str: string) =>
  str.replace(hyphenateRE, '-$1').toLowerCase()

const formatMap = {
  cjs: 'lib',
  esm: 'es',
}

type FormatType = 'cjs' | 'esm';
const transform = (
  specifier: ImportSpecifier,
  source: string,
  useSource = false,
  options: {
    prefix: string
    lib: string
    format: FormatType
  }
) => {
  const { prefix, lib, format } = options
  const statement = source.substring(specifier.ss, specifier.se)
  const leftBracket = statement.indexOf('{')
  if (leftBracket > -1) {
    // remove { } to get raw imported items. Maybe this will fail since there could be
    // special cases
    const identifiers = statement.slice(
      leftBracket + 1,
      statement.indexOf('}')
    )
    const components = identifiers.split(',')
    const styleImports = []
    components.forEach(c => {
      const trimmed = c.trim()
      if (trimmed.startsWith(prefix)) {
        const component = trimmed.slice(prefix.length)
        if (useSource) {
          styleImports.push(
            `import '${lib}/${formatMap[format]}/components/${hyphenate(
              component
            )}/style'`
          )
        } else {
          styleImports.push(
            `import '${lib}/${formatMap[format]}/components/${hyphenate(
              component
            )}/style/css'`
          )
        }
      }
    })
    return styleImports.join('\n')
  }
}

export type VitePluginElementPlusOptions = {
  useSource?: boolean
  defaultLocale?: string
  lib?: string
  prefix?: string
  format?: 'cjs' | 'esm'
};

const defaultOptions = {
  lib: 'element-plus',
  useSource: false,
  defaultLocale: '', // for replacing locale,
  format: 'esm',
  prefix: 'El',
}

export default (options: VitePluginElementPlusOptions) => {
  const exclude = 'node_modules/**'
  const include = ['**/*.vue', '**/*.ts', '**/*.js', '**/*.tsx', '**/*.jsx']

  const filter = createFilter(include, exclude)
  options = Object.assign(defaultOptions, options)
  const { useSource, lib, prefix, format } = options

  const plugin: Plugin = {
    name: 'vite-plugin-element-plus',
    enforce: 'post',

    async transform(source, id) {
      if (!source) return
      if (!filter(id)) return

      await init

      const specifiers = parse(source)[0].filter(({ n }) => {
        return (
          n === lib ||
          n === `${lib}/es/components` ||
          n === `${lib}/lib/components`
        )
      })
      if (!specifiers.length) return
      const styleImports = specifiers
        .map(s => {
          const ret = transform(s, source, useSource, { lib, prefix, format })
          return ret
        })
        .filter(s => s)
        .join('\n')

      const lastSpecifier = specifiers[specifiers.length - 1]
      try {
        const ret = `${source.slice(
          0,
          lastSpecifier.se
        )}\n${styleImports}\n${source.slice(lastSpecifier.se + 1)}`
        return ret
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.error(e.message)
        }
        return source
      }
    },
  }

  return plugin
}
