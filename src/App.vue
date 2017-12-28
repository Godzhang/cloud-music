<template>
  <div id="app">
    <router-view></router-view>
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
</style>
