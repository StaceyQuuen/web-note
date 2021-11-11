学习文档：https://jspang.com/detailed?id=63#toc226

1、安装

```js
npm install typescript -g
```

```js
yarn global add typescript
```

2、编译ts文件

（1）ts文件转js文件，然后node js

​		`tsc demo.ts`

（2）`npm install -g ts-node`安装ts-node 通过`ts-node demo.ts`编译

3、

（1）type 定义类型别名

```js
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "刘英", age: 18 },
  { name: "谢大脚", age: 28 },
];
```

（2）接口

```js
interface Girl {
  name: string;
  age: number;
  bust: number;
}
```

有了接口后，我们的程序也要作一些修改，需要写成下面的样子。这样就更像是面向对象编程了。

```js
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
};

screenResume(girl);
getResume(girl);
```

4、可选值定义

```js
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
}
```

类型注释只能在typescript中使用
