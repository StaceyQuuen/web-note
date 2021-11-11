let obj = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  },
  {
    id: 2,
    name: 'C'
  },
  {
    id: 4,
    name: 'D'
  },
]
let obj2 = [
  {
    id: 5,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  },
  {
    id: 2,
    name: 'C'
  },
  {
    id: 6,
    name: 'D'
  },
]
// this.checkList2.filter( item => {
//   if (this.curProp2 == item.colname) {
//     this.conList.push(item)
//   }
// })
// if(selectedVariables.colnamesXList.some(obj=>obj == item.colname)){
//   return item
// }
// 取两个数组的交集
// 方法1
let obj3 = obj.filter(item=>{
  for(let obj of obj2) {
    if(obj.id == item.id) {
      return item
    }
    // return obj.id == item.id //这个写法错误
  }
})
console.log(obj3)
//方法2
let obj4 = obj.filter(item=>{
  return obj2.some(item2=>item2.id==item.id)
})
console.log(obj4)


let obj5 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  },
  {
    id: 3,
    name: 'C'
  },
  {
    id: 4,
    name: 'D'
  },
]
let obj6 = [
  {
    id: 1,
    name: 'A'
  },
  {
    id: 2,
    name: 'B'
  },
]
let obj7 = {
  id: 3,
  name: 'C'
}
let obj8 = obj5.filter(item =>{
  if(obj6.some(obj=>obj.id == item.id)||item.id==obj7.id){
  }else {
    return item
  }
}) 
console.log(obj8, '=======>')