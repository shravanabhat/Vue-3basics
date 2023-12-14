import './assets/main.css';

import { createApp } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import './assets/input.css';
import App from './App.vue';
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);
app.use(createAuth0({
    domain:"dev-z8o018p3e78jgamt.us.auth0.com",
    clientId:"i5ya35cstx7d1uRwdYnoxOdPYDZSI5n7",
    authorizationParams:{
        redirect_uri: "http://localhost:5173/login",
    },
}))


  
app.use(router);

app.mount('#app');
