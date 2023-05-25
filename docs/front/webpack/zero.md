## 初始化项目

首先是创建项目，创建一个名字为 `zero-config` 的文件夹，并且进入文件夹使用 `npm init` 进行初始化：

```bash
# 创建目录并且进入
mkdir zero-config && cd $_

# 初始化
npm init -y

# 安装 webpack 和 webpack-cli到开发依赖
npm i webpack --save-dev
npm i webpack-cli --save-dev
```

## 创建目录

新建 src 目录，放置我们的源码，目录结构如下：

```bash
└── src
 ├── hello.js
 ├── index.js
 └── world.js

```
