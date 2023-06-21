<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <BannerComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComponent,
    BannerComponent,
  }
}
</script>
