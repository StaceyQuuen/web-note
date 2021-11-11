let str = "includes(#{Q2.1.c1}, '1')"
let arr = []
let reg = /(?<={)(.*?)(?=})/
let reg_includes = /(?<=\()(.*?)(?=\))/
if(str.search(reg_includes) != -1) {
 arr = str.match(reg)[0].split(',')
}
let reg_question_num = 
console.log(arr)