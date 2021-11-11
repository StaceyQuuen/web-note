ES6

[TOC]



# 严格模式

## 使用‘use strict’
1、在js脚本范围内使用
2、在函数范围内使用
## 作用特性
1、全局变量必须用var声明
2、构造函数必须使用new关键字实例化对象
3、函数声明必须在最顶层
4、新增了一些关键字
5、禁止自定义函数的this指向window对象
6、对象的属性不可以重复声明，否则会覆盖
# 拓展

## JSON方法拓展
1、json对象转化为js对象

```handlebars
JSON.parse(jsonObj);
```
2、js对象转化为json对象

```handlebars
JSON.stringify(jsObj);
```

## Object对象的拓展
js对象本身就自带有设置和获取属性值的方法

```handlebars
var obja = {
	firstName: "晴",
	lastName: "王",
	get fullName(){
		return this.lastName+'-'+this.firstName
	}
	set fullName(data) {
		let names = data.split('-')
		this.lastName = names[0]
		this.firstName = names[1]
	}
}
```
方法1、将已有对象变为新对象的原型

```handlebars
var obj2 = Object.create(obj1,{
	descriptors；	
 //description包括4个属性值-
 //1. value值
 //2. writable是否可修改，默认为false,不可修改
 //3. configurable是否可删除，默认为false,不可删除
 //4. enumerable是否可用for in 枚举，默认为false,不可枚举
})
```
方法2、设置并获取对象的属性值

```handlebars
var objA = {
	firstName: "晴",
	lastName: "王"
	}
	Object.defineProperties(objA,{
	fullName: {
		get: function(){
			// 这里的this指的是objA
			return this.lastName+"-"+this.firstName;
			
		},
		set: function(data){
			var names = data.split("-")
			this.firstName = names[1]
			this.lastName = names[0]
		}
	}
})
```
3、比较两个字符串是否相等

```handlebars
Object.is(v1,v2)；
```
4、合并对象（源对象覆盖目标对象）

```handlebars
Object.assign(目标对象，源对象，源对象)
```
5、`__proto__`属性

```handlebars
objb.__proto__ = obja;
```
## String字符串拓展

 1. str.includes('a');
 2. str.startsWith('a');
 3. str.endsWith('f');
 4. str.repeat(5);	//重复5次字符串

## Number数值扩展

 1. Number.parseInt('123abc');
 2. Number.trunc(3.21);	//取整数部分
 3. Number.isFinite(Infinity);	//判断是否是整数。
 4. Number.isNaN(NaN);
 5. Nmuber.isInteger(5);

## Symbol

Symbol是ES6为JavaScript添加的第7种数据类型

 1. undefined
 2. null
 3. boolean
 4. string
 5. number
 6. object
 7. symbol

```handlebars
let mySymbol = Symbol();
```
**特性：**
1、通过【】给对象obj添加Symbol属性
2、2.for in,for of 不会遍历Symbol属性
3、通过给Symbol属性传参来区分不同的Symbol属性
## 函数的扩展

bind()

 面试题：call()、apply()和bind()的**相同点**：都是禁止this指向window
**区别:** call()、apply()为立即执行函数，bind不是

1、箭头函数
2、拓展运算符
	**作用1：**当函数的参数不确定是几个的时候，就在参数名前面加...，注意这样的拓展运算符参数后，不可再有其他的参数，否则会报错
	

```handlebars
var fn5 = (...arg) => {
	console.log(arg[0]);
	  console.log(arg[1]);
	  console.log(arg[2]);
	  console.log(arg[3]);
  }
 fn5(1,2,3);
```
	**作用2：**当一个数组赋值给另一个数组时，使用拓展运算符，可以开辟一个新的内存空间，而不是只有指针指向内存地址
```handlebars
let arr3 = ["胡歌","刘亦菲","邓超","孙俪"];
let arr4 = [...arr3];
arr4.push("吴奇隆");
console.log(arr3);
console.log(arr4);
```

3、rest运算符
除去前边确定的参数之后，剩余不确定的参数个数用...arg表示，同时可使用arg.length在调用函数时，求剩余参数的个数

## 数组的扩展

# ES6的变量
## 变量声明
let和const不可重复声明同一个变量，都可以支持块级作用域
1、**let**:用let变量声明的变量可修改
2、**const**:用const声明的变量不可修改
## 变量的解构赋值
**1、数组的解构赋值**
undefined相当于没有值，null相当于有值（只不过是空值），而结构赋值采用，无值时，用有值，都有值，就覆盖
```handlebars
let [A="a",B="b",C="c"] = [1,undefined,null];
console.log(A);	//输出1
console.log(B);	//输出b
console.log(C);	//输出null
```

**2、对象的解构赋值**

```handlebars
let {aa,bb} = {aa: "A",bb: "B"}
```
```handlebars
//注意：如果在解构赋值之前，已经声明了某一变量的值，就会报错，需要在解构赋值的最外层加“圆括号”
let foo = "1";
({foo} = {foo: 2});
```
**3、字符串的解构**

```handlebars
let [aaa,bbb,ccc]="ABCD";
```



# 模板字符串

# promise到async-await

async-await可以取代Promise对象的异步操作

## promise

```handlebars
var P1 = new Promise((resolve,reject)=>{
	if(true){
		resolve('成功')；
	}else{
		reject('失败');
	}
})
//创建成功的Promise对象
var pSuccess = Promise.resolve('成功');
//创建失败的Promise对象
var pFaile = Promise.reject('失败');
```


 1. **p1.then()**

```handlebars
p1.then(function(res){
	console.log(res);	//获取Promise对象返回的成功数据，即resolve中的内容；
 },function(rej){
 	console.log(rej);	//返回Promise对象返回的失败数据，即reject中的内容；
 })
```
2. **p1.catch()**

```handlebars
p1.catch(error){
	console.log(error);
}
```
3.**p1.finally(a)**

```handlebars
p1.finally(a){
	console.log(a);	//a输出为undefined,因为finally方法无参数，该方法无实际意义
}
```
4.**Promise.all(arr)**
将Promise对象的所有数据存储在arr数组中，所有的异步操作(同时请求多个数据)全部完成时

```handlebars
var all = Promise.all(arrPromise);
all.then(function(res){
	console.log(res);
});
```
5.**Promise.race(arr)**
只要有一个异步完成时

```handlebars
var race = Promise.race(arrRace);
race.then(function(res){console.log(res);});
```

## async和await

```handlebars
async function changeColor(){
	try{
		let n1 = await fnPromise1();	//fnPromise1()函数必须返回的是一个Promise对象，这样才可以通过await获得Promise对象中的resolve中的成功数据,或者是reject中的失败数据；
		let n2 = await fnPromise2();
		console.log(n1);
		console.log(n2);
	}catch (e){
		console.log(e);
	}
}
changeColor();
```
# 其他

## for in和for of

1、for...of循环数组的值

```handlebars
var arr= [1,2,3,4];
for(let value of arr){
	console.log(value);
}
```
2、for...in循环数组的index索引值

```handlebars
for(k in obj2){
	console.log(k)	//输出属性名；
	console.log(obj2[k]);	//输出属性值
}
```

## 异步对象有哪些

1、

```handlebars
var img = new Image();
img.scr='#';
img.onload = function(){}
```

## eval

```javascript
eval("this.show"+tab+"="!this.show"+tab)
```

