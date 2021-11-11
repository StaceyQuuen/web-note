### 1、slot插入

```html
<el-dialog>
    <span slot="title" class="dialog-footer">
          <div class="finish">
              <el-button type="warning" @click="toFinish">完成</el-button>
          </div>
    </span>
</el-dialog>
```

