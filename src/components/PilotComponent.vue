<template>
  <div class="hello">
    <div v-if="pilotList[index]">

      <div class="card card bg-dark" style="">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-4">
            <img :src="`https://starwars-visualguide.com/assets/img/characters/${pilotList[index].id}.jpg`" class="img-fluid rounded-start" :alt="pilotList[index].name">
          </div>
          <div class="col-8">
            <div class="card-body">
              <h4 class="card-title">{{ pilotList[index].name }}</h4>
              <div class="card-text">
                <p class="mb-0"> 
                  <span v-if="pilotList[index].gender=='male'" class="sex"> ♂ </span>
                  <span v-else class="sex">♀</span> 
                  {{ pilotList[index].height }}cm - {{ pilotList[index].mass }}kg <br>
                <b>- Hair color: </b> {{ pilotList[index].hair_color }}<br>
                <b>- Skin color: </b> {{ pilotList[index].skin_color }}<br>
                <b>- Birth year: </b> {{ pilotList[index].birth_year }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StarshipsComponent',
  props: ['pilot', 'index'],
  data(){
    return{
      url : this.$props.pilot
    }
  },
  computed: {
    ...mapGetters({
      pilotList : 'getPilotList',
    })
  },
  created() {
    // console.log(this.$props.pilot);
    this.$store.dispatch('getPilotAPI', {url: this.$props.pilot, index: this.index });
  },
  watch: {
    pilot(newUrlPilot){
      this.$store.dispatch('getPilotAPI', {url: newUrlPilot, index: this.index });
    }
  }
}
</script>

<style scoped>
  .card-text{
    color: gray;
  }
  h4{
    color: #ccc;
  }
  .sex{
    font-size: 22px;
  }
</style>
