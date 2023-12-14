<template>
  <main>
  <div class="min-w-full flex justify-center items-center h-screen bg-indigo-600">

    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-black text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>UsersignUp</h1>
      <hr class="mt-3">
      <form @submit.prevent ="onLogin" action="Login">
      <div class="mt-3">
        <label for="email" class="float-left text-black text-base block mb-2">email</label>
        <input type="email" id="name" name="name" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-black" placeholder="Enter email...." required v-model="email">
        <div class="error text-red-600" v-if="errors.email">{{ errors.email }}</div>
      </div>

      <div class="mt-3">
        <label for="password" class="text-black text-base block mb-2 float-left">password</label>
        <input type="password" id="password" name="password" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password..." required v-model="password">
        <div class="error text-red-600" v-if="errors.password">{{ errors.password }}</div>
      </div>

      <div class="mt-3">
        <label for="text" class="text-black text-base block mb-2 float-left">username</label>
        <input type="text" id="username" name="username" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." required>
      </div>
      <div class="mt-3">
        <label for="date" class="text-black text-base block mb-2 float-left">DOB</label>
        <input type="date" id="dob" name="dob" class=" text-black w-full py-1 px-2 border rounded text-base focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="date of birth" required>
      </div>

      <div class="flex mt-3 justify-between items-center">
       <p class="text-black text-underline"> already have a Account?<a class="text-indigo-800" href="/Login">Login</a> </p>
        
      </div>
      <div class="mt-3">
        <button class="border-2 text-white border-indigo-700 bg-indigo-700 py-1 w-full rounded-md " type="submit" action="/login">Signup</button>
      </div>
      </form>
    </div>
  </div>
  </main>
</template>

<script>
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
        alert("Sign up successful",this.errors.email,this.errors.password);
        window.location.replace("/login");
      }
    }
    
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle the error as needed, e.g., show an error message to the user
    }
  }
},
  },
};
</script>
