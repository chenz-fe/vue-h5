<template>
  <v-page class="page2">
    <div class="top-box">
      总金额(元)
      <div class="money">
        50000.00
      </div>
      <div>
        下面的文字在小屏幕机型(iphone5/SE)上会出现文字和按钮重叠的情况，可以用媒体查询来解决
      </div>
      <div class="info">
        <span>文字文字文字文字文字文字文字文字文字文字</span>
        <span><a href="">去看看</a></span>
      </div>
    </div>
  </v-page>
</template>
<style lang="stylus" scoped>
.top-box
  width 90%
  margin-left 5%
  margin-top 100px
  height 400px
  display flex
  flex-direction column
  justify-content space-around
  background linear-gradient(to bottom, rgba(255,68,0,0.9) 0%,rgba(255,68,0,0.3) 100%)
  color #fff
  border-radius 10px
.money
  font-size 80px
  font-weight 800
.info
  font-size 16px
  display flex
  flex-direction row
  justify-content space-between
  padding 0 30px
  white-space nowrap
  span:nth-child(1)
    max-width calc(100% - 100px)
@media screen and (min-width: 320px) and (max-width: 340px)
  .info
    padding 0 2px
    span
      font-size 12px
</style>
