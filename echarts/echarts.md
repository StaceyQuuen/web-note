1、横轴文字倾斜

```javascript
xAxis: {
    axisLabel:{
        interval:0,//横轴信息全部显示
        rotate:60,//度角倾斜显示
        formatter:function(value){//只显示五个字 其余省略号
            return value.length > 8?			value.substring(0,8)+'...':value;
    }
},
},
```

2、横坐标文字显示不全

```javascript
grid: {
    top:"50px",
    left:"50px",
    right:"15px",
    bottom:"100px"
}
```

3、柱状图，柱宽自适应

```javascript
series: [{
    barMaxwidth : 30,//柱图宽度
}],
```

4、重命名图片

**参考链接**https://blog.csdn.net/qq_38974638/article/details/107255989

```javascript
toolbox: {
    show: true,
        feature: {
        saveAsImage: {
        show:true,
        excludeComponents :['toolbox'],
        pixelRatio: 2,
        name: '词频统计'
        }
    },
},
```

