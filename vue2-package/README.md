# vue3-root

- [vue2-英文-官网](https://v2.vuejs.org/)
- [vue2-中文-快速开始](https://v2.cn.vuejs.org/v2/guide/)
- [vue2-英文-快速开始](https://v2.vuejs.org/v2/guide/)

本项目是基于 **`vue2`** 框架集成各种前端组件示例。

## 目录结构

- [Vue2项目结构介绍.md](docs/Vue2项目结构介绍.md)

## 基础环境

- 确保你安装了最新版本的 [Node.js](https://nodejs.org/)

验证环境：

```shell
node -v
npm -v
```

本地环境验证示例：

```shell
# 本地采用的版本示例
node -v
v18.16.0
npm -v
9.5.1
```

## 快速开始

Vue2 创建项目有很多种方式，这里演示的是：

- 使用 webpack 创建项目(提供命令行创建项目)

### 使用 webpack 创建项目

#### 全局安装

```shell
# 安装 Vue CLI（如果尚未安装）
npm install -g @vue/cli
npm install -g @vue/cli-init

# 安装 webpack（如果尚未安装）
npm install -g webpack
```

#### 创建项目

```shell
vue init webpack vue2-project-webpack
``` 

![使用webpack创建项目.png](./docs/使用webpack创建项目.png)