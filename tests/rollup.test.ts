import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import { describe } from 'vitest'
import plugin from '../src/rollup'

describe('rollup', async () => {
  await testFixtures(
    'fixtures/*.{vue,js,ts}',
    async ({ useSource }, id) => {
      const { snapshot } = await rollupBuild(
        id,
        plugin({
          useSource,
          ignoreComponents: ['AutoResizer'],
        }),
        { external: () => true },
      )
      return snapshot
    },
    {
      promise: true,
      cwd: import.meta.dirname,
      params: [['useSource', [true, false]]],
    },
  )
})
