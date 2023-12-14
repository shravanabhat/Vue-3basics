<script setup>
import TheWelcome from './components/TheWelcome.vue'
import WelcomeItem from './components/WelcomeItem.vue';
import Signup from './pages/Signup.vue';
import Header from './pages/Header.vue';
</script>
<template>
  
  <div>
  <br><br>
        <a class="text-3xl bg-clip-padding text-black" href="/login">  Login   | </a>
        <a class="text-3xl bg-clip-padding text-black" href="/signup">  signup | </a>
        <a  class="text-3xl bg-clip-padding text-black" href="/about">  About | </a>
        <a  class="text-3xl bg-clip-padding text-black" href="/login">  Logout </a>
        <br><br><br>
        <img src="./assets/logo.jpg" alt="kashta">   
  </div>
    <div class="nav  text-lg  bg-gray-200 text-black">
<router-view></router-view>
    </div>
  

  
</template>
<script>
export default {
  name:'App',
  components:{ WelcomeItem },
  }
  
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
