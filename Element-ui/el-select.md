多选下拉框选项过长

```js
 <el-col :span="9">
            <el-select
              v-if="ifCreateCode"
              size="mini"
              v-model="labelVal"
              multiple
              placeholder="请选择编码"
              @change="selectOption"
            >
              <el-option
                v-for="item in labelOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <el-popover v-if="item.label.length >= 13" placement="top-start" width="400" trigger="hover">
                  <p>{{ item.label }}</p>
                  <span slot="reference">{{ item.label.slice(0,8) + '...' }}</span>
                </el-popover>
                <span v-else>{{ item.label }}</span>
              </el-option>
            </el-select>
            <el-input type="text" size="mini" v-model="createLabelVal" placeholder="请选择编码" v-if="!ifCreateCode"></el-input>
          </el-col>
```

多选下拉框选中后的选项过长

```css
.el-select__tags-text {
  display: inline-block;
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-select .el-tag__close.el-icon-close {
  top: -7px;
}
```

