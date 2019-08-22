/*

===DangPen.vue===

《咚当画板》启动文件，画板启动的电路就在这里啦

by：咚当家族 2019年7月24日 星期三

【项目简介】
《咚当画板H5》——来自“脑咚当开”的未来画板，不只是可以在上面涂画，能做你的“手账画板”，让
咚当画板帮你记下属于您的时光。顺便，还能做封面呐~
一起画画吧，当~

©2019 DangFamily. Copyright All Rights Reserved.

*/
<template>
  <div id="dangpen" v-title data-title="咚当画板-Beta">
    <drawMain/>
  </div>
</template>

<script>
   //当 开始 被点击
   import drawMain from './draw/drawMain'

   export default {
     name: 'DangPen',
     components: {
       drawMain
     },
     mounted() {
       console.log('咚当画板');
     }
   }
</script>

<style>
   body{
     background-color: rgb(59, 207, 255);
   }
   #app {
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
   }
</style>
