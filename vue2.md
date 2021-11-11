[TOC]



# 1、通信方式

边界情况 $parent $children $root $refs provide/inject 

非prop特性 $attrs $listeners

## （1）父子组件通信

	## （2）bus总线通信

main.js

```js
// 事件总线
Vue.prototype.$bus = new Vue();
```

child1.vue

```js
this.$bus.$on('event-from-child2', msg => {
        console.log('Child1:', msg);
 });
```

child2.vue

```js
// 利用事件总线发送事件
this.$bus.$emit('event-from-child2', 'some msg from child2')
```



## （3）provide和inject

```js
 provide() {
    return {
      form: this	//this代表整个vue组件
    };
  },
```

```js
 inject: ["form"]
```



# 2、插槽

## （1）匿名插槽 

## （2）具名插槽

slot分发的内容在vue中只能通过*`<template>`*模板分发

```vue
 <template *v-slot:header*>开课吧全栈</template>
```

## （3）作用域插槽

slot 分发的内容在 vue 中只能通过*`<template>`*模板分发

```vue
  <template *v-slot*:*footer*="{fc}">{{fc}}</template>
```



