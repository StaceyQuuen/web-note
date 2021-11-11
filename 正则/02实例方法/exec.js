let str = 'abcaabc'
let reg = /(a)/
console.log(reg.exec(str))
console.log(reg.exec(str).index)
console.log(reg.exec(str).input)
