使用wangeditor 富文本编辑器的时候， 输入内容会被聚焦到页面wangeditor 便签中

在node_module 中 找到wangeditor/release/wangeditor.js 或 wangeditor/dist/wangeditor.js
将以下代码注释掉，

this.selection.createRangeByElem($last, false, true);
this.selection.restoreSelection();

![image-20210326113830177](C:\Users\26910\AppData\Roaming\Typora\typora-user-images\image-20210326113830177.png)