<template>
    <div>
  <v-menuhead></v-menuhead>
  <el-container>
<el-container>
   <!--v-aside></v-aside-->
   <el-aside width="200px" style="background-color: rgb(249, 249, 250);">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1" @click="gotomess()">挂号</el-menu-item>
      <el-menu-item index="2" @click="gotocheck()">已挂号查询</el-menu-item>        
    </el-menu>
  </el-col>
  </el-aside>
    <!--v-message></v-message-->
  </el-container>
</el-container>
       
</div>
</template>
<script>
import menuhead from './menuhead.vue'
import message from './message.vue'
//import aside from './aside.vue'
export default {
    data() {
      return {
        head: '1'
      };
    },
     components:
     {'v-menuhead':menuhead},
    methods: {
       gotomess(){
          this.$router.push('/message')
        },
        gotocheck(){
          this.$router.push('/search')
        }
    }   
}
</script>
<style>

     .el-menu{
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 500px;
  }
  
  body > .el-container {
    margin-bottom: 20px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>