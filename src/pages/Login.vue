<template>
     <div class="min-w-full flex justify-center items-center h-screen bg-indigo-600">
      
      <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <form @submit.prevent="onLogin">
        <h1 class="text-black text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>UserLogin</h1>
        <hr class="mt-3">
        <div class="mt-3">
        
        <label for="email" class="text-black text-base block mb-2 float-left">email</label>
        <input type="email" id="name" name="name" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-black" placeholder="Enter email...." v-model="email" required>
        <div class="error text-red-600" v-if="errors.email">{{ errors.email}}</div>
        </div>
      

        <div class="mt-3">
        
          <label for="password" class="text-black text-base block mb-2 float-left">password</label>
          <input type="password" id="password" name="password" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password..." v-model="password" required>
          <div class="error text-red-600" v-if="errors.password">{{ errors.password }}</div>
          </div>
      <div class="flex mt-3 justify-between items-center">
      <div>
        <input type="checkbox">
        <label class="text-black"> Remember Me?</label>
      </div>
       <div>
        <a href="/Signup" class="text-indigo-950 font-semibold">Forgot Password</a>
       </div>
        </div>
        <div class="mt-3">
          <button class="border-2 text-white border-indigo-700 bg-indigo-700 py-1 w-full rounded-md "  >Login</button>
        </div>
        <div class="mt-3">
          <button class="border-2 text-white border-indigo-700 bg-indigo-700 py-1 w-full rounded-md " @click="login"  >Login with Google</button>
          
        </div>
        </form>
      </div>
  </div>
    
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';
import SignupValidations from '../services/SignupValidations';
export default{
  data() {
    return {
      email:'',
      password:'',
      errors:[],
    }
  },
  methods: {
    async onLogin() {
  let validations = new SignupValidations(this.email, this.password);
  this.errors = validations.checkValidations();

  if (this.errors.password===""&&this.errors.email==="" ) {
    return false;
  } else {
    try {
      if (this.errors.password!=="password must be minimum 8 characters"&&this.errors.email!=="Invalid Email" ) {  
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        password: this.password
      });
    
     
     
      if (result.status === 201) {
        alert("Loginsuccessful");
        window.location.replace("/header");
        localStorage.setItem("user-info",JSON.stringify(result.data))
      }
    }
    
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  }
},
  
  },
  setup() {   
    const {loginWithPopup,user}=useAuth0();
    
    
    return {
        login(){
            loginWithPopup(),
            user

        }
    }
}
};
</script>