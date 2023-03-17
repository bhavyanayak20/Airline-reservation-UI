<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table :headers="headers" :items="items"></v-data-table>
       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Book',
    data (){
 return {
      headers:[
        {text:'FROM',value:'origin'},
        {text:'TO',value:'destination'},
        {text:'DATE',value:'flightDate'},
        {text:'TIME',value:'flightTime'}
      ],
      items:[]
    }
    },
    mounted() {
         axios.get("http://localhost:8081/route/list")
         .then(response => {
          this.items = response.data
         })
         .catch(error => {
          console.log(error)
         })
    }
  }
</script>
<style scoped>

</style>