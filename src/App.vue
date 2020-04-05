<template>
  <div id="app">
    <router-link to="/" class="back-btn" v-show="$route.path !== '/'"
      >back</router-link
    >
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
</style>
