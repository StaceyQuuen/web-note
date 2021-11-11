let reg = /a/g
// 0,1,3,6,9
// 0  
// 1  a
// 3  aba
// 5  abava
// 8  abavacsa
// 11 abavacsacsa
// 0
let str = 'abavacsacsa'
console.log(reg.lastIndex)
console.log(reg.test(str))
console.log(reg.lastIndex)
reg.test(str)
console.log(reg.lastIndex)
reg.test(str)
console.log(reg.lastIndex)
reg.test(str)
console.log(reg.lastIndex)
reg.test(str)
console.log(reg.lastIndex)
reg.test(str)
console.log(reg.lastIndex)

reg.lastIndex = 12
console.log(reg.lastIndex)

// let count = 0
// while(/a/g.test('babaa')) count++

console.log(reg.source)

