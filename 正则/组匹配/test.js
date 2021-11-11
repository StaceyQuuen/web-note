// 非捕获组匹配
let reg = /(foo){1,2}/
let str = 'foofoo'
console.log(str.match(reg))

// [ 'foofoo', 'foo', index: 0, input: 'foofoo', groups: undefined ]

let reg1 = /(?:foo){1,2}/
let str1 = 'foofoo'
console.log(str1.match(reg1))
// [ 'foofoo', index: 0, input: 'foofoo', groups: undefined ]