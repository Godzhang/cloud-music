<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <playbar></playbar>
  </div>
</template>

<script>
import playbar from './components/playbar'

export default {
  name: 'app',
  components: {
  	playbar
  },
  mounted(){
    //设置html字体
    //获取屏幕宽度(viewport)
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

    //获取html的dom
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置html的fontsize
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';

    window.addEventListener('resize', () => {
      let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    })
  }
}
</script>

<style lang="scss">
@import '../static/public.scss';
html, body, #app{
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar{
  display: none;
}
.container{
  width: 100%;
  height: 100%;
  background: #f0f4f7;
}
</style>
