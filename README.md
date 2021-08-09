# vite-plugin-element-plus

[English](README.md) | [中文](README.zh-CN.md)

This repo is for element-plus related [Vite](https://vitejs.dev/) plugin

## Install

```bash
npm i vite-plugin-element-plus -D
```

## Usage

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

## Options

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
