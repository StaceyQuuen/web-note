let hasItemVisual = ['singleselect', 'multiselect', 'dropdown', 'assignment', 'sort']  //单选题、多选题、下拉、填空、排序
let str = 'singleselect'
console.log(hasItemVisual.includes(str))

let boolean = hasItemVisual.some(item=>item == str)
console.log(boolean)