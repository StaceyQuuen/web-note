[TOC]

对象是JavaScript的基本数据类型，对象的方法通常是继承的属性
对象是可变的
对象的值可以是任意值，在ES5中可以是setter和getter方法
对象的属性特性：可写、可枚举、可配置
定义
1、三类对象：内置对象、宿主对象、自定义对象
#属性

##  1、概念
两个属性：继承属性、自有属性
属性分类：数据属性、存取器属性
#1、存取器属性（getter和setter）
 getter和setter通过this.x会影响p.x的值
setter 为可写
getter为可取

```
var p = {
    x: 1.0,
    y: 1.0,
    get r() { 
        this.x = 2
        console.log(this.x,'get this.x')
        return Math.sqrt(this.x*this.x+this.y*this.y) 
    },
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x+this.y*this.y)
        var ratio = newvalue/oldvalue
        this.x *= ratio;
        this.y *= ratio
        console.log(this.x,'set this.x')
        console.log(this.y,' set this.y')
    },
    get theta() { return Math.atan2(this.y,this.x) }
}
console.log(p.x)
console.log(p.y)
console.log(p.r)    //p.x调用的为 set函数
console.log(p.x,'get外')
console.log(p.y,'get外')
p.r = 20             //p.r = 2  赋值语句调用的为get函数
console.log(p.x,'set外')
console.log(p.y, 'set外')
console.log(p.theta)
```
## 2、属性的特性描述

### **（1）获取自有属性描述**

#### Object.getOwnPropertyDescriptor

Object.getOwnPropertyDescriptor({x:1},'x')----获取某个对象特定的属性描述
// 数据属性

```
console.log(Object.getOwnPropertyDescriptor({x:1},'x')) 
//{ value: 1, writable: true, enumerable: true, configurable: true }
// 存储器属性
var random = {
    get octet(){
        return Math.floor(Math.random()*256)
    }
}
console.log(Object.getOwnPropertyDescriptor(random,"octet"))
//{get: [Function: get octet],set: undefined,enumerable: true,configurable: true}
```
### **（2）定义属性描述**

#### Object.defineProperty、Object.defineProperties

1、定义一个

```
var o = {}
// 数据属性
Object.defineProperty(o,"x",{value:1,writable: true,enumerable: false,configurable: true})
//存取器属性
Object.defineProperty(o,"x",{get: function(){return 0;}})
```
2、定义多个

```
var p = Object.defineProperties({},{
    x:{value:1,writable: true,enumerable: false,configurable: true},
    r:{get: function(){return 0;}
})


```
## 3、继承

**JavaScript的核心特征：原型式继承【属性】**
在继承时只会继承对象类型(内容为空)，但可以通过.或者[]的方式访问父类的属性
```
//inherit继承函数
function inherit(p){
    if(p==null) throw TypeError()
    if(Object.create) 
        return Object.create(p)
    var t = typeof p 
    if(t!=="object"&&t!=='function') throw TypeError()
    function f(){}
    f.prototype = p
    return new f()
}
// p=null
p = {name: '王晴'}
let obj = inherit(p)
console.log(obj)      //  输出为{}
console.log(obj.name)  //输出为王晴
```

## 4、创建对象常见的用法
### 4.1 对象直接量

```
let obj = {name: 'XXX'}
```
### 4.2 关键字New

```
let obj = new Object({name: 'xxx'})
```

### 4.3Object.create()

**用途**：继承某一原型
**拓展应用**
1、[创建空对象]

```
let obj1 = {}
let obj2 = new Object()
let obj3 = Object.create({})
let obj4 = Object.create(Object.prototype)
//不继承Obect的任何方法和属性
let obj5 = Object.create(null)
```
```
let obj = Object.create({x:1,y:2})
```
##  5、设置(set)
obj.name='XXX'
obj['name']='XXX'
#3、查找(query)
obj.name
obj['name']
**.和【】的使用区别**：
.后面的是标识符，是静态的、直接出现在代码中的，不可运算
【】是关联数组，是动态的、可以包裹属性，并通过字符串拼接，进行运算

```
let obj8 = {
    '2021-1-6': '3',
    '2021-1-7': '2',
    '2021-1-8': '2',
    '2021-1-9': '1',
    '2021-1-10': '0',
    '2021-1-11': '6',
}
var addr = ''
for(i=6;i<12;i++){
    addr+=obj8["2021-1-"+i]+'\n'
}
console.log(addr)
```
## 6、删除(delete)
**1、删除不干净，造成内存泄漏**

```
a={p:{x:1}}
b=a.p
delete a.p
// console.log(a)  //输出为{}
// console.log(b)  //输出为{x:1}
```
**2、删除干净**
```
c={x:1}
d=c
delete c.x
// console.log(c)  //输出为{}
// console.log(d)  //输出为{}
```
**3、delete返回的值为true(无论任何情况)**
```
o={x:1}
console.log(delete o.x)
console.log(delete o.x)
console.log(delete o.toString)
console.log(delete 1)
```
## 7、判断属性是在一个对象里
判断某个属性是否存在于某个对象中
### **7.1通过in运算符**
对于继承的属性返回true

```
var o = {x:1}
console.log("x" in o)            //true
console.log("y" in o)            //false
console.log("toString" in o)    //true
```
### **7.2通过hasOwnProperty()**
对于继承的属性返回false

```
var o1 = Object.create({y:2})
console.log(o1)                     //{}
o1.x = 1                            
console.log(o.hasOwnProperty("x"))  //true
console.log(o.hasOwnProperty("y"))  //false
console.log(o.hasOwnProperty("toString"))   //false
```
### 7.3 propertyIsEnumerable()**
对于继承的属性返回false,为自有属性且这个属性可枚举为true

```
var  o2 = Object.create({y:2})
o2.x = 1
console.log(o2.propertyIsEnumerable("x"))   //true
console.log(o2.propertyIsEnumerable("y"))   //false
console.log(Object.prototype.propertyIsEnumerable("toString"))  //false
```
### 7.4、in与！== undefined的区别**
！==判断一个属性是否为undefined;in不可以区分不存在的属性和存在但是值为undefined的属性

```
var o3 = {x:1}
console.log(o3.x !==undefined)          //true
console.log(o3.y !== undefined)         //false
console.log(o3.toString !== undefined)  //true
```
in可以区分不存在的属性和存在但是值为undefined的属性
```
var o4 = {x: undefined}
console.log(o4.x!==undefined)               //false
console.log(o4.y!==undefined)               //false
console.log("y" in o)                       //false
console.log("x" in o)                       //true

```
## 8、枚举属性(enumerate)

### 8.1 for in 可以遍历可枚举的自有属性以及继承属性

```
var obj = {x:{y:1}}
var obj2 = Object.create(obj)
for(let attr in obj2){
    // console.log(attr)
    // console.log(obj2[attr])
    // console.log(obj2.hasOwnProperty(attr))
}

// 应用1、跳过继承的属性和方法
function skipPropertyMethods(obj){
    for(let attr in obj){
        if(!obj.hasOwnProperty(attr)){
            continue
        }else {
            // console.log('attr',attr)
        }
    }
    for (let attr in obj){
        if(typeof obj.attr ==="function"){
            continue
        }else{
             
        }
    }
}
let obj3 = {x:1,y:2,z:3}
let obj4 = Object.create(obj3)
obj4.w = 4
skipPropertyMethods(obj4)

```
### 8.2 枚举属性名称Object.getOwnPropertyNames(obj5)、Object.keys(obj5)

```
let obj5 = {x:1,y:2}
console.log(Object.getOwnPropertyNames(obj5)) //[ 'x', 'y' ]
console.log(Object.keys(obj5)) //[ 'x', 'y' ]

```

## 9 检测一个对象是否是另一个对象的原型

### 9.1 p.isPrototypeOf(o)