<template>
 <div>
 <div class = "loginFrame">
 <h2>用户登录</h2>
  <el-row type="flex" justify="center">
        <el-form status-icon label-width="80px">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="logInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="logInfo.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-radio v-model="logInfo.type" label='1'>医生</el-radio>
                <el-radio v-model="logInfo.type" label='2'>前台</el-radio>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="el-icon-upload" @click="login()">登录</el-button>
            </el-form-item>
        </el-form>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
    data() {
      return {
          logInfo:{
              type:'1',
              username:'',
              password:''
          },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      login()
      {
          if(this.check())
          {
            this.$axios.post('/login', {
            type: parseInt(this.logInfo.type),
            username: this.logInfo.username,
            password: this.logInfo.password
        })
        .then(response=>{
            console.log(response);
            if(response.data.code==200)
            {
              this.$router.push({
                path:'/firstpage'
                });
            }
            else
            {
              alert("登录失败");
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 
          }         
     },
     check(){
         var flag = true;
         if(this.logInfo.username==''){
             flag=false;
             alert("用户名不能为空");
         }else if(this.logInfo.password==''){
             flag=false;
             alert("密码不能为空");
         }
         return flag;
     },
    }
}
</script>

<style>
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
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255,255,255,0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
h2 {text-align:center}
</style>
