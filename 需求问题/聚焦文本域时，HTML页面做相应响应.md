```javascript
/** 鼠标聚焦输入框时 */
    updateXY(event) {
      let textarea = document.getElementById("textarea");
      let arry = this.input.split("\n");
      let indexArr = this.findall(arry);
      //获取文本框内元素所在的行数，27为盒子的padding-top，30为行高line-height
      let rowNum = Math.floor((event.offsetY - 27) / 30);
      for (let i = 0; i < indexArr.length; i++) {
        if (rowNum === indexArr[i] || (rowNum > indexArr[i]&&rowNum < indexArr[i+1])) {
          this.scrollTitleNum = i;
        }
      }
      if (this.scrollTitleNum != null) {
        let mainContainer = $("#questionnaire-block-preview");
        let scrollToContainer = $("#" + this.scrollTitleNum);
        scrollToContainer.addClass("bac");
        //去除不是当前题目的元素背景
        for (let val of $(".bac")) {
          if (val.getAttribute("id") != this.scrollTitleNum) {
            $("#" + val.getAttribute("id")).removeClass("bac");
          }
        }
        if (mainContainer.length != 0 && scrollToContainer.length != 0) {
          mainContainer.scrollTop(
            scrollToContainer.offset().top -
              mainContainer.offset().top +
              mainContainer.scrollTop() -
              20
          );
        }
      }
    },
```

## 问题： mainContainer.scrollTop不起作用

## 原因 文件代码中出现了同名id

## 问题：无法获取scrollToContainer，除非点击el-input外部

## 原因：textarea.onclick 函数内部无法及时更新Dom元素，无法获取scrollToContainer

```html
<div class="left" @mousedown='updateXY' id="textarea">
    <el-input v-model="input" autosize type="textarea" ref="input" placeholder="" />
</div>
```



```javascript
/** 鼠标聚焦输入框时 */
    updateXY(event) {
      let textarea = document.getElementById("textarea");
      let arry = this.input.split("\n");
      let indexArr = this.findall(arry);
      //获取文本框内元素所在的行数，27为盒子的padding-top，30为行高line-height
      let rowNum = Math.floor((event.offsetY + textarea.scrollTop - 27) / 30);
      for (let i = 0; i < indexArr.length; i++) {
        if (rowNum === indexArr[i] || rowNum > indexArr[i]) {
          this.scrollTitleNum = i;
        }
      }
      if (this.scrollTitleNum != null) {
        let mainContainer = $("#questionnaire-block-preview");
        let scrollToContainer = $("#" + this.scrollTitleNum);
        scrollToContainer.addClass("bac");
        //去除不是当前题目的元素背景
        for (let val of $(".bac")) {
          if (val.getAttribute("id") != this.scrollTitleNum) {
            $("#" + val.getAttribute("id")).removeClass("bac");
          }
        }
        if (mainContainer.length != 0 && scrollToContainer.length != 0) {
          mainContainer.scrollTop(
            scrollToContainer.offset().top -
              mainContainer.offset().top +
              mainContainer.scrollTop() -
              20
          );
        }
      }
    },
```

