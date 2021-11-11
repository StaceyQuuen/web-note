html文件

1、this在全局环境下，无论说严格模式下，还是非严格模式下，均指向window（浏览器这一宿主对象）

2、在普通函数中，在非严格模式下，函数内部的this指向调用函数的对象，在严格模式下，函数内部的this为undefined

js文件

1、this在全局环境下指向module.exports这一空对象，即module.exports === this