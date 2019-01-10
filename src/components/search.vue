<template>
     <div>
     <v-menuhead></v-menuhead>     
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column label="病历号" width="100">
    <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
    </template>
    </el-table-column>
    <el-table-column label="姓名">
    <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
    </template>
    </el-table-column>
    <el-table-column label="性别">
    <template slot-scope="scope">
        <span>{{scope.row.sex}}</span>
    </template>
    </el-table-column>
    <el-table-column label="生日">
    <template slot-scope="scope">
    <i class="el-icon-time"></i>
        <span>{{scope.row.birthdate}}</span>
    </template>
    </el-table-column>
    <el-table-column label="挂号类型">
    <template slot-scope="scope">
        <span>{{scope.row.type}}</span>
    </template>
    </el-table-column>
    <el-table-column label="主治医生">
    <template slot-scope="scope">
        <span>{{scope.row.doctor}}</span>
    </template>
    </el-table-column>
    <el-table-column label="费用">
    <template slot-scope="scope">
        <span>{{scope.row.fee}}</span>
    </template>
    </el-table-column>
    <el-table-column label="挂号日期">
    <template slot-scope="scope">
    <i class="el-icon-time"></i>
        <span>{{scope.row.time}}</span>
    </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>

      </template>
    </el-table-column>
  </el-table>
     </div>
</template>


<script>
import menuhead from './index.vue'
import {formatDate} from '@/common/date.js';
     export default {
       data() {
      return { 
          tableData:[]
        }
      },
      components:
      {
          'v-menuhead':menuhead
      },
      mounted() {
          this.searchall();
      },
      methods: {
          searchall(){
              this.$axios.post('/registerfind')
            .then(response=>{
            console.log(response);
            if(response.status==200)
            {
                let lists = []
                for(let i=0; i<response.data.length; i++)
                {
                    let user = {}
                    user.id = response.data[i].id
                    user.name = response.data[i].name
                    user.sex = response.data[i].sex
                    if(user.sex=='1')
                    {
                        user.sex = '男';
                    }
                    else
                    {
                        user.sex = '女';
                    }
                    user.birthdate = response.data[i].birthdate
                    user.birthdate = formatDate(user.birthdate)
                    user.type = response.data[i].type
                    if(user.type=='1')
                    {
                        user.type = '外科'
                    }else if(user.type == '2')
                    {
                        user.type = '内科'
                    }else if(user.type == '3')
                    {
                        user.type = '儿科'
                    }else if(user.type == '4')
                    {
                        user.type = '耳鼻喉科'
                    }else if(user.type == '5')
                    {
                        user.type = '皮肤科'
                    }
                    user.doctor = response.data[i].doctor
                    user.fee = response.data[i].fee
                    user.time = response.data[i].time
                    user.time = formatDate(user.time)
                    lists[i] = user
                }
                this.tableData = lists
            }
            else
            {
              alert("查询失败");
            }
        })
        .catch(function (error){
            console.log(error);
        }); 
      },
      handleEdit(row) {
        if(row.sex=='男')
        {
            row.sex='1';
        }
        else
        {
            row.sex='2';
        }
        if(row.type=='外科')
        {
            row.type='1';
        }else if(row.type=='内科')
        {
            row.type='2';
        }else if(row.type=='儿科')
        {
            row.type='3';
        }else if(row.type=='耳鼻喉科')
        {
            row.type='4';
        }else if(row.type=='皮肤科')
        {
            row.type='5';
        }
        this.$router.push({
                path:'/update',
                query:{id:row.id,name:row.name,sex:row.sex,birthdate:row.birthdate,
                type:row.type,doctor:row.doctor,fee:row.fee,time:row.time}
                });
      },
      handleDelete(row){
         console.log(row.id);
          this.$confirm('确认退号么？','提示',{
                type:'waring'
              }).then(()=>{this.listLoading=true;
              this.$axios.post('/registerdelete', {
             id: row.id
        })
        .then(response=>{
            console.log(response);
            this.listLoading=false;
            if(response.status==200)
            {
                this.$message({
                    message:'删除成功',
                    type:'success'
                })
                this.searchall();
            }
            else
            {
              alert("删除失败");
            }
        })
        .catch(function (error) {
            console.log(error);
        }); 
        })
      }    
    }  
}
</script>

<style>
</style>