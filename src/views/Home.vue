<template>
  <div class="home">
    <banner></banner>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/base/banner.vue'

export default {
  name: 'home',
  components: {
    banner
  }
}
</script>
