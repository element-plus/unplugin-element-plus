/* eslint-disable unicorn/prefer-string-replace-all */
import { resolve } from 'node:path'
import glob from 'fast-glob'
import { describe, expect, it } from 'vitest'
import { rollup } from 'rollup'
import plugin from '../src/rollup'

async function getCode(file: string, plugin: any) {
  const bundle = await rollup({
    input: [file],
    plugins: [plugin],
    external: () => true,
  })
  const output = await bundle.generate({ format: 'esm' })
  return output.output
    .map((file) => {
      if (file.type === 'chunk') {
        return file.code
      } else {
        return file.fileName
      }
    })
    .join('\n')
}

describe('transform', () => {
  describe('fixtures', async () => {
    const root = resolve(__dirname, '..')
    const files = await glob('tests/fixtures/*.{vue,js,ts}', {
      cwd: root,
      onlyFiles: true,
    })

    for (const file of files) {
      describe(file.replace(/\\/g, '/'), () => {
        const filepath = resolve(root, file)

        for (const useSource of [true, false]) {
          it(`useSource = ${useSource}`, async () => {
            const code = await getCode(
              filepath,
              plugin({
                useSource,
                ignoreComponents: ['AutoResizer'],
              })
            )
            expect(code).toMatchSnapshot()
          })
        }
      })
    }
  })
})
