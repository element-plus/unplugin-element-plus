import escapeStringRegexp from 'escape-string-regexp'
import { type Plugin } from 'esbuild'
import { type Options } from '../index'

export function getLocaleRE(options: Options): RegExp {
  return new RegExp(
    `${escapeStringRegexp(`${options.lib}/`)}(es|lib)${escapeStringRegexp(
      '/hooks/use-locale/index'
    )}`
  )
}

export function transformDefaultLocale(
  options: Options,
  source: string,
  id: string
): string | undefined {
  if (!id.match(getLocaleRE(options))) return
  return source.replace(
    'locale/lang/en',
    `locale/lang/${options.defaultLocale}`
  )
}

export function getViteDepPlugin(options: Options): Plugin {
  const localeImporterRE = new RegExp(
    `${escapeStringRegexp(
      `node_modules/${options.lib}/`
    )}(es|lib)${escapeStringRegexp('/hooks/use-locale/index')}`
  )
  const localePath = '/locale/lang/en'
  const localePathFixed = `/locale/lang/${options.defaultLocale}`

  return {
    name: 'unplugin-element-plus:default-locale',
    setup(build) {
      build.onResolve(
        {
          filter: new RegExp(escapeStringRegexp(localePath)),
          namespace: 'file',
        },
        ({ path, importer, kind, resolveDir }) => {
          if (localeImporterRE.test(importer))
            return build.resolve(path.replace(localePath, localePathFixed), {
              importer,
              kind,
              resolveDir,
            })
        }
      )
    },
  }
}
