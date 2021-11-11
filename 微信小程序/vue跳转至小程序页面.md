```vue
<template>
    <div class="back" @click="toback">
        <img src="../../assets/img/questionnaire/back.png" alt="" width="64px">
    </div>
</template>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script>
export default {
    methods: {
        toback(){
            wx.miniProgram.switchTab({
                url: '/pages/survey/survey',
            });
        }
    }

}
</script>

<style>
.back {
    cursor: pointer;
    position: fixed;
    z-index:999;
    right: 10px;
    bottom: 100px;
}
</style>
```

