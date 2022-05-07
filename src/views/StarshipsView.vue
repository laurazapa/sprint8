<template>
  <div class="about">
    <StarshipsComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import StarshipsComponent from '@/components/StarshipsComponent.vue'

export default {
  name: 'StarshipsView',
  components: {
    StarshipsComponent
  }
}
</script>
