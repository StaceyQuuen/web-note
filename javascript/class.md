## 构建类

list-item.js

```javascript
import * as Utils from '../tool/utils';
class ListItem {
  constructor(options = {},type) {
    this.id = options.id || (options.id === 0 ? 0 : '');
    this.guid = options.guid || Utils.getGuid(); // item在内存中的唯一标识符
    this.name = options.name || {
      zh: ""
    }; // 写成name属性
    this.required = options.required != null ? options.required : true; // 适用于填空题
    this.inputtype = options.inputtype || (type=="assignment"?"string":""); // 输入项类型,string|int|float
  }
}
export default ListItem;

```

## 引入

```javascript
import ListItem from "./list-item.js";
```

## 使用

```javascript
let item = new ListItem()
```

