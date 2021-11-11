`cnpm i html2canvas --save`

`import html2canvas from "html2canvas"`

```javascript
/**
     * 下载截图
     */
    screenshots() {
      // html2canvas是根据body进行截图，若内容高度高于body时,即body出现滚动条时，截图不完整，因此需要先将body置顶，再截图
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      // 导出之前将要导出的截图HTML的内容的overflow：auto设置成visible
      document.getElementById("imageWrapper").style.overflow="visible"
      document.getElementById("imageWrapper").style.height="auto"
      //开始截图
      html2canvas(document.getElementById("imageWrapper"), {
        backgroundColor: "white",
        useCORS: true, //支持图片跨域
        scale: 2, //设置放大的倍数
      }).then((canvas) => {
        // 通过a链接下载
         const link = document.createElement('a')
          link.href = canvas.toDataURL()
          link.setAttribute('download', '编码结构' + '.png')
          link.style.display = 'none'
          document.body.appendChild(link)
          link.click()
      });
      document.getElementById("imageWrapper").style.overflow="auto"
      document.getElementById("imageWrapper").style.height="452px"
    },
```

