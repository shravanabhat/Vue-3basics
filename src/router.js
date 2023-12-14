import {createRouter, createWebHistory} from 'vue-router';
import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
import Header from "./pages/Header.vue";
import Auth from "./pages/Auth.vue";
const routes = [
    {path: '/login', component: Login},
    {path: '/signup', component: Signup},
    {path: '/about', component: AboutView},
    {path: '/hello', component: HomeView},
    {path: '/header', component: Header},
    {path: '/auth', component: Auth}

];  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;