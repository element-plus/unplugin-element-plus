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
import { ElButton } from 'element-plus'

      ↓ ↓ ↓ ↓ ↓ ↓

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

一般这个是用不到的，不过作为一个通用选项，还是暴露了出来，如果有用到这个的结构一定要和
ElementPlus 的输出包结构一致，详见 [unpkg.com](https://unpkg.com/element-plus)

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

**esm** 对应 `[lib]/es/components/*`

**cjs** 对应 `[lib]/lib/components/*`

- /es 对应 ES Module 输出
- /lib 对应 commonJS 的输出

使用该选项来选择使用哪一个包。

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
