import { FilterPattern } from '@rollup/pluginutils'

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
  defaultLocale: string
  lib: string
  prefix: string
  format: 'cjs' | 'esm'
  sourceMap: boolean
}
