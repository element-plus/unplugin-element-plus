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
import { ElButton } from 'element-plus'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
```

## Options

### `useSource`

```ts
type UseSource = boolean
```

default: `false`

```javascript
// useSource: false
import { ElButton } from 'element-plus'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

// useSource: true
import { ElButton } from 'element-plus'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/index'
```

### `lib`

Normally you wouldn't use this option but as a general option we exposed it anyway.
When using this your bundle structure should be the same as ElementPlus.
See [unpkg.com](https://unpkg.com/element-plus) for more information

```ts
type Lib = string
```

default: 'element-plus'

```javascript
// lib: 'other-lib'
import { ElButton } from 'other-lib'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'other-lib'
import 'other-lib/es/components/button/style/css'
```

### format

```ts
type Format = 'esm' | 'cjs'
```

default: 'esm'

**esm** for `[lib]/es/components/*`
**cjs** for `[lib]/lib/components/*`

- /es for ES Module 输出
- /lib for commonJS 的输出

This option is for which format to use

```javascript
// format: 'cjs'
import { ElButton } from 'element-plus'

      ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/lib/components/button/style/css'
```

### prefix

```ts
type Prefix = string
```

```javascript
// prefix = Al
import { AlButton } from 'xx-lib'
```
