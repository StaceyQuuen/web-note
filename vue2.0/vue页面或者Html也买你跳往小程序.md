# 1、引用插件

```javascript
 <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
```

#  2、跳转

```javascript
methods: {
    toback(){
        wx.miniProgram.switchTab({
            url: '/pages/survey/survey',
        });
    }
}
```

