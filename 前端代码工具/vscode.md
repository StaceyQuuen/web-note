[TOC]



# 一、安装地址：直接在应用商店下载，官网下载慢

# 二、安装的插件：

1. Vetur
2. Auto Close Tag
3. Auto Rename Tag



# 三、格式化代码

## 3.1 HTML标签在一行显示

找到格式化setting.json文件

打开 文件=》首选项=》设置     然后搜索  "vetur.format.defaultFormatterOptions"

参考https://wxzzz.com/140.html

https://www.jianshu.com/p/e6d2e25ec76e

## 3.2 保存时自动格式化

```javascript
{
    //更改系统主题颜色
  "workbench.colorTheme": "Monokai",
      "workbench.colorCustomizations": {
    "[Monokai]": {
    "editor.background": "#1a2c1c",
    "sideBar.background": "#2a3b2d",
    "activityBar.background": "#7154978a",
    "icon.foreground": "#893ecf",
    "activityBar.inactiveForeground": "#ffee00b4",
    },
  "editor.tabSize": 2,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
          "wrap_attributes": "auto"
      },
      "prettyhtml": {
          "printWidth": 100,
          "singleQuote": false,
          "wrapAttributes": false,
          "sortAttributes": false
      }
  },
  "search.followSymlinks": false,
  "git.autorefresh": false,
  "explorer.confirmDelete": false,
  "[html]": {
      "editor.defaultFormatter": "HookyQR.beautify"
  },
  "workbench.sideBar.location": "left",
  "editor.largeFileOptimizations": false,
  "[javascript]": {
      "editor.defaultFormatter": "HookyQR.beautify"
},
"[vue]": {
    "editor.defaultFormatter": "octref.vetur"
},
"auto-close-tag.activationOnLanguage": [
    "xml",
    "php",
    "blade",
    "ejs",
    "jinja",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "plaintext",
    "markdown",
    "vue",
    "liquid",
    "erb",
    "lang-cfml",
    "cfml",
    "HTML (EEx)",
    "HTML (Eex)",
    "plist"
],
"editor.suggestSelection": "first",
"vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
"window.zoomLevel": 1,
}
```

# 文件样式标签

### Helium