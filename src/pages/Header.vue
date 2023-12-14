
<template>
    
  <div>
    <h1 class="text-black text-3xl">Welcome {{ name }}</h1>
  </div>
  <div class="bg-yellow-300">
    <br><br>
    <table class="border-collapse border border-black w-full">
      
        <tr>
          <th class="border border-black text-black">ID</th>
          <th class="border border-black text-black">Email</th>
          <th class="border border-black text-black">Password</th>
        </tr>
      
      
        <tr v-for="item in info" :key="item.id">
          <td class="border border-black text-black">{{ item.id }}</td>
          <td class="border border-black text-black">{{ item.email }}</td>
          <td class="border border-black text-black">{{ item.password }}</td>
        </tr>
      
    </table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'Header',
    data() {
        return {
            name:'',
            info:[],
        }
    
    },
  async mounted() {
    let user= localStorage.getItem('user-info');
    this.name= JSON.parse(user).email;
    
    let result=await axios.get("http://localhost:3000/users");
    this.info=result.data;
  },

}
</script>
