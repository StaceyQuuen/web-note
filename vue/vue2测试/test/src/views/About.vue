<!--
 * @Author: your name
 * @Date: 2021-11-16 16:47:02
 * @LastEditTime: 2021-11-16 17:28:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue2测试\test\src\views\About.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <zhi-fei-ji-comp></zhi-fei-ji-comp>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ZhiFeiJiComp from '@/components/ZhiFeiJi.vue'
export default {
  name: 'home',
  components: {
    ZhiFeiJiComp
  }
}
</script>
