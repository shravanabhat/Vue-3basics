<template>
    <div>
        <button class="text-black bg-indigo-500 font-bold" @click="login">Login</button>
        
    </div>
</template>
<script>
import { useAuth0 } from '@auth0/auth0-vue';
 export default{
    data() {
        return {
            
        }
    },
    methods: {
        
    
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
 }


</script>