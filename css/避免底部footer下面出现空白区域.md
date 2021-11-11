```html
<div id="page">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
</div>
```

```css
注意：因为默认的100vh,是不包含padding的内容，所以要添加
* {
  box-sizing: border-box;
}
1、顶级父类page
{	
    display: flex;
    flex-derection: column,
    justify-content: space-between;
    min-height: 100vh
}
2、头部和底部给固定高度
.header,.footer {
    height: 60px;
}
3、content {
    flex: 1;
}
```

**拓展： box-size样式属性的应用**