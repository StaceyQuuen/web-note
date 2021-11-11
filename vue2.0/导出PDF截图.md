注意必须要等DOM加载完成
1、要截图的div中存在滚动条

```javascript
// 导出之前将dom的overflow：auto设置成visible
      this.$("#answerCheck-export").css({ "overflow-y": "visible", height: "auto" });
      this.$("#export-header").css({ "display": "block"});
      this.$("#app").css({ "overflow-y": "visible", height: "auto" });
      this.$("body").css({ "overflow-y": "visible", height: "auto" });

      // eslint-disable-next-line
      html2canvas(document.getElementById("answerCheck-export"), {
        backgroundColor: "white",
        useCORS: true, //支持图片跨域
        scale: 1, //设置放大的倍数
      }).then((canvas) => {
        var contentWidth = canvas.width;
        var contentHeight = canvas.height;
        // 一页pdf显示html页面生成的canvas高度;
        var pageHeight = (contentWidth / 592.28) * 841.89;
        // 未生成pdf的html页面高度
        var leftHeight = contentHeight;
        // pdf页面偏移
        var position = 0;
        // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
        var imgWidth = 595.28;
        var imgHeight = (592.28 / contentWidth) * contentHeight;
        var pageData = canvas.toDataURL("image/jpeg", 1.0);
        // eslint-disable-next-line
        var pdf = new jsPDF("", "pt", "a4");
        // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
        // 当内容未超过pdf一页显示的范围，无需分页
        if (leftHeight < pageHeight) {
          pdf.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            pdf.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            // 避免添加空白页
            if (leftHeight > 0) {
              pdf.addPage();
            }
          }
        } // 导出pdf文件命名
        pdf.save("report_pdf_" + new Date().getTime() + ".pdf");
      });

      this.$("#answerCheck-export").css({ "overflow-y": "scroll", height: "670px" });
      this.$("#export-header").css({ "display": "none"});
      this.$("#app").css({ "overflow-y": "auto", height: "100%" });
      this.$("body").css({ "overflow-y": "auto", height: "100%" });
```