<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/unplugin-element-plus">
    <img src="https://img.shields.io/npm/v/unplugin-element-plus.svg">
  </a>
  <a href="https://npmcharts.com/compare/unplugin-element-plus?minimal=true">
    <img src="http://img.shields.io/npm/dm/unplugin-element-plus.svg">
  </a>
  <br>
</p>

# unplugin-element-plus

[English](README.md) | [中文](README.zh-CN.md)

This repo is for element-plus related [unplugin](https://github.com/unjs/unplugin). Thanks [@antfu](https://github.com/antfu).

###### Features

- 💚 On-demand import style for Element Plus.
- ⚡️ Supports Vite, Webpack, Vue CLI, Rollup and more, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.

## Installation

```bash
npm i unplugin-element-plus -D
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import ElementPlus from 'unplugin-element-plus/vite'

export default {
  plugins: [
    ElementPlus({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import ElementPlus from 'unplugin-element-plus/rollup'

export default {
  plugins: [
    ElementPlus({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-element-plus/webpack')({
      // options
    }),
  ],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
    ],
  },
}
```

<br></details>

## Usage

It will automatically transform:

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

## Alternate

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
