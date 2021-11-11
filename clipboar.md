# 1、clipboard复制和elementUI-el-popper弹出框，复制事件无法起到作用

原因： 弹框修改了焦点事件

需要重新执行clipboard.onClick(event)

```vue
<template>
  <el-popover placement="top-end" width="400" trigger="hover">
    <el-row :gutter="24">
      <el-col :span="18">
        <el-input size='mini' class="w7" v-model="url" readonly></el-input>
      </el-col>
      <el-col :span="2">
        <el-button size='mini' type="text" @click="copy" id="copy-link-btn" :data-clipboard-text="url"><span class="fs12">复制</span></el-button>
      </el-col>
      <el-col :span="2">
        <el-button size='mini' type="text" @click="openLink"><span class="fs12">打开</span></el-button>
      </el-col>
    </el-row>
    <el-button type='primary' plain size='mini' class="mini" slot="reference" style="margin-right: 10px"><span>分享</span></el-button>
  </el-popover>
</template>

<script>
export default {
  props: ['url'],
  methods: {
    // 复制调查链接
    copy (event) {
      let Clipboard = require('clipboard')
      let clipboard = new Clipboard('#copy-link-btn')
      clipboard.on('success', () => {
        this.$message({
          type: 'success',
          message: '复制成功'
        })
        clipboard.destroy()
      })
      clipboard.on('error', () => {
        this.$message({
          type: 'error',
          message: '该浏览器不支持自动复制'
        })
        clipboard.destroy()
      })
      clipboard.onClick(event)
    },
    // 打开
    openLink() {
      window.open(this.url)
    },
  }
};
</script>

<style>
</style>
```

