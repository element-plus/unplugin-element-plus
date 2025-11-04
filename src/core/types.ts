import type { FilterPattern } from 'unplugin'

export type Options = {
  /**
   * RegExp or glob to match files to be transformed
   */
  include: FilterPattern

  /**
   * RegExp or glob to match files to NOT be transformed
   */
  exclude: FilterPattern

  useSource: boolean

  /** replace default locale */
  defaultLocale: string

  /**
   * Array of component names that will not be transformed.
   * Can be useful for components that do not have an associated style file.
   * Do not include the prefix in the name.
   */
  ignoreComponents: string[]

  lib: string
  prefix: string
  format: 'cjs' | 'esm'
  sourceMap: boolean
}
