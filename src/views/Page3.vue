<template>
  <div>
    <p>以下直接设置height: 1px</p>
    <div class="border-test"></div>
    <p>以下是postcss-write-svg结合svg设置的1px</p>
    <div class="svg-test"></div>

    <p>以下是伪类+transform设置的1px</p>
    <div class="border_1px"></div>
    <p>以上三条线在 iphoneX 真机上看起来真的没啥区别</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
p
  margin 50px 0 20px 0

.border-test
  width 100%
  height 1px
  background-color #000

@svg 1px-border
  width 4px
  height 4px
  @rect
    fill transparent
    width 100%
    height 100%
    stroke-width 25%
    stroke var(--color, black)

.svg-test
  border 0;    // 将其余三遍的border宽度设置成0
  border-top: 1px solid;   // 这里将单边覆盖上面border的宽度设置
  border-image: svg(1px-border param(--color red)) 1 stretch;

.border_1px
  width 100%
  position relative
  height 10px

.border_1px:before
  content ''
  position absolute
  top 0
  left 0
  height 1px
  width 100%
  background-color #000

  @media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px:before{
       transform: scaleY(0.5);
    }
  }
  @media only screen and (-webkit-min-device-pixel-ratio:3){
    .border_1px:before{
       transform: scaleY(0.33);
    }
  }
</style>
