<template>
  <button @click="getList">点击</button>
  <button @click="login">登录</button>
</template>

<script lang='ts'>
// import { defineComponent } from 'vue'
import { getListAPI } from "../api/goods.js";
import { loginAPI } from "../api/user.js";
export default {
  setup() {
    function getList() {
      //重复请求
      getListAPI().then((res) => {
        console.log(res);
      });
      setTimeout(() => {
        getListAPI().then((res) => {
          console.log(res);
        });
      }, 200);
      setTimeout(() => {
        getListAPI().then((res) => {
          console.log(res);
        });
      }, 400);
    }
    function login() {
      // window.localStorage.setItem('__TOKEN', 'asdsafawerwea ')
      loginAPI({ name: "忘情" }).then((res) => {
      });
    }

    return {
      getList,
      login,
    };
  },
};
</script>
