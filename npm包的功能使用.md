[TOC]

# 1、nprogress 浏览器进度条

```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,height=device-height">
  <title>NProgress</title>
  <script src='https://unpkg.com/nprogress@0.2.0/nprogress.js'></script>
  <link rel='stylesheet' href='https://unpkg.com/nprogress@0.2.0/nprogress.css'/>  
</head>

<body>
  <script>
    NProgress.start()
    setTimeout(function() {
      NProgress.done()
    }, 2000)
  </script>
</body>

</html>

```

类似于YouTube、Medium、知乎等网站使用的进度条插件 NProgress

![image-20211112171753126](E:\workplace\web-note\md文件用到的图片\image-20211112171753126.png)

# 2、moment

```javascript
const now = moment()
const nowDate = new Date()
console.log(now); //k {_isAMomentObject: true, _isUTC: false, _pf: {…}, _locale: H, _d: Fri Nov 12 2021 17:56:58 GMT+0800 (中国标准时间), …}
console.log(nowDate); //Fri Nov 12 2021 17:56:58 GMT+0800 (中国标准时间)
console.log(nowDate.toISOString()); //2021-11-12T09:56:58.529Z
console.log('========================================>')

// nowDate.format is not a function
console.log(now.format());  //2021-11-12T17:56:58+08:00
console.log(now.format('YYYY-MM-DD HH:mm:ss')) //2021-11-12 17:54:06
console.log(now.format('E')) //5
console.log(now.format('yyyy-MM-DD'))
```

