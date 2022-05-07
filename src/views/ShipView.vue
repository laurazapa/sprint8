<template>
  <div class="container pt-5" v-if="starship">
    <h1>{{starship.name}}</h1>
    <div class="row d-flex align-items-center">
      <div class="p-4 col-lg-6">
        <img :src="starship.image" :alt="starship.name" class="img_ship">
      </div>

      <div class="col-lg-6">
        <h5 class="rounded-pill bg-dark w-50 text-center mx-auto mb-5 p-1 info">Basic information</h5>
        <div class="row text-start d-flex justify-space-around">
          <div class="col-6">
            <p><b>Model: </b> {{ starship.model }}</p>
            <p><b>Manufacturer: </b> {{ starship.manufacturer }}</p>
            <p><b>Cost: </b> {{ starship.cost_in_credits }} credits</p>
            <p><b>Crew: </b> {{ starship.crew }}</p>
          </div>
          <div class="col-6">
            <p><b>Hyperdrive rating: </b> {{ starship.hyperdrive_rating }}</p>
            <p><b>Max atmosphering speed: </b> {{ starship.max_atmosphering_speed }}</p>
            <p><b>Passengers: </b> {{ starship.passengers }}</p>
            <p><b>MGLT: </b> {{ starship.MGLT }}</p>
          </div>
        </div>
      </div> 
      
    </div>
    
    <hr>

    <div class="row text-start d-flex justify-space-around">

      <section class="col-lg-8 p-0">
        <h5 class="rounded-pill bg-dark w-50 text-center mx-auto my-3 p-1">Pilots</h5>
        <div class="row row-cols-1 row-cols-lg-2 g-4 m-2">
          <div v-for="(pilot, index) in starship.pilots" :key="index" class="col">
            <PilotComponent :pilot="pilot" :index="index"/>
          </div>
        </div>
      </section>

      <section class="col-lg-4">
        <h5 class="rounded-pill bg-dark w-50 text-center mx-auto my-3 p-1">Movies</h5>
        <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
          <div v-for="(film, index) in starship.films" :key="index" class="col">
            <FilmComponent :film="film" :index="index"/>
          </div>
        </div>
      </section>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import PilotComponent from '@/components/PilotComponent.vue'
import FilmComponent from '@/components/FilmComponent.vue'


export default {
  name: 'ShipView',
  components: {
    PilotComponent,
    FilmComponent
  },
  created() {
    this.$store.dispatch('getStarship', this.$route.params.id);
  },
  computed: {
    ...mapGetters({
      starship : 'getStarship'
    })
  },
}
</script>

<style scoped>
  h1, h5{
    color: gray;
  }
  .img_ship{
    width: 90%;
    height: auto;
  }
  @media (max-width: 800px) {
      .info{
        width: 80% !important;
      }
  }
</style>
