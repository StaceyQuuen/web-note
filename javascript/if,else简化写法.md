## 1、赋值简化写法

```
let orderStatus = ''
 
if (res.data.status == '1') {
    orderStatus = '待付款'
} else if (res.data.status == '2') {
    orderStatus == '待发货'
} else if (res.data.status == '3') {
    orderStatus == '已发货'
} else if (res.data.status == '4') {
    orderStatus == '待收货'
} else if （res.data.status == '5'）{
    orderStatus == '已完成'}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

可以简写为：

```
let orderStatus
let map = { '1': '待付款', '2': '待发货', '3': '已发货', '4': '待收货','5':'已完成'}
orderStatus = map[res.data.status]
```