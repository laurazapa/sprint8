<template>
  <div class="hello">
    <div v-if="filmList[index]">
      <div class="card bg-dark">
        <div class="card-body p-1 pt-2">
          <h5 class="card-title small text-center">{{ filmList[index].title }}</h5>
        </div>
        <img :src="`https://starwars-visualguide.com/assets/img/films/${filmList[index].id}.jpg`" class="card-img-bottom" :alt="filmList[index].title">
        
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StarshipsComponent',
  props: ['film', 'index'],
  data(){
    return{
      url : this.$props.film
    }
  },
  computed: {
    ...mapGetters({
      filmList : 'getFilmList',
    })
  },
  created() {
    this.$store.dispatch('getFilmAPI', {url: this.$props.film, index: this.index });
  },
  watch: {
    film(newUrlFilm){
      this.$store.dispatch('getFilmAPI', {url: newUrlFilm, index: this.index });
    }
  }
}
</script>

<style scoped>
  h5{
    color: #ccc;
  }
</style>
