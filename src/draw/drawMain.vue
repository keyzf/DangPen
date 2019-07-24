/*

===drawMain.vue===

《咚当画板》画板核心代码（基于PixiJs），这可是咚当画板最重要的零件啦，不要弄坏了哦，当~

by：咚当家族 2019年7月24日 星期三

【项目简介】
《咚当画板H5》——来自“脑咚当开”的未来画板，不只是可以在上面涂画，能做你的“手账画板”，让
咚当画板帮你记下属于您的时光。顺便，还能做封面呐~
一起画画吧，当~

*/

<template>
    <div class='drawMain' id='drawMain'></div>
</template>

<script>
    import './pixi.min.js'
    import logo from '../assets/logo.png'

    export default{
      name: 'drawMain',
      methods: {
        drawMain_init() {
          //TODO：让咚当画板可以适应大小，画板大小改一下
          let drawMain = new PIXI.Application({
            width: 512,
            height: 512,
            backgroundColor: 0xffffff});
          document.getElementById('drawMain').appendChild(drawMain.view);

          var TestText = new PIXI.Text('小睡一下');
          TestText.x = 30;
          TestText.y = 90;
          drawMain.stage.addChild(TestText);
        }
      },

      mounted() {
        //零件一放好，咚当画板就开始运作啦~
        this.drawMain_init();
      }

    }
</script>

<style>
    canvas{
      border-radius: 10px;
    }
</style>
