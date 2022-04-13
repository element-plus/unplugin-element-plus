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

这个仓库是用于 `Element Plus` 相关的 [unplugin](https://github.com/unjs/unplugin) 插件工具。感谢 [@antfu](https://github.com/antfu)。

###### 功能

- 💚 为 Element Plus 按需引入样式。
- 🌎 替换默认语言。
- ⚡️ 使用 <a href="https://github.com/unjs/unplugin">unplugin</a> 以支持 Vite, Webpack, Vue CLI, Rollup, esbuild 等。

## 安装

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

## 使用

插件会自动转换：

```javascript
import { ElButton } from 'element-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
```

## 选项

### `useSource`

```ts
type UseSource = boolean
```

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

一般这个是用不到的，不过作为一个通用选项，还是暴露了出来，如果有用到这个的结构一定要和
ElementPlus 的输出包结构一致，详见 [unpkg.com](https://unpkg.com/element-plus)

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

### format

```ts
type Format = 'esm' | 'cjs'
```

default: 'esm'

`esm` 对应 `[lib]/es/components/*`

`cjs` 对应 `[lib]/lib/components/*`

- `/es` 对应 ES Module 输出
- `/lib` 对应 CommonJS 的输出

使用该选项来选择使用哪一个包。

```javascript
// format: 'cjs'
import { ElButton } from 'element-plus'

//    ↓ ↓ ↓ ↓ ↓ ↓

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

### `defaultLocale`

替换默认语言，你可以 [在这](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang) 查看所有语言列表。

## 其他插件

- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
