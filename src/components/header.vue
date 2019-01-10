<template>
     <div>
     <h1>这是头部</h1>
     {{msg1}}
     <button @click="updateData()">刷新数据</button>
     </div>
</template>

<script>
     export default {
       data () {
          return {
               msg1:1
          }
     },
     methods:{
          updateData(){
               this.msg1++
          }
     },
     beforeCreate() {
          console.log('实例创建前')
     },
     created() {
          console.log('实例创建后')
     },
     beforeMount() {
          console.log('实例编译前')
     },
     mounted() {
          console.log('实例编译后')
     },
     beforeUpdate() {
          console.log('数据更新前')
     },
     updated() {
          console.log('数据更新后')
     },
     beforeDestroy() {
          console.log('实例销毁前')
     },
     destroyed() {
          console.log('实例销毁后')
     },
}
</script>

<style>
</style>