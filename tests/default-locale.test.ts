import { rollupBuild } from '@sxzz/test-utils'
import { describe, expect, test } from 'vitest'
import plugin from '../src/rollup'

describe('defaultLocale', () => {
  test('still injects component styles', async () => {
    const { snapshot } = await rollupBuild(
      `${import.meta.dirname}/fixtures/basic.ts`,
      plugin({ useSource: true, defaultLocale: 'de' }),
      { external: () => true },
    )
    expect(snapshot).toContain('element-plus/es/components/button/style/index')
    expect(snapshot).toContain('element-plus/es/components/col/style/index')
  })
})
