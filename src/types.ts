import type { FilterPattern } from '@rollup/pluginutils'

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

  lib: string
  prefix: string
  format: 'cjs' | 'esm'
  sourceMap: boolean
}
