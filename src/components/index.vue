<template>
    <div>
    <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#46A2A6"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item weith="100px" index="0" @click="gotofirtpage()">首页</el-menu-item>
  <el-menu-item weith="100px" index="1">望诊</el-menu-item>
  <el-submenu index="2">
  <template slot="title">问诊</template>
    <el-menu-item index="2-1" @click="gotoreg()">挂号</el-menu-item>
    <el-menu-item index="2-2" @click="gotosearch()">查询/退号</el-menu-item>
    </el-submenu>
  <el-submenu index="3">
  <template slot="title">闻诊</template>
    <el-menu-item index="3-1" @click="gotodoctor()">医生信息</el-menu-item>
    <el-menu-item index="3-2" @click="gotoinsertdoctor()">新增医生</el-menu-item>
    </el-submenu>
  <el-menu-item index="4">切诊      </el-menu-item>
  <el-menu-item index="5">咨询      </el-menu-item>
  <el-menu-item index="6">健康知识      </el-menu-item>
  <el-menu-item index="7"><img class='indeximg':src='this.png'></el-menu-item>
    </el-menu>
  地区:{{this.city}} 日期:{{this.date}} {{this.type}} 最{{low}}  最{{high}}  风向:{{this.fengxiang}}
  风力:{{this.fengli}}<br> 小提示:{{this.ganmao}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex2: '0',
        city:'',
        date:'',
        high:'',
        low:'',
        fengxiang:'',
        ganmao:'',
        fengli:'',
        type:'',
        png:'',
        message:''
        }
    },
    mounted() {
          this.getNews();
      },
    methods: {
         gotoreg()
        {
          this.$router.push('/message')
        },
        gotodoctor()
        {
            this.$router.push('/doctor')
        },
        gotosearch(){
            this.$router.push('/search')
        },
        gotofirtpage()
        {
            this.$router.push('/firstpage')
        },
        gotoinsertdoctor()
        {
            this.$router.push('/insertDoctor')
        },
        getNews()
        {
             this.$axios.get('https://www.apiopen.top/weatherApi?city=大连')
             .then(response=> {
              console.log(response);
              this.city = response.data.data.city;
              this.date = response.data.data.forecast[0].date;
              this.high = response.data.data.forecast[0].high;
              this.low = response.data.data.forecast[0].low;
              this.fengxiang = response.data.data.forecast[0].fengxiang;
              this.ganmao = response.data.data.ganmao;
              this.fengli=response.data.data.forecast[0].fengli;
              this.fengli = this.fengli.substring(9,13);
              this.type = response.data.data.forecast[0].type;
              this.png="/static/doctor/"+this.type+".png";

              this.message='地区:'+this.city+'  日期:'+this.date+'  '+ this.type + '最'+
              this.low+'最'+this.high+' 风向:'+this.fengxiang+'风力:'+this.fengli+'小提示:'+this.ganmao;
              console.log(this.message);
              }) 
                 .catch(error=> {
                    // handle error
                    console.log(error);
              })
                .then(function () {
                    // always executed
              });
      } 
    },
}
</script>

<style>
.indeximg
{
    height:40px;
    width:60px;
}
</style>