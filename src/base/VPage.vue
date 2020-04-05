<template>
  <div class="page-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.page-container
  display flex
  flex-direction column
  position absolute
  top 0
  right 0
  bottom 0
  left 0
  overflow hidden
</style>
