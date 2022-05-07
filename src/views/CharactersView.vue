<template>
  <div class="about">
    <CharactersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersComponent from '@/components/CharactersComponent.vue'

export default {
  name: 'StarshipsView',
  components: {
    CharactersComponent
  }
}
</script>
