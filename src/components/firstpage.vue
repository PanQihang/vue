<template>
<div>
<v-menuhead></v-menuhead>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in 4" :key="item">
    <h3></h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import menuhead from './index.vue'
export default {
  data()
  {
    return{
    }
  },
  components:
     {'v-menuhead':menuhead},
     methods:{  
    },
}
</script>>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(4n) {
    background-color: #99a9bf;
    background-image:url('/static/doctor/徐小辉.jpg');
    background-size: cover;
  }
  
  .el-carousel__item:nth-child(4n+1) {
    background-color: #d3dce6;
    background-image:url('/static/doctor/李茂君.jpg');
    background-size: cover;

  }
  .el-carousel__item:nth-child(4n+2) {
    background-color: #d3dce6;
    background-image:url('/static/doctor/王文杰.jpg');
    background-size: cover;

  }
  .el-carousel__item:nth-child(4n+3) {
    background-color: #d3dce6;
    background-image:url('/static/doctor/黄康宁.jpg');
    background-size: cover;

  }
</style>