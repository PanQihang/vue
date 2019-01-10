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
 <h2>添加挂号</h2>
  <el-row type="flex" justify="center">
     <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="姓名">
    <el-input v-model="formLabelAlign.name"></el-input>
    </el-form-item>
    <el-form-item label="出生日期">
    <el-date-picker  v-model="formLabelAlign.date1" type="date"  placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item label="姓别">
  <el-radio v-model="formLabelAlign.sex" label="1">男</el-radio>
  <el-radio v-model="formLabelAlign.sex" label="2">女</el-radio>
  </el-form-item>
  <el-form-item label="科室">
    <el-select v-model="formLabelAlign.type" placeholder="请选择"  v-on:change="getdoctor">
      <el-option value="1" label="外科"></el-option>
      <el-option value="2" label="内科"></el-option> 
      <el-option value="3" label="儿科"></el-option> 
      <el-option value="4" label="耳鼻喉科"></el-option> 
      <el-option value="5" label="皮肤科"></el-option> 
    </el-select>
    </el-form-item>
     <el-form-item label="医生">
    <el-select v-model="formLabelAlign.doctor" placeholder="请选择">
      <el-option v-for="doctor in formLabelAlign.doctors"
      :label="doctor"
      :value="doctor"
      :key="doctor">
      </el-option>
    </el-select>
    </el-form-item>
     <el-form-item label="挂号日期">
      <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" style="width: 100%;"></el-date-picker>
  </el-form-item>
  <el-form-item label="挂号费">
    <el-input v-model="formLabelAlign.money"></el-input>
    </el-form-item>
    <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login()">挂号</el-button>
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
        type1:'',
          radio:'1',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          date1:'',
          sex: '1',
          doctor:'',
          type: '',
          date2:'',
          money:'',
          doctors:[]         
        }
      };
    },
     components:
     {'v-menuhead':menuhead},
      methods: {
      getdoctor()
      {
        console.log(this.formLabelAlign);
        if(this.formLabelAlign.type=='1')
        {
            this.type1='外科';
        }else if(this.formLabelAlign.type=='2')
        {
            this.type1='内科';
        }else if(this.formLabelAlign.type=='3')
        {
            this.type1='儿科';
        }else if(this.formLabelAlign.type=='4')
        {
            this.type1='耳鼻喉科';
        }else if(this.formLabelAlign.type=='5')
        {
            this.type1='皮肤科';
        }
        this.$axios.post('/findDoctor',{ 
              type: this.type1,
        })
        .then(response=>{
            if(response.status==200)
            {
              this.formLabelAlign.doctors=[];
              this.formLabelAlign.doctor='';
              console.log(response);
              for(let i=0; i<response.data.length; i++)
              {
                this.formLabelAlign.doctors[i] = response.data[i].doctor
              }
              console.log(this.formLabelAlign.doctors);
            }
            else
            {
              alert("操作失败");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
      },
      getDoctor()
      {
        console.log(this.formLabelAlign);
      },
      login()
      {
        if(this.formLabelAlign.name==''||this.formLabelAlign.date1==''||
        this.formLabelAlign.sex==''||this.formLabelAlign.type==''||this.formLabelAlign.date2==''
        ||this.formLabelAlign.money==''||this.formLabelAlign.doctor=='')
        {
          alert('请完善选择信息');
        }
        else
        {
            this.$axios.post('/register', {
            name: this.formLabelAlign.name,
            birthdate: this.formLabelAlign.date1,
            sex: this.formLabelAlign.sex,
            type: this.formLabelAlign.type,
            time: this.formLabelAlign.date2,
            fee: parseInt(this.formLabelAlign.money),
            doctor:this.formLabelAlign.doctor
        })
        .then(response=>{
            console.log(this.formLabelAlign);
            if(response.data.code==200)
            {
              alert("挂号成功");
              this.formLabelAlign.name='',
              this.formLabelAlign.date1='',
              this.formLabelAlign.sex='1',
              this.formLabelAlign.type='',
              this.formLabelAlign.date2='',
              this.formLabelAlign.money='',
              this.formLabelAlign.doctor=''
            }
            else
            {
              alert("挂号失败");
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 
      }
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
    margin: 40px auto;
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