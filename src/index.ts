import { Plugin, normalizePath } from 'vite'

const originPath = normalizePath('@element-plus/theme-chalk/el-')
const newPath = normalizePath('@element-plus/theme-chalk/src/')

const replaceComps = (src: string): string => {
  if (src.includes(originPath)) {
    const [, comp] = (/@element-plus\/theme-chalk\/el-([a-zA-Z\-]+).css/).exec(src) || []
    if (comp) {
      return replaceComps(src.replace(`${originPath}${comp}.css`, `${newPath}${comp}.scss`))
    }
  }
  return src
}

export default () => {
  const plugin: Plugin = {
    name: 'element-plus-scss-import',

    transform(src) {
      return {
        code: replaceComps(src),
      }
    },
  }

  return plugin
}
