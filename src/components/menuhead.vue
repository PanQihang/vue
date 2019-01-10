<template>
    <div>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">挂号页面</el-menu-item>
</el-menu>

    </div>
</template>
<script>
export default{
    data() {
        return {
        activeIndex2: '1'
        }
    },
}
</script>
<style>
</style>