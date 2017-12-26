<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import '../static/reset.css';
html, body, #app{
  width: 100%;
  height: 100%;
}
</style>
