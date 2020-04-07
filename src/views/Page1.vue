<template>
  <v-page>
    <div class="top">标题标题</div>
    <div class="text">
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
      <div>文字文字文字</div>
    </div>
    <div class="buttom">
      <button>
        底部按钮&nbsp;<span class="icon iconfont icon-activity"></span>
      </button>
      <div>底部按钮文字</div>
    </div>
  </v-page>
</template>
<style lang="stylus" scoped>
.top
  margin-top 100px
  font-size 80px
.text
  display flex
  flex-direction column
  padding-top 100px
  height calc(100% - 500px)
  overflow scroll
  div
    flex auto
.buttom
  position absolute
  bottom 40px
  width 100%
  button
    width 430px
    height 80px
    border 1px solid red
  >div
    margin-top 10px
</style>
