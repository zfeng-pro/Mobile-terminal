<template>
  <div class="foot">
    <div class="footbox"><div class="fimg"><img src="./../assets/image/f1.png" alt=""><p>在线咨询</p></div></div>
    <div class="footbox"><div class="fimg"><img src="./../assets/image/f2.png" alt=""><p>官方微信</p></div></div>
    <div class="footbox"><div class="fimg"><img src="./../assets/image/f3.png" alt=""><p>课程辅导</p></div></div>
    <div class="footbox"><div class="fimg"><img src="./../assets/image/f4.png" alt=""><p>交流群</p></div></div>
  </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped lang="stylus">
  .foot{margin:30px 30px; width:690; height: 100px; display flex;}
  .footbox{
    display flex;
    flex :1;
    flex-direction : column;
    align-items    : center;
    justify-content: center;
    font-size :16px
  }
  .fimg{flex :1;}
  .fing>img{ width:37px;height: 37px;}
</style>
