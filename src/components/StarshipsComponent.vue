<template>
  <div>
    <div class="py-4">
      <div v-for="(ship, index) in starshipList" :key="index" class="p-3 text-start col-md-6 mx-auto my-3 shipContainer">
        <router-link :to="`/ship/${ship.id}`"> <span class="shipName">{{ ship.name }}</span> <br> <span class="shipModel">{{ ship.model }}</span></router-link>
      </div>
    </div>
    <button v-if="buttonMoreShips" @click="addMoreStarships" class="rounded-pill bg-dark w-25 text-center text-light mx-auto my-3 p-1">View more</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StarshipsComponent',
  computed: {
    ...mapGetters({
      starshipList : 'getStarshipList',
      buttonMoreShips : 'getButtonMoreShips'
    })
  },
  created() {
    if(this.starshipList.length ==0 ){
          this.$store.dispatch('getStarshipList');
    }
  },
  methods: {
    addMoreStarships(){
      this.$store.dispatch('getMoreShips');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shipName{
  font-size: 1.3rem;
}
a{
  text-decoration: none;
  color: gray;
}
.shipContainer{
  background-color: #111;
}

</style>
