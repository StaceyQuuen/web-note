原因：全局index.html引入了

<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>

局部引入了： import wx from 'weixin-js-sdk'

因此：全局wx影响了局部的引用，使得局部的wx为undefind

参考链接：https://juejin.cn/post/6844903719553728525