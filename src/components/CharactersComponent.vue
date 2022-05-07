<template>
  <div>
    <div class="col-12 col-lg-10 mx-auto">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-3 g-2 g-xl-5 g-lg-3 m-2">
        <div v-for="(pilot, index) in characterList" :key="index" class="col">
          <PilotComponent :pilot="pilot.url" :index="index"/>
        </div>
      </div>
    </div>
    <button v-if="buttonMoreCharacters" @click="addMoreCharacters" class="rounded-pill bg-dark w-25 text-center text-light mx-auto my-3 p-1">View more</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PilotComponent from '@/components/PilotComponent.vue'


export default {
  name: 'CharactersComponent',
  components: {
    PilotComponent
  },
  computed: {
    ...mapGetters({
      characterList : 'getCharacterList',
      buttonMoreCharacters : 'getButtonMoreCharacters'
    })
  },
  created() {
    if(this.characterList.length ==0 ){
      this.$store.dispatch('getCharacterList');
    }
  },
  methods: {
    addMoreCharacters(){
      this.$store.dispatch('getMoreCharacters');
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
