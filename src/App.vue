<template>
  <div id="app">
    <router-link to="/" class="back-btn" v-show="$route.path !== '/'"
      ><svg-icon icon-class="back" class-name="back-icon"></svg-icon
    ></router-link>
    <router-view />
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
.back-btn
  position absolute
  z-index 2
  top 5px
  left 10px
img
  content normal !important
#app .back-icon
  width 1.2em
  height 1.2em
  margin 10px 0 0 10px
</style>
