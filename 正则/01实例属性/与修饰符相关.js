let reg = /a/igm
console.log(reg.ignoreCase)
console.log(reg.global)
console.log(reg.multiline)

//无作用为只读属性
reg.global = false
console.log(reg.global)