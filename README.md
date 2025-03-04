# vue.js 学习



### 一、环境搭建

##### 安装node.js 

> 参考：windwos node.js 一直默认安装, nodejs默认带npm

```python
#查看
node -v
npm -v

#配置npm镜像为国内的cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm -v
```

##### 安装vue-cli

```python
#安装vue
cnpm install --g vue-cl
cnpm i -g @vue/cli-init
# vue ui 命令没有反应，则重新安装vue
cnpm install -g @vue/cli
```

##### 安装webpack

```python
#打包
cnpm install -g webpack
```



### 二、项目创建

##### 可视化方式-推荐

> 可视化方式创建项目速度，取决网速快慢

```cmd
# cmd 随便找个存放项目的目录
vue ui
```

##### 命令行方式

```cmd
# cmd
vue init webpack 项目名称
```

### 三、项目运行

##### 可视化方式

```
# cmd 项目的目录
vue ui
```

##### 命令行方式

```
npm run serve
npm run dev
```

##### 其它工具-如-vscode

```python
# 
```
