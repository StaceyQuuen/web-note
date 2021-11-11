element-variables.scss

```scss
/* 改变主题色变量 */
$--color-primary: #337ab7;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";
```

在main.js中引入

```javascript
import './assets/style/element-variables.scss'
```

