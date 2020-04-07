<template>
  <div>
    <p>默认展示两倍图，dpr为3时展示3倍图</p>
    <p>下面是通过媒体查询设置background</p>
    <!-- <div class="no-result">
      <div class="no-result-icon"></div>
      <p class="no-result-text">暂无数据</p>
    </div> -->
    <p style="margin-top: 30px;">下面是通过img标签的srcset属性设置</p>
    <p>
      <img
        src="./img/no-result@2x.png"
        srcset="./img/no-result@2x.png 2x, ./img/no-result@3x.png 3x"
      />
    </p>
  </div>
</template>

<style lang="stylus" scoped>
@import "~common/stylus/variable.styl"
@import "~common/stylus/mixin.styl"

p
  margin 20px 0
.no-result
  text-align: center
  .no-result-icon
    width: 86px
    height: 90px
    margin: 0 auto
    bg-image('./img/no-result')
    background-size: 86px 90px
  .no-result-text
    margin-top: 30px
    font-size: $font-size-medium
</style>
