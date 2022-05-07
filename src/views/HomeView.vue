<template>
  <div class="home vh-100">
    <div>
      <h1 class="pt-5 mb-3">STAR WARS SHIPS</h1>
    </div>
    <router-link to="/starships"><button class="rounded-pill bg-dark w-25 text-center text-light mx-auto my-3 p-1">Start</button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
@media (max-width: 800px) {
    img{
      width: 100%;
    }
}
.home{
  background-image: url('../../public/deathstar.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;}
</style>
