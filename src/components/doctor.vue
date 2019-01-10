<template>
     <div>
     <v-menuhead></v-menuhead>     
     <el-table
    :data="tableData"
    border
    style="width: 100%">

    <el-table-column label="医生编号" width="300">
    <template slot-scope="scope">
        <span>{{scope.row.id}}</span>
    </template>
    </el-table-column>

    <el-table-column label="姓名">
    <template slot-scope="scope">
        <span>{{scope.row.name}}</span>
    </template>
    </el-table-column>

    <el-table-column label="科室">
    <template slot-scope="scope">
        <span>{{scope.row.doctor}}</span>
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
              this.$axios.post('/doctorfind')
            .then(response=>{
            console.log(response);
            if(response.status==200)
            {
                let lists = []
                for(let i=0; i<response.data.length; i++)
                {
                    let user = {}
                    user.id = response.data[i].id
                    user.name = response.data[i].doctor
                    user.doctor = response.data[i].type
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
        this.$router.push({
                path:'/updatedoctor',
                query:{id:row.id,name:row.name,doctor:row.doctor}
                });
      },
      handleDelete(row){
         console.log(row.id);
          this.$confirm('确认删除么？','提示',{
                type:'waring'
              }).then(()=>{this.listLoading=true;
              this.$axios.post('/doctordelete', {
              id: parseInt(row.id)
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