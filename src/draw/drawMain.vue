/*

===drawMain.vue===

《咚当画板》画板核心代码（基于PixiJs），这可是咚当画板最重要的零件啦，不要弄坏了哦，当~

by：咚当家族 2019年7月24日 星期三

【项目简介】
《咚当画板H5》——来自“脑咚当开”的未来画板，不只是可以在上面涂画，能做你的“手账画板”，让
咚当画板帮你记下属于您的时光。顺便，还能做封面呐~
一起画画吧，当~

©2019 DangFamily. Copyright All Rights Reserved.

*/

<template>
    <div class='drawMain' id='drawMain'></div>
    <!--<div class='drawMain' id='drawMain' v-bind:style="{width:draw_UiWidth;height:draw_UiHeight}"></div>-->
</template>

<script>
    import './pixi.min.js'
    import logo from '../assets/logo.png'
    var draw_WorkWidth = 0;
    var draw_Workheight = 0;

    export default{
      name: 'drawMain',
      methods: {
        /*
        【咚当画板的主要零件调用函数】
        drawMain_init：启动画板零件
        drawMain_resize：改变画板的大小（并不改变作品大小），在改变浏览器大小动态自适应。
        drawMain_add：添加贴图（传入一个贴图编号，画板零件根据贴图编号添加贴图）
        drawMain_addText：文字印章
        */
        drawMain_init(workType) {
          //TODO：让咚当画板可以适应大小，画板大小改一下，以适应不同类型的需要。
          if (workType = 'normal') { //普通画板
            draw_WorkWidth = 1440
            draw_Workheight = 900
          }else if (workType = 'novel') { //封面工场功能
            draw_WorkWidth = 500
            draw_Workheight = 700
          }else if (workType = 'square') { //方形画板
            draw_WorkWidth = 512
            draw_Workheight = 512
          }else{
            console.error('Work type undefined:' + workType);
          }
          let drawMain = new PIXI.Application({
            width: draw_WorkWidth,
            height: draw_Workheight,
            backgroundColor: 0xffffff});
          document.getElementById('drawMain').appendChild(drawMain.view);
        },
      },
      mounted() {
        //零件一放好，咚当画板就开始运作啦~
        this.drawMain_init('normal');
      }
    }
</script>

<style>
    canvas{
      border-radius: 10px;
    }
</style>
