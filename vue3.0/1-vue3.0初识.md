

# vue3.0

[TOC]

**简介**

2020-9-19  跟新正式版

## 1、新特性

**1、使用渐进式开发，向下兼容**

**2、性能提升：**

​	打包大小减少41%

​	初次渲染快55%

​	更新快133%

​	内存使用减少54%

**3、Compostion API **

解决：vue2复杂组件的开发，更便于维护

**4、新的API加入**

​	teleport 瞬移组件

​	suspense 解决异步加载组件问题

**5、更好的TyoeScript支持**

# vue-cli 构建项目

## 1、安装/更新（推荐使用npm,有vue指令）

`npm intall -g @vue/cli`

或者

`yarn global add @vue/cli`

## 2、查看版本

`vue --version`

## 3、创建

`vue create vue3-1`

构建推荐使用yarn更快速

问题：在vscode目录下无法创建，cmd的方式可以

vue : 无法加载文件 D:\nodejs\node_global\vue.ps1，因为在此系统上禁止运行脚本。

![image-20210220210915928](C:\Users\26910\AppData\Roaming\Typora\typora-user-images\image-20210220210915928.png)

## 4、图形构建方式



`vue ui`

# 使用

启动

`cnpm run serve`

## 1、setup

相当于vue2.0中的data和methods

## 2、return

将需要在template中使用的数据、方法,return出去

## 3、ref和reactive（）

### 3.1ref

在template中使用的数据、方法，必须用ref包裹，读取时需要<u>.value</u>

```js
import { ref } from "vue";
```

**data**

```js
const girls = ref(["大脚", "刘英", "晓红"]);
```

**methods**

```js
const selectGirlFun = (index: number) => {
    selectGirl.value = girls.value[index];
};
```

### 3.2reactive()

*import { reactive, toRefs } from "vue";解决需要一个一个retun出去需要在模板中引用的方法和变量*

```js
import {reactive } from "vue";
```

## 4、 toRefs()

*解决使用reactive（）函数retun出去的数据data，在使用data对象内部的数据时，需每个变量前加一个data*

```js
import { reactive, toRefs } from "vue";
```

## 5、钩子函数

```js
import {
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
} from "vue";
```

## 6、watch

```js
import {... , watch} from "vue"
```