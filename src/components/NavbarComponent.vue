<template>
    <div>
        <nav>
            <div class="main_nav">
              <router-link to="/">HOME</router-link>
              <router-link to="/starships">STARSHIPS</router-link>
              <router-link to="/characters">CHARACTERS</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavbarComponent',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  margin-top: 20px;
  padding: 8px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

nav a {
  font-weight: bold;
  color: #666;
  text-decoration: none;
}
.main_nav a{
  padding: 8px 10px;
  border: 1px solid gray
}

nav a.router-link-exact-active {
  color: #fff;
  font-weight: 800;
  border-bottom: 2px solid blue;
}

</style>
