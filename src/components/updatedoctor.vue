<template>
     <div>
     <v-menuhead></v-menuhead>

<el-container>
  <el-aside width="300px">
  <img src="/static/doctor/特色科室.png" width='250' title="特色科室" />
  <img src="/static/doctor/专家门诊.png" width='250' title="专家门诊" />
  <img src="/static/doctor/医院介绍.png" width='250' title="医院介绍" />
  <img src="/static/doctor/就医咨询.png" width='250' title="就医咨询" />
  </el-aside>
  <el-main>

<div class = "loginFrame">
 <h2>修改医生</h2>
  <el-row type="flex" justify="center">
     <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="医生编号">
    <el-input v-model="formLabelAlign.id" disabled="disabled"></el-input>
    </el-form-item>
  <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    
  <el-form-item label="科室">
    <el-select v-model="formLabelAlign.doctor" placeholder="请选择">
      <el-option value="1" label="外科"></el-option>
      <el-option value="2" label="内科"></el-option> 
      <el-option value="3" label="儿科"></el-option> 
      <el-option value="4" label="耳鼻喉科"></el-option> 
      <el-option value="5" label="皮肤科"></el-option> 
    </el-select>
    </el-form-item>

    <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login()">提交</el-button>
    </el-form-item>
</el-form>

</el-row>
    </div>
    </el-main>
</el-container>
     </div>
</template>


<script>
import menuhead from './index.vue'
     export default {
       data() {
      return {
          radio:'1',
        labelPosition: 'right',
        formLabelAlign: {
            id: this.$route.query.id,
          name: this.$route.query.name,
           doctor:this.$route.query.doctor,   
        },
        type1:''
      };
    },
     components:
     {'v-menuhead':menuhead},
      methods: {
      login()
      { 
          if(this.formLabelAlign.doctor=='1')
        {
            this.type1='外科';
        }else if(this.formLabelAlign.doctor=='2')
        {
            this.type1='内科';
        }else if(this.formLabelAlign.doctor=='3')
        {
            this.type1='儿科';
        }else if(this.formLabelAlign.doctor=='4')
        {
            this.type1='耳鼻喉科';
        }else if(this.formLabelAlign.doctor=='5')
        {
            this.type1='皮肤科';
        }
        this.$axios.post('/findDoctor',{ 
              type: this.type1,
        })
            this.$axios.post('/doctorupdate', {
                id:this.formLabelAlign.id,
                doctor: this.formLabelAlign.name,
                type:this.type1
        })
        .then(response=>{
            console.log(response);
            if(response.status==200)
            {
              alert("修改成功");
              this.$router.push({
                path:'/doctor'
                });
            }
            else
            {
              alert("修改失败");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
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
  body
{
    background-color: #c0c4cc;
}
.loginFrame
{
    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 50px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
h2 {text-align:center}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
</style>