// console.log(this)
console.log(module.exports)
console.log(module.exports === this)
module.exports.a = 1
console.log(this.a)