import { type ImportSpecifier, init, parse } from 'es-module-lexer'
import MagicString from 'magic-string'
import { type Options } from '../types'

type FormatType = 'cjs' | 'esm'

const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str: string) =>
  str.replaceAll(hyphenateRE, '-$1').toLowerCase()

const formatMap = {
  cjs: 'lib',
  esm: 'es',
}

const multilineCommentsRE = /\/\*\s(.|[\n\r])*?\*\//gm
const singlelineCommentsRE = /\/\/\s.*/g

function stripeComments(code: string) {
  return code
    .replaceAll(multilineCommentsRE, '')
    .replaceAll(singlelineCommentsRE, '')
}

export const transformImportStyle = (
  specifier: ImportSpecifier,
  source: string,
  useSource = false,
  options: {
    prefix: string
    lib: string
    format: FormatType
    ignoreComponents: string[]
  }
) => {
  const { prefix, lib, format, ignoreComponents } = options
  const statement = stripeComments(source.slice(specifier.ss, specifier.se))
  const leftBracket = statement.indexOf('{')
  if (leftBracket > -1) {
    // remove { } to get raw imported items. Maybe this will fail since there could be
    // special cases
    const identifiers = statement.slice(leftBracket + 1, statement.indexOf('}'))
    const components = identifiers.split(',')
    const styleImports: string[] = []
    components.forEach((c) => {
      const trimmed = c.replace(/\sas\s.+/, '').trim()
      if (trimmed.startsWith(prefix)) {
        const component = trimmed.slice(prefix.length)
        if (ignoreComponents.includes(component)) return
        if (useSource) {
          styleImports.push(
            `import '${lib}/${formatMap[format]}/components/${hyphenate(
              component
            )}/style/index'`
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

export const transformStyle = async (source: string, options: Options) => {
  const { useSource, lib, prefix, format, ignoreComponents } = options

  if (!source) return

  await init

  const specifiers = parse(source)[0].filter(({ n }) => {
    return (
      n === lib || n === `${lib}/es/components` || n === `${lib}/lib/components`
    )
  })
  if (specifiers.length === 0) return
  const styleImports = specifiers
    .map((s) => {
      const ret = transformImportStyle(s, source, useSource, {
        lib,
        prefix,
        format,
        ignoreComponents,
      })
      return ret
    })
    .filter((s) => s)
    .join('\n')

  const lastSpecifier = specifiers.at(-1)!

  const s = new MagicString(source)
  s.appendLeft(lastSpecifier.se + 1, `\n${styleImports}\n`)

  return {
    code: s.toString(),
    get map() {
      return s.generateMap({ hires: true, includeContent: true })
    },
  }
}
