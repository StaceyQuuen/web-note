<template>
  <div>
    <span id="msg">{{ msg }}</span>
    <span>{{ msg1 }}</span>
    <button class="btn" @click="changeMsg">点我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'vue test',
      msg1: '你好',
      msg2: '这个不测试'
    }
  },
  created() {
    this.msg = 'aftermounted'
    this.msg2 = '不测试扣了我100块'
  },
  mounted() {
    this.msg1 = '测试下vue组件'
  },
  methods: {
    changeMsg() {
      if (this.msg === '1') {
        this.msg = 'click false'
      } else {
        this.msg = 'click over'
      }
    }
  }
}
</script>
