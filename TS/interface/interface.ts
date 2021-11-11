interface labelValue {
  label: string
  isComplete?: boolean,
  readonly x: number
}

function printLabel1(labelledObj: labelValue) {
  console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: "Size 10 Object",x: 1};
printLabel1(myObj1);

let p1: labelValue = {label: '你好', isComplete: false, x: 12}
// p1.x = 12