# vite-plugin-element-plus

[English](README.md) | [中文](README.zh-CN.md)

这个仓库是用于 `ElementPlus` 相关的 [Vite](https://vitejs.dev/) 插件工具

## 安装

```bash
npm i vite-plugin-element-plus -D
```

## 使用

vite.config.js:

```javascript
import importElementPlus from 'vite-plugin-element-plus'

export default {
  plugins: [
    importElementPlus(),
  ],
}

// or
export default {
  plugins: [
    importElementPlus({
      useSource: true
    }),
  ],
}
```

app code:

```javascript
import { ElButton } from '@element-plus/components'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from '@element-plus/components'
import '@element-plus/theme-chalk/el-button.css'
```

## 选项

### `useSource`

default: `false`

```javascript
// useSource: false
import { ElButton } from '@element-plus/components'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from '@element-plus/components'
import '@element-plus/theme-chalk/el-button.css'

// useSource: true
import { ElButton } from '@element-plus/components'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from '@element-plus/components'
import '@element-plus/theme-chalk/src/button.scss'
```
