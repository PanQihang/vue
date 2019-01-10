<template>
  <div>
  <h2>请求数据</h2>
  <button @click="getNews()">憋按我</button>
  <h1>{{message}}</h1>
  </div>
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            message:''
        }
    },
    methods: {
      getNews()
      {
             axios.get('https://www.apiopen.top/weatherApi?city=大连')
             .then(response=> {
              // handle success
              console.log(response);
              this.message = response.data.data.ganmao;
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

</style>