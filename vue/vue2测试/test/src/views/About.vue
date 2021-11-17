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
  name: 'Home',
  components: {
    ZhiFeiJiComp
  }
}
</script>
