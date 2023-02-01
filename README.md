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

[![Unit Test](https://github.com/element-plus/unplugin-element-plus/actions/workflows/unit-test.yml/badge.svg)](https://github.com/element-plus/unplugin-element-plus/actions/workflows/unit-test.yml)

[English](README.md) | [中文](README.zh-CN.md)

This repo is for element-plus related [unplugin](https://github.com/unjs/unplugin). Thanks [@antfu](https://github.com/antfu).

###### Features

- 💚 On-demand import style for Element Plus.
- 🌎 Replace default locale.
- ⚡️ Supports Vite, Webpack, Vue CLI, Rollup, esbuild and more, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.

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
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [
    require('unplugin-element-plus/esbuild')({
      // options
    }),
  ],
})
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

//    ↓ ↓ ↓ ↓ ↓ ↓

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

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'

// useSource: true
import { ElButton } from 'element-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/index'
```

### `lib`

Normally you wouldn't use this option but as a general option we exposed it anyway.
When using this your bundle structure should be the same as ElementPlus.
See [unpkg.com](https://unpkg.com/element-plus) for more information.

```ts
type Lib = string
```

default: 'element-plus'

```javascript
// lib: 'other-lib'
import { ElButton } from 'other-lib'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'other-lib'
import 'other-lib/es/components/button/style/css'
```

### `format`

```ts
type Format = 'esm' | 'cjs'
```

default: 'esm'

`esm` for `element-plus/es/components/*`

`cjs` for `element-plus/lib/components/*`

- `/es` for ES Module
- `/lib` for CommonJS

This option is for which format to use

```javascript
// format: 'cjs'
import { ElButton } from 'element-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/lib/components/button/style/css'
```

### `prefix`

```ts
type Prefix = string
```

```javascript
// prefix = Al
import { AlButton } from 'xx-lib'
```

### `ignoreComponents`

```ts
type IgnoreComponents = string[]
```

Skip style imports for a list of components. Useful for Element Plus components which do not have a style file.
At the time of writing, this is only the `AutoResizer` component.

```javascript
// format: 'cjs'
import { ElAutoResizer } from 'element-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElAutoResizer } from 'element-plus'
```

### `defaultLocale`

Replace default locale, you can find locale list [here](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang).

## Alternate

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
