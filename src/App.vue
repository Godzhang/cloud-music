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
  }
}
</script>

<style>
@import '../static/reset.css';
html, body, #app{
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar{
  display: none;
}
.container{
  width: 100vw;
  height: 92vh;
  background: #f0f4f7;
}
</style>
