<template>
  <div class="mb-5">
    <div class="m-4">
      <img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-emblema.jpg" alt="STAR WARS" class="logo">
    </div>
    <nav>
      <div class="login_register" v-if="!loggedin">
        <router-link to="/login" class="m-3">LOGIN</router-link> // 
        <router-link to="/register" class="m-3">SIGN UP</router-link>
      </div>
      <div v-else class="login_register">
          <router-link to="/" @click="logout" class="m-3">LOGOUT</router-link>
      </div>
    </nav>
    <NavbarComponent />
    <router-view/>
  </div>
  
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'StarshipsView',
  components: {
    NavbarComponent
  },
  computed: {
    ...mapGetters({
      loggedin : 'getLoggedin',
    })
  },
  methods: {
      logout(){
        this.$store.dispatch('setLoggedoutAction');
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: gray;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body{
  background-color: black !important;
}
.logo{
  width: 230px;
}

nav a {
  font-weight: bold;
  color: #666;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #fff;
  font-weight: 800;
  border-bottom: 2px solid blue;
}

.login_register{
    position: absolute;
    top: 50px;
    right: 10px;
}
@media (max-width: 800px) {
    .login_register{
      position: static;
    }
}

</style>
