# vue3-ts-cms

## 1. Project setup

```shell
npm install
```

### 1.1 Compiles and hot-reloads for development

```shell
npm run serve
```

### 1.2 Compiles and minifies for production

```shell
npm run build
```

### 1.3 Lints and fixes files

```shell
npm run lint
```

### 1.4 Format all files

```shell
npm run prettier
```

### 1.5 Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 2. 项目编码规范

### 2.1 文件命名的规范

- 文件夹：统一为小写，多个单词使用短横线（-）分隔。
- 文件（.ts .vue .json .d.ts）：统一为小写，多个单词使用短横线分隔。

### 2.2 Vue.js 组件编写规范

- 组件的文件：统一为小写，多个单词使用短横线分隔。
- 组件的目录结构：例如，button 组件目录 button/src/index.vue ，统一由 button/index.ts 导出。
- 组件导包顺序：依次为 Vue.js 技术栈、第三方工具函数、本地组件、本地工具函数。
- 组件的名称：统一以大写开头，即驼峰命名。
- 组件属性顺序：name -> components -> props -> emits -> setup 等。
- template 标签：统一为小写，多个单词使用短横线分隔，例如`<case-panel/>`。
- template 标签属性顺序：v-if -> v-for -> ref -> class -> style -> ... -> 事件。
- 组件的 props：以小写开头，即驼峰命名。必必须编写类型与默认值。
- 组件的样式：添加作用域 scoped，类名统一为小写，多个单词使用短横线分隔。
