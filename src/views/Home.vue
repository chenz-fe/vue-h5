<template>
  <v-page class="home">
    <h3>CSS 移动端常用布局/常见问题</h3>
    <router-link to="/page1"
      >全屏页 (头部、底部固定，中间内容高度自适应)</router-link
    ><br />
    <router-link to="/page2">左右布局-解决重叠问题</router-link><br />
    <router-link to="/page3">多倍图选用</router-link><br />
    <router-link to="/page4">年度报告H5</router-link><br />
  </v-page>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="stylus" scoped>
.home
  justify-content flex-start
</style>
